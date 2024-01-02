"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiRoutes, appRoutes, localstorageKey } from '@/constants'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authLogin } from '@/Redux/Slice/authSlice';
import { useRouter } from 'next/navigation';

function LoginForm() {
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const router = useRouter()
    // const router = useRouter()
    const dispatch = useDispatch()


    const submitData = () => {
        axios.post(apiRoutes.login, data).then(res => {
            if (res.data.code == 200) {
                dispatch(authLogin(res.data))
                router.replace(appRoutes.userProfile)
                return
            }
            setError(res.data.message)
        }).catch(err => console.log(err))
    }
    return (
        <>
            <>
                <div className="row">
                    <div className="col-12">
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <div class="col-12 mb-2">
                            <input class="form-control form-control-lg" onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email address *" required />
                        </div>
                        <div class="password-toggle mb-2">
                            <input class="form-control form-control-lg" type="password" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Password *" required />
                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-md btn-primary w-100 my-4" onClick={() => submitData()} style={{ borderRadius: '5px !important' }}>Sign up</button>
                <div className="row">
                    <div className='col-6' >
                        <h6 className='m-0 p-0' >Don't have an account yet?  </h6>
                        <Link href={appRoutes.CreateAccount} className='' > Register here!</Link>
                    </div>
                    <div className='col-6 text-end' >
                        <Link href={appRoutes.forgetPassword} className='' > forget password!</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default LoginForm