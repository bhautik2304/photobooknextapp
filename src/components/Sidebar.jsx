'use client'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '@/Redux/Slice/userSlice';
import { apiRoutes, appRoutes, localstorageKey } from '@/constants';
import axios from 'axios';
import Avatar from 'react-avatar';
import { useDropzone } from 'react-dropzone'
import { usePathname } from 'next/navigation';

function Sidebar() {
    const { user } = useSelector(state => state.auth)
    const path = usePathname()
    return (
        <>
            <aside className="col-lg-3 p-5">
                <div className="position-lg-sticky top-1">
                    <div className="d-none d-lg-block">

                    </div>
                    <div className="offcanvas-lg offcanvas-start" id="sidebarAccount">
                        <button className="btn-close position-absolute top-0 end-0 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount"></button>
                        <div className="offcanvas-body">
                            <div className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                                <MyDropzone user={user} />
                                <h3 className="h5 mb-1">{user?.name} <i className="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
                                <p className="fs-sm text-muted mb-0">{user?.email}</p>
                            </div>
                            <nav className="nav flex-column pb-2 pb-lg-4 mb-3">
                                <a className="nav-link py-2 px-0" href="#" style={{ color: "#64748b" }} >
                                    <i className="ai-user-check fs-5 opacity-60 me-2"></i>Your Profile
                                </a>
                                <a className="nav-link py-2 px-0" href="#order-data" style={{ color: "#64748b" }} >
                                    <i className="ai-wallet fs-5 opacity-60 me-2"></i>Your orders
                                </a>
                            </nav>
                            <nav className="nav flex-column"><a className="nav-link py-2 px-0" style={{ color: "#64748b" }} ><i className="ai-logout fs-5 opacity-60 me-2"></i>Sign out</a></nav>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar

function MyDropzone({ user }) {

    const dispatch = useDispatch()
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        console.log("run dropzone");
        const formData = new FormData()
        formData.append('avtar', acceptedFiles[0])

        axios.post(apiRoutes.updateAvtar, formData)
            .then(e => {
                console.log(e)
                dispatch(fetchUsers())
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive
                    ? <Avatar color={'#212121'} src={user?.avtar} name={user?.name} size={50} className='mb-2' round={true} />
                    : <Avatar color={"#212121"} src={user?.avtar} name={user?.name} size={50} className='mb-2' round={true} />
            }
        </div>
    )
}