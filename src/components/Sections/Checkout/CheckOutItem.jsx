"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { zonePrice } from '@/utils'
import { addCoverphoto, changeOrderData } from '@/Redux/Slice/orderSlice'
import axios from 'axios'
import { localstorageKey } from '@/Constants'
function CheckOutItem() {
    const { auth: { user }, order: { product, orderData, productSize, productSheet, productcover, productpaperType, productboxSleev } } = useSelector(state => state)
    const thermelSheet = productSheet.filter(data => data.id == orderData.productSheet)[0] || null
    const papperType = productpaperType.filter(data => data.id == orderData.paperType)[0] || null
    const cover = productcover.filter(data => data.id == orderData.paperType)[0] || null
    const box = productboxSleev.filter(data => data.id == orderData.productboxSleev)[0] || null

    const dispatch = useDispatch()

    console.log(user);
    useEffect(() => {
        // add discount
        dispatch(changeOrderData({ key: 'discount', value: user?.discount }))
        dispatch(changeOrderData({ key: 'orderDiscountAmount', value: (orderData.orderTotale * user?.discount) / 100 }))
        dispatch(changeOrderData({
            key: 'orderTotale',
            value: ((orderData.boxSleeveValue + orderData.coverValue + (((orderData.sheetValue * orderData.page_qty) * orderData?.paperValue) / 100) + (orderData.sheetValue * orderData.page_qty))) - ((orderData.orderTotale * user?.discount) / 100)
        }))
    }, [])
    console.log(orderData);
    return (
        <>

            {/* <!-- Order summary--> */}
            <div class="col-lg-5 offset-lg-1 mt-5 card p-5">
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
                        <img src={thermelSheet?.sheet?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2"><a href="shop-single.html">{(thermelSheet?.sheet?.name)}</a></h3>
                                <div class="text-end ms-auto">
                                    <div class="fs-5 mb-2">{zonePrice(thermelSheet?.sheetprice)?.priceSrring} X {orderData?.page_qty} Pages</div>
                                </div>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(thermelSheet?.sheetprice)?.price * orderData?.page_qty} {user?.zone?.currency_sign}</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 mb-2 mb-sm-0" href="shop-single.html">
                        <img src={papperType?.paper?.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 "><a href="shop-single.html">{papperType?.paper?.name}</a></h3>
                                <div class="text-end ms-auto">
                                    <div class="fs-5 mb-2">{zonePrice(thermelSheet?.sheetprice)?.price * orderData?.page_qty} + {papperType?.paper?.value} %</div>
                                </div>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{
                                    (((orderData?.sheetValue * orderData.paperValue) / 100) + orderData?.sheetValue) * orderData?.page_qty} {user?.zone?.currency_sign}</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={cover?.cover?.img} width="50" alt="Product" />

                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2">
                                    <a href="shop-single.html">
                                        {cover?.cover?.name}
                                    </a>
                                </h3>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(cover?.coverprice)?.priceSrring}</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                {/* <!-- Item--> */}
                <div class="d-sm-flex align-items-center border-top py-4">
                    <a class="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0" href="shop-single.html">
                        <img src={box?.boxsleeve.img} width="50" alt="Product" />
                    </a>
                    <div class="w-100 pt-1 ps-sm-4">
                        <div class="d-flex">
                            <div class="me-3">
                                <h3 class="h5 mb-2">
                                    <a href="shop-single.html">
                                        {box?.boxsleeve?.name}
                                    </a>
                                </h3>
                            </div>
                            <div class="text-end ms-auto">
                                <div class="fs-5 mb-2">{zonePrice(box?.boxsleeveprice)?.priceSrring}.</div>
                            </div>
                        </div>
                        {/* <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i class="ai-trash"></i></a></div> */}
                    </div>
                </div>
                <div class="border-top pt-4 mb-3">
                </div>
                <ul class="list-unstyled py-3 mb-0">
                    <li class="d-flex justify-content-between mb-2">Subtotal:<span class="fw-semibold ms-2">{user?.zone?.currency_sign} {((orderData.boxSleeveValue + orderData.coverValue + (((orderData.sheetValue * orderData.page_qty) * orderData?.paperValue) / 100) + (orderData.sheetValue * orderData.page_qty)))}</span></li>
                    {
                        user?.discount &&
                        <>
                            <li class="d-flex justify-content-between mb-2">Subtotal ( after discount {user?.discount} % ):<span class="fw-semibold ms-2">{user?.zone?.currency_sign} {orderData?.orderTotale}</span></li>
                            <li class="d-flex justify-content-between mb-2">Discount:<span class="fw-semibold ms-2">{user?.zone?.currency_sign} {orderData?.orderDiscountAmount}</span></li>
                        </>
                    }
                    <li class="d-flex justify-content-between mb-2">Shipping cost:<span class="fw-semibold ms-2">{user?.zone?.currency_sign} {user?.zone?.shipingcharge}</span></li>
                </ul>
                <div class="d-flex align-items-center justify-content-between border-top fs-xl pt-4">Total:<span class="fs-3 fw-semibold text-dark ms-2">{user?.zone?.currency_sign} {orderData?.orderTotale + user?.zone?.shipingcharge}</span></div>
                <div class="my-3 py-2 border-top"><span class="fw-semibold text-danger" >Taxes are included in this price, we will send a bifurcated invoice copy on your email</span></div>
                <button class="btn btn-lg btn-primary w-100" onClick={() => {
                    // alert('msg');
                    // console.log("new code");
                    // const file = JSON.parse(localStorage.getItem(localstorageKey.coverphoto));
                    // console.log(file);

                    const formData = new FormData();
                    formData.append('orderData', JSON.stringify({ ...orderData, user: user, zone: user.zone }));
                    formData.append('coverfrontphoto', orderData.coverphoto);
                    formData.append('photoszip', orderData.photoszip);

                    axios.post('http://localhost:8000/api/order', formData)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(error => {
                            console.error('Error uploading file:', error);
                        });
                }} >Place an order</button>
            </div>
        </>
    )
}

export default CheckOutItem