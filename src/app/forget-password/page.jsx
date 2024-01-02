"use client";
import React, { useEffect } from 'react'
import { ForgetPassword } from '@/components'
import { appRoutes, localstorageKey } from '@/constants'
import { redirect } from 'next/navigation'
function page() {
  const authStatus = localStorage.getItem(localstorageKey.authStatus)

  useEffect(() => {
    if (authStatus) {
      redirect(appRoutes.Home)
    }
  }, [authStatus])

  return (
    <>
      <main class="page-wrapper" style={{ backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
        {/* <!-- Page content--> */}
        <div class="d-flex flex-column position-relative h-100 signin-signup-card">
          {/* <!-- Home button--> */}
          <div class="container-fluid mt-auto">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-5 col-xl-5 col-sm-12 card signin-signup-card-padding">
                <div class="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <h4 class="h4">Sign in to photokrafft.com</h4>

                  <ForgetPassword />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright--> */}
          {/* <div class="container fs-sm pt-5 mt-auto mb-5"><span class="text-muted">&copy; All rights reserved. Made by</span><a class="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div> */}
        </div >
      </main >
    </>
  )
}

export default page