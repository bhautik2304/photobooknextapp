import React from 'react'

function page() {
  return (
    <>
      <main className="page-wrapper" style={{ backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
        {/* <!-- Page content--> */}
        <div className="d-flex flex-column position-relative h-100 signin-signup-card">
          {/* <!-- Home button--> */}
          {/* <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 zindex-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="index.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a> */}
          <div className="container mt-auto">
            <div className="row align-items-center justify-content-center">
              {/* <!-- Sign in form--> */}
              <div className="col-md-8 col-xl-8 col-sm-12 card signin-signup-card-padding">
                <div className="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <h3 className="h3 pb-2 pb-lg-3">Sign up to photokrafft.com</h3>

                  <form className="needs-validation" novalidate>
                    <div classNameName="row">
                      <div classNameName="col-lg-6 col-md-6 col-sm-12">
                        <h6>Personal Information</h6>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                          <div className="col mb-2">
                            <input className="form-control form-control-lg" type="text" placeholder="Your name *" required />
                          </div>
                          <div className="col mb-2">
                            <input className="form-control form-control-lg" type="email" placeholder="Email address *" required />
                          </div>
                        </div>
                        <div className="password-toggle mb-2">
                          <input className="form-control form-control-lg" type="password" placeholder="Password *" required />
                          <label className="password-toggle-btn" aria-label="Show/hide password">
                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                          </label>
                        </div>
                        <h6>Company’s Information</h6>
                        <div className="col-12 password-toggle mb-2">
                          <input className="form-control form-control-lg" type="password" placeholder="Your Company’s Name *" required />
                        </div>
                        <div className="password-toggle mb-2">
                          <input className="form-control form-control-lg" type="file" placeholder="Your Company’s Logo *" required />
                        </div>
                        <span classNameName='' style={{ fontSize: '14px !important' }} >Your Company’s Logo <span classNameName='text-danger' >*</span> </span>

                      </div>

                      {/* </div> */}
                      <div classNameName="col-lg-6 col-md-6 col-sm-12">

                        <h6>Address Details</h6>
                        <div className="password-toggle mb-2">
                          <textarea className="form-control form-control-lg" rows={1} placeholder="Address *" required>

                          </textarea>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                          <div className="col mb-2">
                            <input className="form-control form-control-lg" type="text" placeholder="State / Province *" required />
                          </div>
                          <div className="col mb-2">
                            <input className="form-control form-control-lg" type="text" placeholder="Country *" required />
                          </div>
                        </div>

                        <h6 classNameName='' >Social Information</h6>
                        <div className="password-toggle mb-2">
                          <input className="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                        <div className="password-toggle mb-2">
                          <input className="form-control form-control-lg" type="text" placeholder="Social Profile Link *" required />
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-md btn-primary w-100 my-4" style={{ borderRadius: '5px !important' }} type="submit">Sign up</button>
                    {/* <h2 className="h6 text-center pt-3 pt-lg-4 mb-2">Or sign in with your social account</h2> */}
                    {/* <div className="row row-cols-1 row-cols-sm-2 gy-3">
                    <div className="col"><a className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href="#"><i className="ai-google fs-xl me-2"></i>Google</a></div>
                    <div className="col"><a className="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" href="#"><i className="ai-facebook fs-xl me-2"></i>Facebook</a></div>
                  </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright--> */}
          {/* <div className="container fs-sm pt-5 mt-auto mb-5"><span className="text-muted">&copy; All rights reserved. Made by</span><a className="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div> */}
        </div >
      </main >
    </>
  )
}

export default page