'use client'
import React from 'react'
function Sidebar() {
    return (
        <>
            <aside className="col-lg-3 p-5 bg-body">
                <div className="position-lg-sticky top-1">
                    <div className="d-none d-lg-block">
                        <img src="./assets/img/logo.png" alt="" />
                    </div>
                    <div className="offcanvas-lg offcanvas-start" id="sidebarAccount">
                        <button className="btn-close position-absolute top-0 end-0 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount"></button>
                        <div className="offcanvas-body">
                            {/* <div className="pb-2 pb-lg-0 mb-4 mb-lg-5"><img className="d-block rounded-circle mb-2" src="assets/img/avatar/02.jpg" width="80" alt="Isabella Bocouse" />
                                            <h3 className="h5 mb-1">Isabella Bocouse</h3>
                                            <p className="fs-sm text-muted mb-0">bocouse@example.com</p>
                                        </div> */}
                            <nav className="nav flex-column pb-2 pb-lg-4 mb-3">
                                <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Your Profile</h4>
                                <a className="nav-link fw-semibold py-2 px-0" href="#">
                                    <i className="ai-user-check fs-5 opacity-60 me-2"></i>Your Profile
                                </a>
                                <a className="nav-link fw-semibold py-2 px-0" href="#">
                                    <i className="ai-wallet fs-5 opacity-60 me-2"></i>Your orders
                                </a>
                            </nav>
                            <nav className="nav flex-column"><a className="nav-link fw-semibold py-2 px-0" href="account-signin.html"><i className="ai-logout fs-5 opacity-60 me-2"></i>Sign out</a></nav>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar