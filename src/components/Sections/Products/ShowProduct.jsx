"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { appRoutes } from '@/constants'
import { selectProduct } from '@/Redux/Slice/orderSlice'
import Link from 'next/link'
import { Product, ProductOrientation, ProductSize, ProductSheet, ProductCover, ProductBox, ProductColor, OrderDetaild } from './FormStep'
import { FaArrowRightLong } from "react-icons/fa6";
function ShowProduct() {
    const { auth: { authStatus }, product: { product }, order } = useSelector(state => state)
    const disapatch = useDispatch()
    return (
        <>

            {
                authStatus ?
                    (
                        <>
                            {
                                (order?.formStep == 0) ? (
                                    <>
                                        <h2>Select your product.</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <Product />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 1) ? (
                                    <>
                                        <h2>Select your orientation.</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductOrientation />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 2) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your sizes & Pappers.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${order?.orderData?.orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductSize />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 3) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your sizes & Pappers.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${order?.orderData?.orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductCover />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 4) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your box & sleeve.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${order?.orderData?.orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductBox />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 5) ? (
                                    <>
                                        <ProductColor />
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 6) ? (
                                    <>
                                        <div className='row mt-2 mb-2' >
                                            <OrderDetaild />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (order?.formStep == 7) ? (
                                    <>
                                    </>
                                ) : null
                            }

                        </>
                    ) : (
                        <>
                            {product ? product.map((data) => (
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                                        <img src={data?.img} alt="" srcset="" />
                                        <h6 className="my-3" >{data.name}</h6>
                                    </Link>
                                </div>)
                            ) : null}
                        </>
                    )
            }
        </>
    )
}

export default ShowProduct