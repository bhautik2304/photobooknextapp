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
                            <img src="http://localhost:3000/assets/img/logo.png" alt="" />
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
                            <section class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <h2 class="h4 mb-0"><img src="http://localhost:3000/assets/img/icon/photo-album.png" alt="" /></h2>
                                    </div>
                                    <div className="mt-2">
                                        <h4 className='m-0 p-0'>Select your product to order .</h4>
                                        <h6 className='text-muted m-0 p-0'>Please select one option from below to order</h6>
                                    </div>
                                </div>
                                <div className="row mx-2">
                                    <div className="col-12 mb-3">
                                        <div style={{ padding: 20, backgroundColor: '#F6F6F6', alignItems: 'center', borderRadius: '10px' }} className='d-flex' >
                                            <img src="http://localhost:3000/assets/img/icon/photo-album.png" alt="" />
                                            <span style={{ fontWeight: 'bold', marginLeft: '15px' }} > FlushMount</span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div style={{ padding: 20, backgroundColor: '#F6F6F6', alignItems: 'center', borderRadius: '10px' }} className='d-flex' >
                                            <img src="http://localhost:3000/assets/img/icon/photo-album.png" alt="" />
                                            <span style={{ fontWeight: 'bold', marginLeft: '15px' }} > Photobook</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-4 my-3" style={{ display:'flex',justifyContent: 'space-between', alignItems: 'center' }}>
                                    <a class="btn btn-dark btn-sm" style={{ width:'100px' }} href="#" role="button">Next</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* <!-- Divider for dark mode only--> */}
                <hr class="d-none d-dark-mode-block" />
                {/* <!-- Sidebar toggle button--> */}
                <button class="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" data-bs-toggle="offcanvas" data-bs-target="#sidebarAccount"><i class="ai-menu me-2"></i>Account menu</button>
            </main>
        </>
    )
}

export default ProfilePage