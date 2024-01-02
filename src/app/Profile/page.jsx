"use client"
import { apiRoutes, appRoutes, localstorageKey } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect } from 'next/navigation'

function ProfilePage() {
    const authStatus = localStorage.getItem(localstorageKey.authStatus);
    
    useEffect(() => {
        if (!authStatus) {
            redirect(appRoutes.Home);   
        }
        // setData(user);
    }, [authStatus]);

    const { user } = useSelector(state => state.auth);
    const [data, setData] = useState(user);
    // Check if user is not available (still loading) and show loading message
    if (!user) {
        return <div>Loading...</div>;
    }

    // Update data state when user changes (and on initial render)
    useEffect(() => {
        setData(user);
    }, [user]);

    return (
        <>
            {/* <!-- Page content--> */}
            <div className="col-lg-9">
                {/* <h1 className="h3 mb-4">Your Profile</h1> */}
                {/* <!-- Basic info--> */}
                <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
                            {/* <i className="ai-user text-primary lead pe-1 me-2"></i> */}
                            <h2 className="h4 mb-0">Basic info</h2>
                        </div>
                        {/* <div className="d-md-flex align-items-center">
                            <div className="d-sm-flex align-items-center">
                                <div className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" style={{ width: '80px', height: '80px', }} >
                                    <MyDropzone user={user} />
                                    <img src={user?.compunys_logo} alt="User" style={{ width: '80px', height: '80px', }} />
                                </div>
                                <div className="pt-3 pt-sm-0 ps-sm-3">
                                    <h3 className="h5 mb-2">{user?.name}<i className="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
                                    <div className="text-muted fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
                                        <div className="d-flex align-items-center me-3"><i className="ai-mail me-1"></i>{user?.email}</div>
                                        <div className="d-flex align-items-center text-nowrap"><i className="ai-map-pin me-1"></i>{user?.country}, {user?.zone?.currency_sign}</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row mb-2 mb-sm-3">
                            <div classNameName="col-lg-6 col-md-6 col-sm-12">
                                <h6>Personal Information</h6>
                                <div className="col mb-2">
                                    <input className="form-control form-control-lg" type="text" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} placeholder="Your name *" required />
                                </div>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                                    <div className="col mb-2">
                                        <input className="form-control form-control-lg" type="number" onChange={(e) => setData({ ...data, phone_no: e.target.value })} value={data.phone_no} placeholder="Your Mobaile No *" required />
                                    </div>
                                    <div className="col mb-2">
                                        <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} type="email" placeholder="Email address *" required />
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            <div classNameName="col-lg-6 col-md-6 col-sm-12">

                                <h6 className='mt-3' >Address Details</h6>
                                <div className="password-toggle mb-2">
                                    <textarea className="form-control form-control-lg" onChange={(e) => setData({ ...data, address: e.target.value })} value={data.address} rows={3} placeholder="Address *" required>

                                    </textarea>
                                </div>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                                    <div className="col mb-2">
                                        <input className="form-control form-control-lg" type="text" onChange={(e) => setData({ ...data, state: e.target.value })} value={data.state} placeholder="State / Province *" required />
                                    </div>
                                    <div className="col mb-2">
                                        <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, country: e.target.value })} value={data.country} type="text" placeholder="Country *" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-success d-flex mb-0" role="alert"><i className="ai-circle-success fs-xl"></i>
                            <div className="ps-2">Fill in the information 100% correct  to receive quality service.</div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary btn-sm mt-3" onClick={() => console.log(data)} type="button">Save changes</button>
                        </div>
                    </div>
                </section>
                <div className="row g-4 mb-4">
                    {/* <!-- Address--> */}
                    <section className="col-12">
                        <div className="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
                                    {/* <i className="ai-user text-primary lead pe-1 me-2"></i> */}
                                    <h2 className="h4 mb-0">Company Details</h2>
                                </div>
                                <div className="pb-1 mb-2">
                                    <h5 className="h5 p-0 m-0">{user?.compunys_name}</h5>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <div className="pb-1 my-3">
                                            <h6 className="h6 p-0 m-0">Social Profiles</h6>
                                            <div className="row my-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <p><a href={user?.social_link_1} target='blank' >{user?.social_link_1}</a></p>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <p><a href={user?.social_link_2} target='blank' >{user?.social_link_2}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <Image src={"http://localhost:8000/brand/logo/Group%20130.png"} alt="Brand logo" height={250} width={300} />
                                        {/* <img src={user?.compunys_logo} alt="Brand logo" height={250} width={300}  /> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!-- Billing--> */}

                </div>
                {/* <!-- Orders--> */}
                <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 shadow-sm" id="order-data">
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
                                    </div>
                                </a>
                                </div>
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
                                                    <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button"><i className="ai-edit me-2 ms-n1"></i>Edit Order</button>
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

