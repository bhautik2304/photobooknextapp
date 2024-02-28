const userProfile = '/Profiles';
const dsefrverDomain = 'http://localhost:8000/api';
const serverApiDomain = 'https://api.photokrafft.com/api';

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
    login: serverApiDomain + '/auth/costomer/login',
    register: serverApiDomain + '/costomer',
    token: serverApiDomain + '/auth/costomer/token',
    products: serverApiDomain + '/product',
    orders: serverApiDomain + '/order',
    zones: serverApiDomain + '/zones',
    user: serverApiDomain + '/user',
    checkout: serverApiDomain + '/checkout',
    updateAvtar: serverApiDomain + 'costomer/change-avtar/',
    customer: serverApiDomain + '/costomer/',
    forgetPassword: serverApiDomain + '/auth/costomer/forget-password/',
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