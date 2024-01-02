"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { apiRoutes, appRoutes, localstorageKey } from '@/constants';
import { useRouter } from 'next/navigation';
function RegisterForm() {

    const router = useRouter()
    // const router = useRouter()

    const [data, setData] = useState({
        name: "",
        mobaile: "",
        email: "",
        password: "",

        address: "",
        state: "",
        country: "",

        company: "",
        logo: "",
        social1: "",
        social2: "",
    })


    // axios.post()
    const submitData = async () => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone_no', data.mobaile);
        formData.append('email', data.email);
        formData.append('password', data.password);

        formData.append('address', data.address);
        formData.append('state', data.state);
        formData.append('country', data.country);

        formData.append('compunys_name', data.company);
        formData.append('compunys_logo', data.logo);
        formData.append('social_link_1', data.social1);
        formData.append('social_link_2', data.social2);
        axios.post(apiRoutes.register, formData).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div>
            <>
                <div classNameName="row">
                    <div classNameName="col-lg-6 col-md-6 col-sm-12">
                        <h6>Personal Information</h6>
                        <div className="col mb-2">
                            <input className="form-control form-control-lg" type="text" onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Your name *" required />
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                            <div className="col mb-2">
                                <input className="form-control form-control-lg" type="number" onChange={(e) => setData({ ...data, mobaile: e.target.value })} placeholder="Your Mobaile No *" required />
                            </div>
                            <div className="col mb-2">
                                <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, email: e.target.value })} type="email" placeholder="Email address *" required />
                            </div>
                        </div>
                        <div className="password-toggle mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, password: e.target.value })} type="password" placeholder="Password *" required />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                        <div className='my-4 px-5'>
                            <hr />
                        </div>
                        <h6>Company’s Information</h6>
                        <div className="col-12 password-toggle mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, company: e.target.value })} placeholder="Your Company’s Name *" required />
                        </div>
                        <div className="password-toggle mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, logo: e.target.files[0] })} type="file" placeholder="Your Company’s Logo *" required />
                        </div>
                        <span classNameName='' style={{ fontSize: '14px !important' }} >Your Company’s Logo <span classNameName='text-danger' >*</span> </span>

                    </div>
                    <div className='my-4 px-5'>
                        <hr />
                    </div>
                    {/* </div> */}
                    <div classNameName="col-lg-6 col-md-6 col-sm-12">

                        <h6>Address Details</h6>
                        <div className="password-toggle mb-2">
                            <textarea className="form-control form-control-lg" onChange={(e) => setData({ ...data, address: e.target.value })} rows={1} placeholder="Address *" required>

                            </textarea>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                            <div className="col mb-2">
                                <input className="form-control form-control-lg" type="text" onChange={(e) => setData({ ...data, state: e.target.value })} placeholder="State / Province *" required />
                            </div>
                            <div className="col mb-2">
                                <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, country: e.target.value })} type="text" placeholder="Country *" required />
                            </div>
                        </div>

                        <div className='my-4 px-5'>
                            <hr />
                        </div>

                        <h6 classNameName='' >Social Information</h6>
                        <div className="password-toggle mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, social1: e.target.value })} type="text" placeholder="Social Profile Link *" required />
                        </div>
                        <div className="password-toggle mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, social2: e.target.value })} type="text" placeholder="Social Profile Link *" required />
                        </div>
                    </div>
                </div>
                <button className="btn btn-md btn-primary w-100 my-4" onClick={() => submitData()} style={{ borderRadius: '5px !important' }}>Sign up</button>
                {/* <h2 className="h6 text-center pt-3 pt-lg-4 mb-2">Or sign in with your social account</h2> */}
                {/* <div className="row row-cols-1 row-cols-sm-2 gy-3">
                    <div className="col"><a className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href="#"><i className="ai-google fs-xl me-2"></i>Google</a></div>
                    <div className="col"><a className="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" href="#"><i className="ai-facebook fs-xl me-2"></i>Facebook</a></div>
                  </div> */}
            </>
        </div>
    )
}

export default RegisterForm