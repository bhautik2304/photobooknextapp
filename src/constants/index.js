const userProfile = '/profile';
const serverDomain = 'http://localhost:8000';
const serverApiDomain = 'http://localhost:8000/api';

export const appRoutes = {
    Home: '/',
    Products: '/products',
    AboutUS: '/about-us',
    Support: '/support',
    StartPrinting: '/start-printing',
    CreateAccount: '/create-account',
    Login: '/login',
    forgetPassword: '/forget-password',

    // users Profiles Routes
    userProfile: userProfile,
    userProfileOrders: `${userProfile}/orders`,

    // checkout routes
    checkout: 'check-out'
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