const userProfile = '/Profiles';
const serverDomain = 'http://localhost:8000';
const serverApiDomain = 'https://api.sascube.ltd/api';

export const appRoutes = {
    Home: '/',
    Products: '/Products',
    AboutUS: '/About-US',
    Support: '/Faqs',
    StartPrinting: '/Start-Printing',
    CreateAccount: '/Create-Account',
    Login: '/Login',
    forgetPassword: '/Forget-password',

    // users Profiles Routes
    userProfile: userProfile,
    userProfileOrders: `${userProfile}/orders`,

    // checkout routes
    checkout: 'Check-out'
}

export const apiRoutes = {
    // auth routes
    login: serverDomain + '/auth/costomer/login',
    register: serverDomain + '/costomer',
    token: serverDomain + '/auth/costomer/token',
    products: serverDomain + '/product',
    orders: serverDomain + '/order',
    zones: serverDomain + '/zones',
    user: serverDomain + '/user',
    checkout: serverDomain + '/checkout',
    updateAvtar: serverDomain + 'costomer/change-avtar/',
    customer: serverDomain + '/costomer/',
    forgetPassword: serverDomain + '/auth/costomer/forget-password/',
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