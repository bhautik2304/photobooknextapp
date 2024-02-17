"use client";
import React, { useEffect } from 'react'
// import  from '@/components'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
const ShowProduct = dynamic(() => import('@/components/Sections/Products/ShowProduct'), { ssr: false })
const NotsupportedScreen = dynamic(() => import('@/components/NotsupportedScreen'), { ssr: false })
import { isLocalStorageAvailable } from '@/utils'
import { appRoutes, localstorageKey } from '@/constants'

function page() {

    const authStatus = isLocalStorageAvailable() ? localStorage.getItem(localstorageKey.authStatus) : null

  useEffect(() => {
     if (!authStatus) {
            redirect(appRoutes.Login);   
        }
  }, [authStatus])

    return (
        <>

            <div className="container-fluid py-5" style={{ backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
                <div className="row">
                    <div className="d-flex justify-content-center aligns-item-center">
                        <div className='col-7 noothing d-none d-lg-block'>
                            <div className="card shadw-sm p-5">
                                <ShowProduct />
                            </div>
                        </div>
                        <div className="d-block d-lg-none">
                            <NotsupportedScreen />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page