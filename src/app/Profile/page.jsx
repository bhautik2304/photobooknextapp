import React from 'react'
// import { Metadata } from 'next'

export const metadata = {
    title: 'Photokraft - Users Profile',
}
function ProfilePage() {
    return (
        <>
            {/* <!-- Page content--> */}
            <div className="col-lg-9">
                {/* <h1 className="h3 mb-4">Your Profile</h1> */}
                {/* <!-- Basic info--> */}
                <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
                    <div className="card-body">
                        <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
                            <i className="ai-user text-primary lead pe-1 me-2"></i>
                            <h2 className="h4 mb-0">Basic info</h2>
                            <a className="btn btn-sm btn-secondary ms-auto" href="account-settings.html"><i className="ai-edit ms-n1 me-2"></i>Edit info</a>
                        </div>
                        <div className="d-md-flex align-items-center">
                            <div className="d-sm-flex align-items-center">
                                <div className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" style={{ width: '80px', height: '80px', backgroundImage: 'url(assets/img/avatar/02.jpg)' }}></div>
                                <div className="pt-3 pt-sm-0 ps-sm-3">
                                    <h3 className="h5 mb-2">Isabella Bocouse<i className="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
                                    <div className="text-muted fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
                                        <div className="d-flex align-items-center me-3"><i className="ai-mail me-1"></i>email@example.com</div>
                                        <div className="d-flex align-items-center text-nowrap"><i className="ai-map-pin me-1"></i>USA, $</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 mb-2 mb-sm-3">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <table className="table mb-0">
                                    <tr>
                                        <td className="border-0 text-muted py-1 px-0">Phone</td>
                                        <td className="border-0 text-dark fw-medium py-1 ps-3">+1 234 567 890</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0 text-muted py-1 px-0">Address</td>
                                        <td className="border-0 text-dark fw-medium py-1 ps-3">303,Ellorpark, Alapuri, Vadodar</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0 text-muted py-1 px-0">State</td>
                                        <td className="border-0 text-dark fw-medium py-1 ps-3">Gujarat</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0 text-muted py-1 px-0">Country</td>
                                        <td className="border-0 text-dark fw-medium py-1 ps-3">India</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="alert alert-success d-flex mb-0" role="alert"><i className="ai-circle-success fs-xl"></i>
                            <div className="ps-2">Fill in the information 100% correct  to receive quality service.</div>
                        </div>
                    </div>
                </section>
                <div className="row g-4 mb-4">
                    {/* <!-- Address--> */}
                    <section className="col-12">
                        <div className="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
                                    <i className="ai-user text-primary lead pe-1 me-2"></i>
                                    <h2 className="h4 mb-0">Company Details</h2>
                                    <a className="btn btn-sm btn-secondary ms-auto" href="account-settings.html">
                                        <i className="ai-edit ms-n1 me-2"></i>Edit info
                                    </a>
                                </div>
                                <div className="pb-1 mb-2">
                                    <h5 className="h5 p-0 m-0">SAS Cube Ltd.</h5>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <div className="pb-1 my-3">
                                            <h6 className="h6 p-0 m-0">Social Profiles</h6>
                                            <div className="row my-3">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <p><a href="#">facebook.com</a></p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <p><a href="#">facebook.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <img src="./assets/img/logo.png" alt="" srcSet="logo" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!-- Billing--> */}

                </div>
                {/* <!-- Orders--> */}
                <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                    <div className="card-body">
                        <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i className="ai-cart text-primary lead pe-1 me-2"></i>
                            <h2 className="h4 mb-0">Orders</h2><a className="btn btn-sm btn-secondary ms-auto" href="account-orders.html">View all</a>
                        </div>
                        {/* <!-- Orders accordion--> */}
                        <div className="accordion accordion-alt accordion-orders" id="orders">
                            {/* <!-- Order--> */}
                            <div className="accordion-item border-top mb-0">
                                <div className="accordion-header"><a className="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderOne">
                                    <div className="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted">#78A6431D409</div><span className="badge bg-faded-info text-info fs-xs">In progress</span>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                            <div className="d-sm-none fs-sm text-muted mb-2">Date</div>
                                            <div className="fs-sm fw-medium text-dark">Jan 27, 2022</div>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted mb-2">Total</div>
                                            <div className="fs-sm fw-medium text-dark">$16.00</div>
                                        </div>
                                    </div>
                                    <div className="accordion-button-img d-none d-sm-flex ms-auto">
                                        <div className="mx-1"><img src="assets/img/account/orders/01.png" width="48" alt="Product" /></div>
                                    </div></a></div>
                                <div className="accordion-collapse collapse" id="orderOne" data-bs-parent="#orders">
                                    <div className="accordion-body">
                                        <div className="table-responsive pt-1">
                                            <table className="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center"><a className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/01.png" width="110" alt="Product" /></a>
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Candle in concrete bowl</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>Gray night</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$16</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$16</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="bg-secondary rounded-1 p-4 my-2">
                                            <div className="row">
                                                <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                    <div className="fs-sm">Upon the delivery</div><a className="btn btn-link py-1 px-0 mt-2" href="#"><i className="ai-time me-2 ms-n1"></i>Order history</a>
                                                </div>
                                                <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                    <div className="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                </div>
                                                <div className="col-md-4 col-lg-3 text-md-end">
                                                    <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i className="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Order--> */}
                            <div className="accordion-item border-top mb-0">
                                <div className="accordion-header"><a className="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderTwo">
                                    <div className="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted">#47H76G09F33</div><span className="badge bg-faded-danger text-danger fs-xs">Canceled</span>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                            <div className="d-sm-none fs-sm text-muted mb-2">Date</div>
                                            <div className="fs-sm fw-medium text-dark">Sep 14, 2022</div>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted mb-2">Total</div>
                                            <div className="fs-sm fw-medium text-dark">$59.00</div>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="accordion-collapse collapse" id="orderTwo" data-bs-parent="#orders">
                                    <div className="accordion-body">
                                        <div className="table-responsive pt-1">
                                            <table className="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Analogue wall clock</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>Turquoise</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$25</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$25</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Glossy round vase</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>White</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$15</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$15</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center"><a className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/06.png" width="110" alt="Product" /></a>
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Ceramic flower pot</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>Gray concrete</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$19</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$19</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="bg-secondary rounded-1 p-4 my-2">
                                            <div className="row">
                                                <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                    <div className="fs-sm">Upon the delivery</div><a className="btn btn-link py-1 px-0 mt-2" href="#"><i className="ai-time me-2 ms-n1"></i>Order history</a>
                                                </div>
                                                <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                    <div className="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                </div>
                                                <div className="col-md-4 col-lg-3 text-md-end">
                                                    <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i className="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Order--> */}
                            <div className="accordion-item border-top mb-0">
                                <div className="accordion-header"><a className="accordion-button fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderThree">
                                    <div className="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted">#34VB5540K83</div><span className="badge bg-faded-primary text-primary fs-xs">Delivered</span>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                            <div className="d-sm-none fs-sm text-muted mb-2">Date</div>
                                            <div className="fs-sm fw-medium text-dark">Jul 10, 2022</div>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted mb-2">Total</div>
                                            <div className="fs-sm fw-medium text-dark">$38.00</div>
                                        </div>
                                    </div>
                                    <div className="accordion-button-img d-none d-sm-flex ms-auto">
                                        <div className="mx-1"><img src="assets/img/account/orders/01.png" width="48" alt="Product" /></div>
                                        <div className="mx-1"><img src="assets/img/account/orders/05.png" width="48" alt="Product" /></div>
                                    </div></a></div>
                                <div className="accordion-collapse collapse" id="orderThree" data-bs-parent="#orders">
                                    <div className="accordion-body">
                                        <div className="table-responsive pt-1">
                                            <table className="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center"><a className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/01.png" width="110" alt="Product" /></a>
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Candle in concrete bowl</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>Gray night</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$16</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$16</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center"><a className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/02.png" width="110" alt="Product" /></a>
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Exquisite glass vase </a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>Rose</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">2</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$11</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$22</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="bg-secondary rounded-1 p-4 my-2">
                                            <div className="row">
                                                <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                    <div className="fs-sm">Upon the delivery</div><a className="btn btn-link py-1 px-0 mt-2" href="#"><i className="ai-time me-2 ms-n1"></i>Order history</a>
                                                </div>
                                                <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                    <div className="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                </div>
                                                <div className="col-md-4 col-lg-3 text-md-end">
                                                    <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i className="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Order--> */}
                            <div className="accordion-item border-top border-bottom mb-0">
                                <div className="accordion-header"><a className="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderFour" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderFour">
                                    <div className="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted">#502TR872W2</div><span className="badge bg-faded-primary text-primary fs-xs">Delivered</span>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                            <div className="d-sm-none fs-sm text-muted mb-2">Date</div>
                                            <div className="fs-sm fw-medium text-dark">May 11, 2022</div>
                                        </div>
                                        <div className="me-3 me-sm-4">
                                            <div className="fs-sm text-muted mb-2">Total</div>
                                            <div className="fs-sm fw-medium text-dark">$17.00</div>
                                        </div>
                                    </div>
                                    <div className="accordion-button-img d-none d-sm-flex ms-auto">

                                    </div></a></div>
                                <div className="accordion-collapse collapse" id="orderFour" data-bs-parent="#orders">
                                    <div className="accordion-body">
                                        <div className="table-responsive pt-1">
                                            <table className="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                <tr>
                                                    <td className="border-0 py-1 px-0">
                                                        <div className="d-flex align-items-center"><a className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/07.png" width="110" alt="Product" /></a>
                                                            <div className="ps-3 ps-sm-4">
                                                                <h4 className="h6 mb-2"><a href="shop-single.html">Dispenser for soap</a></h4>
                                                                <div className="text-muted fs-sm me-3">Color: <span className='text-dark fw-medium'>White marble</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Quantity</div>
                                                        <div className="fs-sm fw-medium text-dark">1</div>
                                                    </td>
                                                    <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Price</div>
                                                        <div className="fs-sm fw-medium text-dark">$17</div>
                                                    </td>
                                                    <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div className="fs-sm text-muted mb-2">Total</div>
                                                        <div className="fs-sm fw-medium text-dark">$17</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="bg-secondary rounded-1 p-4 my-2">
                                            <div className="row">
                                                <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                    <div className="fs-sm">Upon the delivery</div><a className="btn btn-link py-1 px-0 mt-2" href="#"><i className="ai-time me-2 ms-n1"></i>Order history</a>
                                                </div>
                                                <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                    <div className="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                </div>
                                                <div className="col-md-4 col-lg-3 text-md-end">
                                                    <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i className="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProfilePage