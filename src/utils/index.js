import { localstorageKey } from '@/constants'

export const zonePrice = (price) => {
    if (price) {
        const zone = window.localStorage.getItem(localstorageKey.zone) || 'IND'
        const zonePrice = price.filter((data) => data.countryzone_id== zone)[0]
        return {
            priceSrring: `${zonePrice?.price} ${zonePrice?.currency?.currency_sign || zonePrice?.zone?.currency_sign}`,
            price: parseInt(zonePrice?.price),
            currency: zonePrice?.currency?.currency_sign || zonePrice?.zone?.currency_sign
        }
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