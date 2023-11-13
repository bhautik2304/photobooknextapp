import React from 'react'
import Link from 'next/link'
import { appRoutes } from '@/constants'

function page() {
    return (
        <>
          <main class="page-wrapper" style={{backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
        {/* <!-- Page content--> */}
        <div class="d-flex flex-column position-relative h-100 p-5">
          {/* <!-- Home button--> */}
          <div class="container mt-auto">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-4 col-xl-4 col-sm-12 card p-5">
                <div class="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <h4 class="h4">Sign in to photokrafft.com</h4>

                  <form class="needs-validation" novalidate>
                    <div className="row">
                      <div className="col-12">
                          <div class="col-12 mb-2">
                            <input class="form-control form-control-lg" type="email" placeholder="Email address *" required />
                          </div>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="password" placeholder="Password *" required />
                          <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-md btn-primary w-100 my-4" style={{ borderRadius:'5px !important' }} type="submit">Sign up</button>
                    <h6 className='m-0 p-0' >Don't have an account yet?  </h6><Link href={appRoutes.CreateAccount} className='' > Register here!</Link>

                  </form>
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