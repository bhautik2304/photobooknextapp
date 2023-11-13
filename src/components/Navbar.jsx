'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { appRoutes } from '@/constants'
import Link from 'next/link'

function Navbar() {

    const pathname = usePathname()

    

    return (
        <div>
            <header className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link href="#" className="navbar-brand">
                        <img src={'/assets/img/logo.png'} alt='Photokraft logo' width={220} height={100} />
                        {/* Around */}
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="collapse navbar-collapse" id="navbarCollapse1">
                        <ul className="navbar-nav me-auto" >
                            <li className={`nav-item ${(pathname == appRoutes.Home) && 'active' }`}>
                                <Link href={appRoutes.Home} className="nav-link">Home</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.Products) && 'active' }`}>
                                <Link href={appRoutes.Products} className="nav-link">Products</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.AboutUS) && 'active' }`}>
                                <Link href={appRoutes.AboutUS} className="nav-link">About US</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.Support) && 'active' }`}>
                                <Link href={appRoutes.Support} className="nav-link">Support</Link>
                            </li>
                            <li className={`nav-item ${(pathname == appRoutes.StartPrinting) && 'active' }`}>
                                <Link href={appRoutes.StartPrinting} className="nav-link">Start Printing</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto align-items-center">
                                <li className={`nav-item ${(pathname == appRoutes.Login) && 'active' }`}>
                                    <Link href={appRoutes.Login} className="nav-link">Login</Link>
                                </li>
                                <li className={`nav-item ${(pathname == appRoutes.CreateAccount) && 'active' }`}>
                                    {/* <Link h="#" className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link> */}
                                    <Link href={appRoutes.CreateAccount} className="btn btn-primary btn-sm fs-sm ms-3 mb-4 mb-lg-0" style={{ borderRadius:'5px !important',fontSize:'12px !important',backgroundColor:'#5bb5a2 !important' }} >
                                         {/* <i className="ai-user me-2 ms-n1"></i> */}
                                        Create Account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar