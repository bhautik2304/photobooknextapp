"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { appRoutes } from '@/constants'
import { selectProduct, setTotale } from '@/Redux/Slice/orderSlice'
import Link from 'next/link'
import { Product, ProductOrientation, ProductSize, EventDetailForm, ProductCover, ProductBox, ProductColor, OrderDetaild } from './FormStep'
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchProduct } from '@/Redux/Slice/productSlice'


function ShowProduct() {
    const { auth: { authStatus }, product: { product }, order: { formStep, orderData: { page_qty, sheetValue, paperValue, coverValue, boxSleeveValue, orderTotale } } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    useEffect(() => {
        dispatch(setTotale())
    }, [page_qty, sheetValue, paperValue, coverValue, boxSleeveValue, orderTotale,])
    return (
        <>

            {
                authStatus ?
                    (
                        <>
                            {
                                (formStep == 0) ? (
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
                                (formStep == 1) ? (
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
                                (formStep == 2) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your sizes & Pappers.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductSize />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (formStep == 3) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your sizes & Pappers.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductCover />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (formStep == 4) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Select your box & sleeve.</h2>
                                            <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${orderTotale}`}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <ProductBox />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (formStep == 5) ? (
                                    <>
                                        <div className="d-flex justify-content-between aligns-item-center">
                                            <h2>Order Detaild.</h2>
                                            {/* <span style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }} >{`Total : ${orderTotale}`}</span> */}
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className='row mt-2 mb-2' >
                                            <EventDetailForm />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (formStep == 6) ? (
                                    <>
                                        <div className='row mt-2 mb-2' >
                                            <OrderDetaild />
                                        </div>
                                    </>
                                ) : null

                            }
                            {
                                (formStep == 7) ? (
                                    <>
                                    </>
                                ) : null
                            }

                        </>
                    ) : (
                        <>
                            <div className='row mt-2 mb-2' >
                                <h2>Select your product.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} className="row" >
                                    {product ? product.map((data) => (
                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                            <img src={data?.img} alt="" srcset="" />
                                            <h6 className="my-3" >{data.name}</h6>
                                        </div>)
                                    ) : null}
                                </Link>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default ShowProduct