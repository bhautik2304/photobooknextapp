import { localstorageKey, appAxios } from '@/constants'
import { loadStripe } from "@stripe/stripe-js";

let stripeInstance = null;

export const getStripePromise = async () => {
    if (stripeInstance) return stripeInstance; // Prevent reloading

    const response = await appAxios.post("http://192.168.1.39:8000/api/secret/stripe");

    const encryptedKey = response.headers['x-photokrafft-pk'];
    const shared = response.headers['x-photokrafft-shared'];

    const publishableKey = await decryptLaravelAES(encryptedKey, shared);

    console.log("Decrypted Stripe Publishable Key:", publishableKey);

    stripeInstance = await loadStripe(publishableKey);
    return stripeInstance;
};

export const zonePrice = (price) => {
    if (price) {
        const zone = window.localStorage.getItem(localstorageKey.zone) || 'IND';
        const zonePrice = price.filter((data) => data.countryzone_id == zone)[0];
        return {
            priceSrring: `${zonePrice?.currency?.currency_sign || zonePrice?.zone?.currency_sign
                } ${zonePrice?.price}`,
            price: cutFloat(zonePrice?.price),
            currency:
                zonePrice?.currency?.currency_sign ||
                zonePrice?.zone?.currency_sign,
        };
    } else {
        return {}
    }
}

export const isLocalStorageAvailable = () => {
    try {
        const testKey = '__test_key__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
};

export const cutFloat = (value) => {
    return parseFloat(value.toFixed(2));
}

export const getAwsKey = async () => {
    const secret = await appAxios.post("http://192.168.1.39:8000/api/secret/aws").then(async (res) => {
        const id = res.headers['x-photokrafft-dhdhka'];  // note: lowercase
        const secret = res.headers['x-photokrafft-casd'];
        const shared = res.headers['x-photokrafft-shared'];

        const AWS_ID = await decryptLaravelAES(id, shared)
        const AWS_Secret = await decryptLaravelAES(secret, shared)
        return {
            AWS_ID,
            AWS_Secret
        }
    })
    return secret
}


function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}


async function decryptLaravelAES(encryptedBase64, passphrase) {
    const rawData = base64ToArrayBuffer(encryptedBase64);
    const iv = rawData.slice(0, 16);
    const data = rawData.slice(16);

    // Derive key (must match Laravel's hash('sha256'))
    const keyBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(passphrase));

    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyBuffer,
        { name: 'AES-CBC' },
        false,
        ['decrypt']
    );

    const decrypted = await crypto.subtle.decrypt(
        {
            name: 'AES-CBC',
            iv: iv
        },
        cryptoKey,
        data
    );

    return new TextDecoder().decode(decrypted);
}