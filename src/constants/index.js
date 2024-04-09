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
    login: serverApiDomain + '/auth/customer/login',
    register: serverApiDomain + '/auth/customer/register',
    token: serverApiDomain + '/auth/customer/token',
    products: serverApiDomain + '/product',
    orders: serverApiDomain + '/order',
    uploadfile: serverApiDomain + '/order/uploadfile',
    zones: serverApiDomain + '/zones',
    user: serverApiDomain + '/user',
    checkout: serverApiDomain + '/checkout',
    updateAvtar: serverApiDomain + 'customer/change-avtar/',
    customer: serverApiDomain + '/customer/',
    forgetPassword: serverApiDomain + '/auth/customer/forget-password/',
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


