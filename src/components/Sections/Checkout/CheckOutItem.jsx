"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { zonePrice } from '@/utils'
function CheckOutItem() {
    const { order: { product, orderData, productSize, productSheet, productcover, productpaperType, productboxSleev } } = useSelector(state => state)
    const thermelSheet = productSheet.filter(data => data.id == orderData.productSheet)[0] || null
    const papperType = productpaperType.filter(data => data.id == orderData.paperType)[0] || null
    const cover = productcover.filter(data => data.id == orderData.paperType)[0] || null
    const box = productboxSleev.filter(data => data.id == orderData.productcover)[0] || null
    return (
        <>
            {/* <!-- Order summary--> */}
            <div class="col-lg-5 offset-lg-1 pt-1">
                <h2 class="pb-2 pt-md-2 my-4 mt-lg-5">Order summary</h2>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={product?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2"><a href="shop-single.html">{product?.name}</a></h3>
                            </div>
                        </div>

                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={thermelSheet?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2"><a href="shop-single.html">{(thermelSheet?.papper)}</a></h3>
                                <div class="text-end ms-auto">
                                    <div class="fs-5 mb-2">{zonePrice(thermelSheet?.price)?.price} Rs. X {orderData?.page_qty} Pages</div>
                                </div>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(thermelSheet?.price)?.price * orderData?.page_qty} Rs.</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 mb-2 mb-sm-0" href="shop-single.html">
                        <img src={papperType?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 "><a href="shop-single.html">{papperType?.papertype}</a></h3>
                                <div class="text-end ms-auto">
                                    <div class="fs-5 mb-2">{zonePrice(thermelSheet?.price)?.price * orderData?.page_qty} Rs. + {papperType?.value} %</div>
                                </div>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{(((zonePrice(thermelSheet?.price)?.price * orderData?.page_qty) * papperType?.value) / 100 + (zonePrice(thermelSheet?.price)?.price * orderData?.page_qty))} Rs.</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={cover?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2">
                                    <a href="shop-single.html">
                                        {cover?.name}
                                    </a>
                                </h3>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(cover?.price)?.price} Rs.</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={box?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2">
                                    <a href="shop-single.html">
                                        {box?.boxsleev}
                                    </a>
                                </h3>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(box?.price)?.price} Rs.</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                <div class="border-top pt-4 mb-3">
                </div>
                <ul class="list-unstyled py-3 mb-0">
                    <li class="d-flex justify-content-between mb-2">Subtotal:<span class="fw-semibold ms-2">$92.00</span></li>
                    <li class="d-flex justify-content-between mb-2">Shipping cost:<span class="fw-semibold ms-2">$15.00</span></li>
                </ul>
                <div class="d-flex align-items-center justify-content-between border-top fs-xl pt-4">Total:<span class="fs-3 fw-semibold text-dark ms-2">$115.00</span></div>
                <div class="my-3 py-2 border-top"><span class="fw-semibold text-danger" >Taxes are included in this price, we will send a bifurcated invoice copy on your email</span></div>
                <button class="btn btn-lg btn-primary w-100">Place an order</button>
            </div>
        </>
    )
}

export default CheckOutItem