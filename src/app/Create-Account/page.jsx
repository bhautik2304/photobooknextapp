import React from 'react'

function page() {
  return (
    <>
      <main class="page-wrapper" style={{backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
        {/* <!-- Page content--> */}
        <div class="d-flex flex-column position-relative h-100 p-5">
          {/* <!-- Home button--> */}
          {/* <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 zindex-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="index.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i class="ai-home"></i></a> */}
          <div class="container mt-auto">
            <div class="row align-items-center justify-content-center">
              {/* <!-- Sign in form--> */}
              {/* <div class="col-md-6 mb-5 mb-md-0">
              <div class="card dark-mode border-0 bg-primary py-md-3 py-lg-4 px-lg-4 px-xl-5">
                <div class="card-body">
                  <h1 class="py-2 pb-lg-3">Sign in to Around</h1>
                  <form>
                    <div class="pb-3 mb-2">
                      <div class="position-relative"><i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3"></i>
                        <input class="form-control form-control-lg ps-5" type="email" placeholder="Email address" required />
                      </div>
                    </div>
                    <div class="mb-2">
                      <div class="position-relative"><i class="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3"></i>
                        <div class="password-toggle">
                          <input class="form-control form-control-lg ps-5" type="password" placeholder="Password" required />
                          <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
                      <form-check class="my-1">
                        <input class="form-check-input" type="checkbox" id="keep-signedin" />
                        <label class="form-check-label ms-1" for="keep-signedin">Keep me signed in</label>
                      </form-check><a class="text-light fs-sm fw-semibold text-decoration-none my-1" href="account-password-recovery.html">Forgot password?</a>
                    </div>
                    <button class="btn btn-lg btn-light w-100 mb-2" type="submit">Sign in</button>
                    <h2 class="h6 text-center pt-3 pt-lg-4 mb-2">Or sign in with your social account</h2>
                    <div class="row row-cols-1 row-cols-sm-2 gy-3 pb-2">
                      <div class="col"><a class="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href="#"><i class="ai-google fs-xl me-2"></i>Google</a></div>
                      <div class="col"><a class="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" href="#"><i class="ai-facebook fs-xl me-2"></i>Facebook</a></div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
              <div class="col-md-8 col-xl-8 col-sm-12 card p-5">
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
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="password" placeholder="Confirm password *" required />
                          <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                          </label>
                        </div>
                        <h6>Address Details</h6>
                        <div class="password-toggle mb-2">
                          <textarea class="form-control form-control-lg" placeholder="Address *" required>

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
                      </div>

                      {/* </div> */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6>Company’s Information</h6>
                        <div class="col-12 password-toggle mb-2">
                          <input class="form-control form-control-lg" type="password" placeholder="Your Company’s Name *" required />
                        </div>
                        <div class="password-toggle mb-2">
                          <h6 className='mt-3' >Your Company’s Logo <span className='text-danger' >*</span> </h6>
                          <input class="form-control form-control-lg" type="file" placeholder="Your Company’s Logo *" required />
                        </div>

                        <h6 className='mt-3' >Social Information</h6>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                        <div class="password-toggle mb-2">
                          <input class="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-md btn-primary w-100 my-4" style={{ borderRadius:'5px !important' }} type="submit">Sign up</button>
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