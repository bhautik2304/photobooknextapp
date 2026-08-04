"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiRoutes, appRoutes, localstorageKey } from '@/constants'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authLogin } from '@/Redux/Slice/authSlice';
import { fetchUsers } from '@/Redux/Slice/userSlice';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

function LoginForm() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const router = useRouter()
    // const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        router.push(appRoutes.Home)
    }, [])

    const [show, setHide] = useState(false)

    const submitData = () => {
        setLoading(true)
        setError(false)
        axios.post(apiRoutes.login, data).then(res => {
            if (res.data.code == 200) {
                // alert("logd in")
                dispatch(authLogin(res.data))
                dispatch(fetchUsers())
                setLoading(false)
                location.reload()
                return
            }
            setLoading(false)
            setError(res.data.msg)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                // Call your function here
                handleEnterKeyPress();
            }
        };

        const handleEnterKeyPress = () => {
            // Your function logic here
            setError(false)
            setLoading(true)
            axios.post(apiRoutes.login, data).then(res => {
                if (res.data.code == 200) {
                    // alert("logd in")
                    dispatch(authLogin(res.data))
                    dispatch(fetchUsers())
                    setLoading(false)
                    location.reload()
                    
                    return
                }
                setLoading(false)
                setError(res.data.msg)
            }).catch(err => {
                setLoading(false)
                console.log(err)})
        };

        document.body.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [data]);


    return (
        <>
            <>
                <div className="row">
                    <div className="col-12">
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <div className="col-12 mb-2">
                            <input className="form-control form-control-lg" onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email address *" required />
                        </div>
                        <div className="password-toggle mb-2">
                            <input onKeyDown={(e) => {
                                console.log(e)
                            }} className="form-control form-control-lg" type={show ? "text" : "password"} onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Password *" required />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" onClick={() => setHide(!show)} /><span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-6' >
                        {/* <h6 className='m-0 p-0' >Don't have an account yet?  </h6>
                        <Link href={appRoutes.CreateAccount} className='' > Register here!</Link> */}
                    </div>
                    <div className='col-6 text-end' >
                        <Link href={appRoutes.forgetPassword} className='' > Reset password!</Link>
                    </div>
                </div>
                <button className="btn btn-md btn-primary w-100 my-4 pro" disabled={loading} onClick={() => submitData()} style={{ borderRadius: '5px !important' }}>
                    {
                        loading ? <CircularProgress color="inherit" size={15} /> : "Sign in"
                    }
                </button>
                <div className="row">
                    <div className='col-12 row' >
                        <center>
                            <div className='row' >
                                <p className='m-0 p-0' >Don't have an account yet? <Link href={appRoutes.CreateAccount} className='' > Register here!</Link></p>
                            </div>
                        </center>
                    </div>
                </div>
            </>
        </>
    )
}

export default LoginForm