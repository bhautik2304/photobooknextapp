import axios from 'axios'
import { isLocalStorageAvailable } from '@/utils'

const userProfile = '/Profiles';
const dserverDomain = 'http://localhost:8000/api';
const serverApiDomain = 'https://api.photokrafft.com/api';

export const appRoutes = {
    Home: '/',
    Products: '/products',
    AboutUS: '/About-US',
    Support: '/Faqs',
    StartPrinting: '/Start-Printing',
    CreateAccount: '/Create-Account',
    Login: '/Login',
    forgetPassword: '/Forget-password',
    services: '/Services',

    // users Profiles Routes
    userProfile: userProfile,
    userProfileOrders: `${userProfile}/orders`,

    // checkout routes
    checkout: 'check-out'
}

export const apiRoutes = {
    // auth routes
    login: dserverDomain + '/auth/customer/login',
    register: dserverDomain + '/auth/customer/register',
    token: dserverDomain + '/auth/customer/token',
    products: dserverDomain + '/product',
    orders: dserverDomain + '/order',
    uploadfile: dserverDomain + '/order/uploadfile',
    zones: dserverDomain + '/zones',
    user: dserverDomain + '/user',
    checkout: dserverDomain + '/checkout',
    updateAvtar: dserverDomain + 'customer/change-avtar/',
    customer: dserverDomain + '/customer/',
    forgetPassword: dserverDomain + '/auth/customer/forget-password/',
}

export const localstorageKey = {
    authKey: 'authKey',
    authStatus: 'authStatus',
    user: 'user',
    zone: 'zone',
    coverphoto: 'coverphoto',
}

export const errorText = {

}
export const productFormStep = {
    product: "select_product",
    orientation: "select_orientation",
    papper: "select_papers",
    cover: "select_cover",
    event: "select_event",
    boxsleeve: "select_boxsleeve",
}

const userKey = isLocalStorageAvailable() ? localStorage.getItem(localstorageKey.authKey) : null

export const appAxios = axios.create({
    headers: {
        Authorization: userKey,
    }
})

export const secretTokken = {
    dropbox: "sl.ByQ80A7k_83UKMUbIZ1eorKTGj3u_pvWwWygd4kOsbfl7nC8ii4yOfGM3Mg5gH4VHk6FmXLnUOvd-2YrEdXU7LjrR1xUQ-jCVMf3kBlLc7lU6fyU_AaMMxjACyDRF1yapW5K2BaAxoFpSsZlOuEDrpE"
}

// Call the refreshAccessToken function with your refresh token
// export const token = refreshAccessToken(refreshToken);


