import React from 'react'

function page() {
  return (
    <>
      <main class="page-wrapper" style={{ backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
        {/* <!-- Page content--> */}
        <div class="d-flex flex-column position-relative h-100 signin-signup-card">
          {/* <!-- Home button--> */}
          {/* <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 zindex-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="index.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i class="ai-home"></i></a> */}
          <div class="container mt-auto">
            <div class="row align-items-center justify-content-center">
              {/* <!-- Sign in form--> */}
              <div class="col-md-8 col-xl-8 col-sm-12 card signin-signup-card-padding">
                <div class="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <h3 class="h3 pb-2 pb-lg-3">Sign up to photokrafft.com</h3>

                  <form class="needs-validation" novalidate>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6>Personal Information</h6>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                          <div class="col mb-2">
                            <input class="form-control form-control-lg" type="text" placeholder="Your name *" required />
                          </div>
                          <div class="col mb-2">
                            <input class="form-control form-control-lg" type="email" placeholder="Email address *" required />
                          </div>
                        </div>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="password" placeholder="Password *" required />
                          <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                          </label>
                        </div>
                        <h6>Company’s Information</h6>
                        <div class="col-12 password-toggle mb-2">
                          <input class="form-control form-control-lg" type="password" placeholder="Your Company’s Name *" required />
                        </div>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="file" placeholder="Your Company’s Logo *" required />
                        </div>
                        <span className='' style={{ fontSize: '14px !important' }} >Your Company’s Logo <span className='text-danger' >*</span> </span>

                      </div>

                      {/* </div> */}
                      <div className="col-lg-6 col-md-6 col-sm-12">

                        <h6>Address Details</h6>
                        <div class="password-toggle mb-2">
                          <textarea class="form-control form-control-lg" rows={1} placeholder="Address *" required>

                          </textarea>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                          <div class="col mb-2">
                            <input class="form-control form-control-lg" type="text" placeholder="State / Province *" required />
                          </div>
                          <div class="col mb-2">
                            <input class="form-control form-control-lg" type="text" placeholder="Country *" required />
                          </div>
                        </div>

                        <h6 className='' >Social Information</h6>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-md btn-primary w-100 my-4" style={{ borderRadius: '5px !important' }} type="submit">Sign up</button>
                    {/* <h2 class="h6 text-center pt-3 pt-lg-4 mb-2">Or sign in with your social account</h2> */}
                    {/* <div class="row row-cols-1 row-cols-sm-2 gy-3">
                    <div class="col"><a class="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href="#"><i class="ai-google fs-xl me-2"></i>Google</a></div>
                    <div class="col"><a class="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" href="#"><i class="ai-facebook fs-xl me-2"></i>Facebook</a></div>
                  </div> */}
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