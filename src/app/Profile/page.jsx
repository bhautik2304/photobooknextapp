import React from 'react'

function ProfilePage() {
    return (
        <>
            <main class="page-wrapper" style={{ backgroundColor: '#E8F2EE' }} >
                <div class="container mt-4 mt-lg-5 mb-lg-4 my-xl-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item text-dark"><a href="#">Home</a></li>
                            <li class="breadcrumb-item text-dark"><a href="#">Products list</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Single product</li>
                        </ol>
                    </nav>
                    <div class="row pt-sm-2 pt-lg-0">
                        {/* <!-- Sidebar (offcanvas on sreens < 992px)--> */}
                        <aside class="col-lg-3 p-5 bg-body">
                            <img src="./assets/img/logo.png" alt="" />
                            <div class="position-lg-sticky top-0">
                                <div class="d-none d-lg-block" style={{ paddingTop: '50px' }}></div>
                                <div class="offcanvas-lg offcanvas-start" id="sidebarAccount">
                                    <button class="btn-close position-absolute top-0 end-0 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount"></button>
                                    <div class="offcanvas-body">
                                        {/* <div class="pb-2 pb-lg-0 mb-4 mb-lg-5"><img class="d-block rounded-circle mb-2" src="assets/img/avatar/02.jpg" width="80" alt="Isabella Bocouse" />
                                            <h3 class="h5 mb-1">Isabella Bocouse</h3>
                                            <p class="fs-sm text-muted mb-0">bocouse@example.com</p>
                                        </div> */}
                                        <nav class="nav flex-column pb-2 pb-lg-4 mb-3">
                                            <h4 class="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Your Profile</h4>
                                            <a class="nav-link fw-semibold py-2 px-0" href="#">
                                                <i class="ai-user-check fs-5 opacity-60 me-2"></i>Your Profile
                                            </a>
                                            <a class="nav-link fw-semibold py-2 px-0" href="#">
                                                <i class="ai-wallet fs-5 opacity-60 me-2"></i>Your orders
                                            </a>
                                            <a class="nav-link fw-semibold py-2 px-0" href="#">
                                                <i class="ai-cart fs-5 opacity-60 me-2"></i>Order new product
                                            </a>
                                        </nav>
                                        <nav class="nav flex-column"><a class="nav-link fw-semibold py-2 px-0" href="account-signin.html"><i class="ai-logout fs-5 opacity-60 me-2"></i>Sign out</a></nav>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/* <!-- Page content--> */}
                        <div class="col-lg-9 px-5 pb-2 pb-sm-4">
                            {/* <h1 class="h3 mb-4">Your Profile</h1> */}
                            {/* <!-- Basic info--> */}
                            <section class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i class="ai-user text-primary lead pe-1 me-2"></i>
                                        <h2 class="h4 mb-0">Basic info</h2><a class="btn btn-sm btn-secondary ms-auto" href="account-settings.html"><i class="ai-edit ms-n1 me-2"></i>Edit info</a>
                                    </div>
                                    <div class="d-md-flex align-items-center">
                                        <div class="d-sm-flex align-items-center">
                                            <div class="rounded-circle bg-size-cover bg-position-center flex-shrink-0" style={{ width: '80px', height: '80px', backgroundImage: 'url(assets/img/avatar/02.jpg)' }}></div>
                                            <div class="pt-3 pt-sm-0 ps-sm-3">
                                                <h3 class="h5 mb-2">Isabella Bocouse<i class="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
                                                <div class="text-muted fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
                                                    <div class="d-flex align-items-center me-3"><i class="ai-mail me-1"></i>email@example.com</div>
                                                    <div class="d-flex align-items-center text-nowrap"><i class="ai-map-pin me-1"></i>USA, $</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row py-4 mb-2 mb-sm-3">
                                        <div class="col-md-6 mb-4 mb-md-0">
                                            <table class="table mb-0">
                                                <tr>
                                                    <td class="border-0 text-muted py-1 px-0">Phone</td>
                                                    <td class="border-0 text-dark fw-medium py-1 ps-3">+1 234 567 890</td>
                                                </tr>
                                                <tr>
                                                    <td class="border-0 text-muted py-1 px-0">Address</td>
                                                    <td class="border-0 text-dark fw-medium py-1 ps-3">303,Ellorpark, Alapuri, Vadodar</td>
                                                </tr>
                                                <tr>
                                                    <td class="border-0 text-muted py-1 px-0">State</td>
                                                    <td class="border-0 text-dark fw-medium py-1 ps-3">Gujarat</td>
                                                </tr>
                                                <tr>
                                                    <td class="border-0 text-muted py-1 px-0">Country</td>
                                                    <td class="border-0 text-dark fw-medium py-1 ps-3">India</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="alert alert-success d-flex mb-0" role="alert"><i class="ai-circle-success fs-xl"></i>
                                        <div class="ps-2">Fill in the information 100% correct  to receive quality service.</div>
                                    </div>
                                </div>
                            </section>
                            <div class="row g-4 mb-4">
                                {/* <!-- Address--> */}
                                <section class="col-12">
                                    <div class="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
                                                <i class="ai-user text-primary lead pe-1 me-2"></i>
                                                <h2 class="h4 mb-0">Company Details</h2>
                                                <a class="btn btn-sm btn-secondary ms-auto" href="account-settings.html">
                                                    <i class="ai-edit ms-n1 me-2"></i>Edit info
                                                </a>
                                            </div>
                                            <div class="pb-1 mb-2">
                                                <h5 class="h5 p-0 m-0">SAS Cube Ltd.</h5>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-lg-8 col-md-8 col-sm-12">
                                                    <div class="pb-1 my-3">
                                                        <h6 class="h6 p-0 m-0">Social Profiles</h6>
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
                                                    <img src="./assets/img/logo.png" alt="" srcset="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                                {/* <!-- Billing--> */}

                            </div>
                            {/* <!-- Orders--> */}
                            <section class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i class="ai-cart text-primary lead pe-1 me-2"></i>
                                        <h2 class="h4 mb-0">Orders</h2><a class="btn btn-sm btn-secondary ms-auto" href="account-orders.html">View all</a>
                                    </div>
                                    {/* <!-- Orders accordion--> */}
                                    <div class="accordion accordion-alt accordion-orders" id="orders">
                                        {/* <!-- Order--> */}
                                        <div class="accordion-item border-top mb-0">
                                            <div class="accordion-header"><a class="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderOne">
                                                <div class="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted">#78A6431D409</div><span class="badge bg-faded-info text-info fs-xs">In progress</span>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                                        <div class="d-sm-none fs-sm text-muted mb-2">Date</div>
                                                        <div class="fs-sm fw-medium text-dark">Jan 27, 2022</div>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted mb-2">Total</div>
                                                        <div class="fs-sm fw-medium text-dark">$16.00</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-button-img d-none d-sm-flex ms-auto">
                                                    <div class="mx-1"><img src="assets/img/account/orders/01.png" width="48" alt="Product" /></div>
                                                </div></a></div>
                                            <div class="accordion-collapse collapse" id="orderOne" data-bs-parent="#orders">
                                                <div class="accordion-body">
                                                    <div class="table-responsive pt-1">
                                                        <table class="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/01.png" width="110" alt="Product" /></a>
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Candle in concrete bowl</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>Gray night</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$16</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$16</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="bg-secondary rounded-1 p-4 my-2">
                                                        <div class="row">
                                                            <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                                <div class="fs-sm">Upon the delivery</div><a class="btn btn-link py-1 px-0 mt-2" href="#"><i class="ai-time me-2 ms-n1"></i>Order history</a>
                                                            </div>
                                                            <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                                <div class="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                            </div>
                                                            <div class="col-md-4 col-lg-3 text-md-end">
                                                                <button class="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i class="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Order--> */}
                                        <div class="accordion-item border-top mb-0">
                                            <div class="accordion-header"><a class="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderTwo">
                                                <div class="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted">#47H76G09F33</div><span class="badge bg-faded-danger text-danger fs-xs">Canceled</span>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                                        <div class="d-sm-none fs-sm text-muted mb-2">Date</div>
                                                        <div class="fs-sm fw-medium text-dark">Sep 14, 2022</div>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted mb-2">Total</div>
                                                        <div class="fs-sm fw-medium text-dark">$59.00</div>
                                                    </div>
                                                </div>
                                            </a>
                                            </div>
                                            <div class="accordion-collapse collapse" id="orderTwo" data-bs-parent="#orders">
                                                <div class="accordion-body">
                                                    <div class="table-responsive pt-1">
                                                        <table class="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Analogue wall clock</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>Turquoise</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$25</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$25</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Glossy round vase</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>White</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$15</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$15</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/06.png" width="110" alt="Product" /></a>
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Ceramic flower pot</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>Gray concrete</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$19</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$19</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="bg-secondary rounded-1 p-4 my-2">
                                                        <div class="row">
                                                            <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                                <div class="fs-sm">Upon the delivery</div><a class="btn btn-link py-1 px-0 mt-2" href="#"><i class="ai-time me-2 ms-n1"></i>Order history</a>
                                                            </div>
                                                            <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                                <div class="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                            </div>
                                                            <div class="col-md-4 col-lg-3 text-md-end">
                                                                <button class="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i class="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Order--> */}
                                        <div class="accordion-item border-top mb-0">
                                            <div class="accordion-header"><a class="accordion-button fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderThree">
                                                <div class="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted">#34VB5540K83</div><span class="badge bg-faded-primary text-primary fs-xs">Delivered</span>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                                        <div class="d-sm-none fs-sm text-muted mb-2">Date</div>
                                                        <div class="fs-sm fw-medium text-dark">Jul 10, 2022</div>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted mb-2">Total</div>
                                                        <div class="fs-sm fw-medium text-dark">$38.00</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-button-img d-none d-sm-flex ms-auto">
                                                    <div class="mx-1"><img src="assets/img/account/orders/01.png" width="48" alt="Product" /></div>
                                                    <div class="mx-1"><img src="assets/img/account/orders/05.png" width="48" alt="Product" /></div>
                                                </div></a></div>
                                            <div class="accordion-collapse collapse" id="orderThree" data-bs-parent="#orders">
                                                <div class="accordion-body">
                                                    <div class="table-responsive pt-1">
                                                        <table class="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/01.png" width="110" alt="Product" /></a>
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Candle in concrete bowl</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>Gray night</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$16</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$16</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/02.png" width="110" alt="Product" /></a>
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Exquisite glass vase </a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>Rose</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">2</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$11</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$22</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="bg-secondary rounded-1 p-4 my-2">
                                                        <div class="row">
                                                            <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                                <div class="fs-sm">Upon the delivery</div><a class="btn btn-link py-1 px-0 mt-2" href="#"><i class="ai-time me-2 ms-n1"></i>Order history</a>
                                                            </div>
                                                            <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                                <div class="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                            </div>
                                                            <div class="col-md-4 col-lg-3 text-md-end">
                                                                <button class="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i class="ai-star me-2 ms-n1"></i>Leave a review</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Order--> */}
                                        <div class="accordion-item border-top border-bottom mb-0">
                                            <div class="accordion-header"><a class="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed" href="#orderFour" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderFour">
                                                <div class="d-flex justify-content-between w-100" style={{ maxWidth: '440px' }}>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted">#502TR872W2</div><span class="badge bg-faded-primary text-primary fs-xs">Delivered</span>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="d-none d-sm-block fs-sm text-muted mb-2">Order date</div>
                                                        <div class="d-sm-none fs-sm text-muted mb-2">Date</div>
                                                        <div class="fs-sm fw-medium text-dark">May 11, 2022</div>
                                                    </div>
                                                    <div class="me-3 me-sm-4">
                                                        <div class="fs-sm text-muted mb-2">Total</div>
                                                        <div class="fs-sm fw-medium text-dark">$17.00</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-button-img d-none d-sm-flex ms-auto">

                                                </div></a></div>
                                            <div class="accordion-collapse collapse" id="orderFour" data-bs-parent="#orders">
                                                <div class="accordion-body">
                                                    <div class="table-responsive pt-1">
                                                        <table class="table align-middle w-100" style={{ minWidth: '450px' }}>
                                                            <tr>
                                                                <td class="border-0 py-1 px-0">
                                                                    <div class="d-flex align-items-center"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" href="shop-single.html"><img src="assets/img/shop/cart/07.png" width="110" alt="Product" /></a>
                                                                        <div class="ps-3 ps-sm-4">
                                                                            <h4 class="h6 mb-2"><a href="shop-single.html">Dispenser for soap</a></h4>
                                                                            <div class="text-muted fs-sm me-3">Color: <span class='text-dark fw-medium'>White marble</span></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Quantity</div>
                                                                    <div class="fs-sm fw-medium text-dark">1</div>
                                                                </td>
                                                                <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Price</div>
                                                                    <div class="fs-sm fw-medium text-dark">$17</div>
                                                                </td>
                                                                <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                    <div class="fs-sm text-muted mb-2">Total</div>
                                                                    <div class="fs-sm fw-medium text-dark">$17</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="bg-secondary rounded-1 p-4 my-2">
                                                        <div class="row">
                                                            <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Payment:</div>
                                                                <div class="fs-sm">Upon the delivery</div><a class="btn btn-link py-1 px-0 mt-2" href="#"><i class="ai-time me-2 ms-n1"></i>Order history</a>
                                                            </div>
                                                            <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                                <div class="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                                                                <div class="fs-sm">401 Magnetic Drive Unit 2,<br />Toronto, Ontario, M3J 3H9, Canada</div>
                                                            </div>
                                                            <div class="col-md-4 col-lg-3 text-md-end">
                                                                <button class="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i class="ai-star me-2 ms-n1"></i>Leave a review</button>
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
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProfilePage