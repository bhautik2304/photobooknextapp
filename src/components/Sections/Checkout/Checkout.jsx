import React from 'react'
import CheckOutItem from './CheckOutItem'

function Checkout() {
    
  return (
    <>
<main class="page-wrapper">
      {/* <!-- Page content--> */}
      {/* <div class="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width:"52.5%" }}></div> */}
      <form class="needs-validation container position-relative zindex-2 pt-0 pb-lg-5 pb-md-4 pb-2" novalidate>
        <div class="row">
          <div class="col-lg-6 mt-5">
            {/* <!-- Breadcrumb--> */}
            <h1 class="h2 pb-3">Checkout</h1>
            {/* <!-- Checkout form fields--> */}
            <h3 class="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">1.<span class="text-decoration-underline ms-1">Shipping details</span></h3>
            <div class="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-fn">First name</label>
                <input class="form-control form-control-sm" type="text" placeholder="Your first name" required id="c-fn" />
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-ln">Last name</label>
                <input class="form-control form-control-sm" type="text" placeholder="Your last name" required id="c-ln" />
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-email">Email</label>
                <div class="position-relative"><i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <input class="form-control form-control-sm ps-5" type="email" placeholder="Email address" required id="c-email" />
                </div>
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-phone">Phone</label>
                <div class="position-relative"><i class="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <input class="form-control form-control-sm ps-5" type="tel" data-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}" placeholder="+1 ___ ___ __" required id="c-phone" />
                </div>
              </div>
              <div class="col-12">
                <label class="form-label fs-base" for="c-country">Country</label>
                <input class="form-control form-control-sm ps-5" required id="c-country" />
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-city">City</label>
                <input class="form-control form-control-sm ps-5" />
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="c-zip">Zip code</label>
                <input class="form-control form-control-sm" type="text" data-format="{&quot;delimiter&quot;: &quot;-&quot;, &quot;blocks&quot;: [3, 4], &quot;uppercase&quot;: true}" placeholder="XXX-XXXX" required id="c-zip" />
              </div>
              <div class="col-12">
                <label class="form-label fs-base" for="c-address">Address line</label>
                <input class="form-control form-control-sm" type="text" required id="c-address" />
              </div>
              <div class="col-12">
                <label class="form-label fs-base" for="c-notes">Order notes <span class='text-muted'>(optional)</span></label>
                <textarea class="form-control form-control-sm" rows="5" id="c-notes"></textarea>
              </div>
            </div>
            <h3 class="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">2.<span class="text-decoration-underline ms-1">Shipping method</span></h3>
            <div class="form-check mb-4">
              <input class="form-check-input" type="radio" name="shipping" id="standard" />
              <label class="form-check-label d-flex justify-content-between" for="standard"><span><span class="d-block fs-base text-dark fw-medium mb-1">Standard Delivery</span><span class="text-body">Delivery in 5 - 8 working days</span></span><span class="fs-base text-dark fw-semibold">$8.00</span></label>
            </div>
            {/* <!-- Place an order button visible on screens > 991px--> */}
            <div class="d-none d-lg-block pt-5 mt-n3">
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" checked id="save-info" />
                <label class="form-check-label" for="save-info"><span class="text-muted">Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the </span><a class="fw-medium" href="#">privacy policy</a></label>
              </div>
            </div>
          </div>
          <CheckOutItem />
        </div>
        {/* <!-- Place an order button visible on screens < 992px--> */}
        <div class="d-lg-none pb-2 mt-2 mt-lg-0 pt-4 pt-lg-5">
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" checked id="save-info2" />
            <label class="form-check-label" for="save-info2"><span class="text-muted">Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the </span><a class="fw-medium" href="#">privacy policy</a></label>
          </div>
        </div>
      </form>
    </main>
    </>
  )
}

export default Checkout