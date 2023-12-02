const userProfile = '/profile';

export const appRoutes ={
    Home:'/',
    Products:'/products',
    AboutUS:'/about-us',
    Support:'/support',
    StartPrinting:'/start-printing',
    Login:'/login',
    CreateAccount:'/create-account',

    // users Profiles Routes
    userProfile:userProfile,
    userProfileOrders:`${userProfile}/orders`,
    
    // checkout routes
    checkout:'check-out'
}

export const localstorageKey={
    authKey:'authKey',
    authStatus:'authStatus',
    user:'user',
    zone:'zone'
}

export const errorText={

}