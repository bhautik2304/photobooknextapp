'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { apiRoutes, appRoutes, localstorageKey } from '@/constants'
import Link from 'next/link'
import axios from 'axios'
import { authLogin,authLogout } from '@/Redux/Slice/authSlice'
import { fetchUsers } from '@/Redux/Slice/userSlice'
import Avatar from 'react-avatar';

function Navbar() {

    // const [authStatus, setAuthStatus] = useState(false)

    const pathname = usePathname()
    // const 
    const dispatch = useDispatch()

    const { authStatus, user } = useSelector(state => state.auth)

    const token = localStorage.getItem(localstorageKey.authKey)

    useEffect(() => {
        if (token) {
            console.log(JSON.parse(token))
            axios.post(apiRoutes.token, { token: JSON.parse(token) }).then(res => {
                if (res.data.code == 200) {
                    dispatch(authLogin(res.data))
                    dispatch(fetchUsers(res.data.user.id))
                    return
                }
            }).catch(err => console.log(err))
        } else {
            dispatch(authLogout())
        }
    }, [])

    return (
        <div>
            <header className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link href="#" className="navbar-brand">
                        <img src={'/assets/img/logo.png'} alt='Photokraft logo' width={220} height={100} />
                        {/* Around */}
                    </Link>
                    {authStatus &&
                        <>
                            <div class="dropdown nav d-block order-lg-2 ms-auto">
                                <a href="#" class="nav-link d-flex align-items-center p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <img src={user?.compunys_logo} class="border rounded-circle" width="48" alt="Isabella Bocouse" /> */}
                                <Avatar name={user?.name} color={"#212121"} size={48} round={true} />
                                    <div class="d-none d-sm-block ps-2">
                                        <div class="fs-xs lh-1 opacity-60">Hello,</div>
                                        <div class="fs-sm dropdown-toggle">{user?.name}</div>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end my-1">
                                    <h6 class="dropdown-header fs-xs fw-medium text-body-secondary text-uppercase pb-1">Account</h6>
                                    <Link href={appRoutes.userProfile} class="dropdown-item">
                                        <i class="ai-user-check fs-lg opacity-70 me-2"></i>
                                        Overview
                                    </Link>
                                    <Link href={appRoutes.userProfileOrders} class="dropdown-item">
                                        <i class="ai-cart fs-lg opacity-70 me-2"></i>
                                        Orders
                                    </Link>
                                    {/* <a href="#" class="dropdown-item">
                                        <i class="ai-wallet fs-base opacity-70 me-2 mt-n1"></i>
                                        Billing
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <h6 class="dropdown-header fs-xs fw-medium text-body-secondary text-uppercase pb-1">Dashboard</h6>

                                    <a href="#" class="dropdown-item">
                                        <i class="ai-activity fs-lg opacity-70 me-2"></i>
                                        Earnings
                                    </a>
                                    <a href="#" class="dropdown-item d-flex align-items-center">
                                        <i class="ai-messages fs-lg opacity-70 me-2"></i>
                                        Chat
                                        <span class="badge bg-danger ms-auto">4</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="ai-heart fs-lg opacity-70 me-2"></i>
                                        Favorites
                                    </a> */}
                                    <div class="dropdown-divider"></div>
                                <button onClick={() => dispatch(authLogout())} class="dropdown-item">
                                        <i class="ai-logout fs-lg opacity-70 me-2"></i>
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="collapse navbar-collapse" id="navbarCollapse1">
                        <ul className="navbar-nav me-auto" >
                            <li className={`nav-item ${(pathname == appRoutes.Home) && 'active'}`}>
                                <Link href={appRoutes.Home} className="nav-link">Home</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.Products) && 'active'}`}>
                                <Link href={appRoutes.Products} className="nav-link">Products</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.AboutUS) && 'active'}`}>
                                <Link href={appRoutes.AboutUS} className="nav-link">About US</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.Support) && 'active'}`}>
                                <Link href={appRoutes.Support} className="nav-link">Support</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.StartPrinting) && 'active'}`}>
                                <Link href={appRoutes.StartPrinting} className="nav-link">Start Printing</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto align-items-center">
                                {authStatus ? (
                                    <>
                                        {/* Login */}
                                    </>
                                ) : (
                                    <>
                                        <li className={`nav-item ${(pathname == appRoutes.Login) && 'active'}`}>
                                            <Link href={appRoutes.Login} className="nav-link">Login</Link>
                                        </li>
                                        <li className={`nav-item ${(pathname == appRoutes.CreateAccount) && 'active'}`}>
                                            {/* <Link h="#" className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link> */}
                                            <Link href={appRoutes.CreateAccount} className="btn btn-primary btn-sm fs-sm ms-3 mb-4 mb-lg-0" style={{ borderRadius: '5px !important', fontSize: '12px !important', backgroundColor: '#5bb5a2 !important' }} >
                                                {/* <i className="ai-user me-2 ms-n1"></i> */}
                                                Create Account
                                            </Link>
                                        </li>
                                    </>)}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar