"use client";
import React, { useEffect } from 'react'
import Link from "next/link"
import { RegisterForm } from '@/components'
import { appRoutes, localstorageKey } from '@/constants'
import { redirect } from 'next/navigation'
import { isLocalStorageAvailable } from '@/utils'
function page() {
  const authStatus = isLocalStorageAvailable() ? localStorage.getItem(localstorageKey.authStatus) : null

  useEffect(() => {
    if (authStatus == "true") {
      redirect(appRoutes.Home)
    }
  }, [authStatus])
  return (
    <>
      <main
        className="page-wrapper"
        style={{
          backgroundColor: "#80d0c7",
          backgroundImage: "linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)",
        }}
      >
        {/* <!-- Page content--> */}
        <div className="d-flex flex-column position-relative h-100 signin-signup-card">
          {/* <!-- Home button--> */}
          {/* <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 zindex-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="index.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a> */}
          <div className="container mt-auto">
            <div className="row align-items-center justify-content-center">
              {/* <!-- Sign in form--> */}
              <div className="col-md-8 col-xl-8 col-sm-12 card signin-signup-card-padding">
                <div className="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <RegisterForm />
                  <Link
                    href={appRoutes.Login}
                    className="link"
                  >
                    If you already have an account with us please login here.
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright--> */}
          {/* <div className="container fs-sm pt-5 mt-auto mb-5"><span className="text-muted">&copy; All rights reserved. Made by</span><a className="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div> */}
        </div>
      </main>
    </>
  );
}

export default page;
