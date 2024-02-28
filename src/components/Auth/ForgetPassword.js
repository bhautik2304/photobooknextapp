"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiRoutes, appRoutes, localstorageKey } from '@/constants'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authLogin } from '@/Redux/Slice/authSlice';
import { redirect, useRouter } from 'next/navigation';

function ForgetPassword() {
    const [error, setError] = useState(false)
    const [step, setStep] = useState(0)
    const [data, setData] = useState({
        email: "",
    })

    const router = useRouter()
    // const router = useRouter()
    const dispatch = useDispatch()


    const forgetReq = () => {
        axios.post(apiRoutes.forgetPassword, data).then(res => {
            if (res.data.code == 200) {
                setStep(1)
                return
            }
            setError(res.data.msg)
        }).catch(err => console.log(err))
    }

    const otpVerify = () => {
        setError(false)
        axios.post(apiRoutes.forgetPassword + '/check-otp', data).then(res => {
            if (res.data.code == 200) {
                setStep(2)
                return
            }
            setError(res.data.msg)
        }).catch(err => console.log(err))
    }

    const changePassword = () => {
        setError(false)
        axios.post(apiRoutes.forgetPassword + '/set-password', data).then(res => {
            if (res.data.code == 200) {
                router.replace(appRoutes.Login)
                return
            }
            setError(res.data.msg)
        }).catch(err => console.log(err))
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <div className="col-12 mb-2">
                        {step == 0 &&
                            <>
                                <h6 className="mb-1">Enter your email address or mobile number</h6>
                                <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="mobile number / Email address *" required />
                            </>
                        }
                        {step == 1 &&
                            <>
                                <h6 className="mb-1">Enter your OTP</h6>
                                <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, otp: e.target.value })} placeholder="OTP *" required />
                            </>
                        }
                        {step == 2 &&
                            <>
                                <h6 className="mb-1">Enter your new password</h6>
                                <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Password *" required />
                            </>
                        }
                    </div>
                </div>
            </div>
            {step == 0 &&
                <>
                    <button className="btn btn-md btn-primary w-100 my-4" onClick={() => forgetReq(1)} style={{ borderRadius: '5px !important' }}>Send OTP</button>
                    <Link href={appRoutes.Login} className='' > Back to Login!</Link>
                </>}
            {step == 1 &&
                <>
                    <button className="btn btn-md btn-primary w-100 my-4" onClick={() => otpVerify(2)} style={{ borderRadius: '5px !important' }}>Verify OTP</button>
                    <Link href={"#"} onClick={() => setStep(0)} className='' > Change email address or mobile number!</Link>
                </>}
            {step == 2 && <button className="btn btn-md btn-primary w-100 my-4" onClick={() => changePassword(3)} style={{ borderRadius: '5px !important' }}>Change Password</button>}

        </>
    )
}

export default ForgetPassword

/*
<div className="password-toggle mb-2">
                      <input className="form-control form-control-lg" type="password" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Password *" required />
                      <label className="password-toggle-btn" aria-label="Show/hide password">
                          <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                      </label>
                  </div>
*/