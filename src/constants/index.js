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
    login: dserverDomain + '/auth/costomer/login',
    register: dserverDomain + '/costomer',
    token: dserverDomain + '/auth/costomer/token',
    products: dserverDomain + '/product',
    orders: dserverDomain + '/order',
    uploadfile: dserverDomain + '/order/uploadfile',
    zones: dserverDomain + '/zones',
    user: dserverDomain + '/user',
    checkout: dserverDomain + '/checkout',
    updateAvtar: dserverDomain + 'costomer/change-avtar/',
    customer: dserverDomain + '/costomer/',
    forgetPassword: dserverDomain + '/auth/costomer/forget-password/',
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