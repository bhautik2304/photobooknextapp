import { appRoutes } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function page() {
    return (
        <>
        
            <div className="container-fluid py-5" style={{backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
                <div className="d-flex justify-content-center aligns-item-center">
                    <div className="card shadw-sm p-5">
                        <p>What Photokraft provides you ?</p>
                        <h2>You are just one step away to start your printing journey,<br /> Select your product.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row mt-5 mb-2">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                                    <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                                    <h6 className="my-3" >Flushmount</h6>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                                    <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                                    <h6 className="my-3" >Photobooks</h6>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                                    <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                                    <h6 className="my-3" >Photo Frames</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page