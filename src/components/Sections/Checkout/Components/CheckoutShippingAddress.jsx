import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import dynamic from "next/dynamic";
import Link from "next/link";
import emputycart from "@/assets/img/emputycart.json";
import { appRoutes } from "@/constants";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((module) => module.Player),
    { ssr: false }
);



const status = {
    proceed: "Proceed to order",
    placeOrder: "Place an order",
    processingOrder: "Order Processed",
    successOrder: "Order Processed Successfully",
  };

function CheckoutShippingAddress({ setChackOutStatus }) {
    
    const {
        auth: { user },
        order,
        order: {
            orderData,
            orderData: { orderDetaild },
        },
    } = useSelector((state) => state);

  return (
    <>
          {orderData?.product_id ? (
              <>
                  <h1 className="h2 pb-3">Checkout</h1>
                  {/* <!-- Checkout form fields--> */}
                  <div className="row">
                      <div className="col-md-5 col-lg-5 col-sm-12 p-5">
                          <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                              1.
                              <span className="text-decoration-underline ms-1">
                                  Shipping details
                              </span>
                          </h3>
                          <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
                              <div className="col-sm-12">
                                  <label className="form-label fs-base" for="c-fn">
                                      First name
                                  </label>
                                  <input
                                      className="form-control form-control-sm"
                                      type="text"
                                      value={user?.name}
                                      placeholder="Your first name"
                                      required
                                      id="c-fn"
                                  />
                              </div>
                              <div className="col-sm-6">
                                  <label
                                      className="form-label fs-base"
                                      for="c-email"
                                  >
                                      Email
                                  </label>
                                  <div className="position-relative">
                                      <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                      <input
                                          className="form-control form-control-sm ps-5"
                                          type="email"
                                          value={user?.email}
                                          placeholder="Email address"
                                          required
                                          id="c-email"
                                      />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <label
                                      className="form-label fs-base"
                                      for="c-phone"
                                  >
                                      Phone
                                  </label>
                                  <div className="position-relative">
                                      <i className="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                      <input
                                          className="form-control form-control-sm ps-5"
                                          type="tel"
                                          value={user?.phone_no}
                                          data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                                          placeholder="+1 ___ ___ __"
                                          required
                                          id="c-phone"
                                      />
                                  </div>
                              </div>
                              <div className="col-6">
                                  <label
                                      className="form-label fs-base"
                                      for="c-country"
                                  >
                                      Country
                                  </label>
                                  <input
                                      className="form-control form-control-sm ps-5"
                                      value={user?.country}
                                      required
                                      id="c-country"
                                  />
                              </div>
                              <div className="col-sm-6">
                                  <label
                                      className="form-label fs-base"
                                      for="c-city"
                                  >
                                      State
                                  </label>
                                  <input
                                      className="form-control form-control-sm ps-5"
                                      value={user?.state}
                                  />
                              </div>
                              <div className="col-12">
                                  <label
                                      className="form-label fs-base"
                                      for="c-address"
                                  >
                                      Default Address
                                  </label>
                                  <textarea
                                      className="form-control form-control-sm"
                                      rows="3"
                                      value={user?.address}
                                      required
                                      id="c-address"
                                  />
                              </div>
                              <div className="col-12">
                                  <label
                                      className="form-label fs-base"
                                      for="c-notes"
                                      onChange={(e) =>
                                          dispatch(
                                              changeOrderData({
                                                  key: "delivery_address",
                                                  value: e.target.value,
                                              })
                                          )
                                      }
                                  >
                                      Deliver to alternate address{" "}
                                      <span className="text-muted">(optional)</span>
                                  </label>
                                  <textarea
                                      className="form-control form-control-sm"
                                      rows="5"
                                      id="c-notes"
                                  ></textarea>
                                  <span className="text-muted">
                                      You can deliver this product directly to your
                                      customer address
                                  </span>
                              </div>
                          </div>
                          <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                              2.
                              <span className="text-decoration-underline ms-1">
                                  Shipping method
                              </span>
                          </h3>
                          <div className="form-check mb-4">
                              {/* <input className="form-check-input checked" type="checkbox" value={"true"} name="shipping" id="standard" /> */}
                              <label
                                  className="form-check-label d-flex justify-content-between"
                                  for="standard"
                              >
                                  <span>
                                      <span className="d-block fs-base text-dark fw-medium mb-1">
                                          Standard Delivery
                                      </span>
                                      <span className="text-body">
                                          Delivery and order updates will be <br />
                                          sent to you on your email
                                      </span>
                                  </span>
                                  <span className="fs-base text-dark fw-semibold">
                                      {user?.zone?.currency_sign}{" "}
                                      {user?.zone?.shipingcharge}{" "}
                                  </span>
                              </label>
                          </div>
                          {/* <!-- Place an order button visible on screens > 991px--> */}
                          <div className="d-none d-lg-block pt-5 mt-n3">
                              <div className="form-check mb-4">
                                  <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={true}
                                      checked
                                      id="save-info"
                                  />
                                  <label
                                      className="form-check-label"
                                      for="save-info"
                                  >
                                      <span className="text-muted">
                                          Your personal information will be used to
                                          process your order, to support your experience
                                          on this site and for other purposes described
                                          in the{" "}
                                      </span>
                                      <a className="fw-medium" href="#">
                                          privacy policy
                                      </a>
                                  </label>
                              </div>
                          </div>
                          <button
                              className="btn btn-lg btn-primary w-100 pro"
                              onClick={() => setChackOutStatus(status.placeOrder)}
                          >
                              Checkout
                          </button>
                      </div>
                      <div className="col-md-7 col-lg-7 p-5 col-sm-12 d-flex">
                          <img
                              width={"100%"}
                              height={"100%"}
                              src="/images/Photo_checkout.png"
                              alt=""
                              srcset=""
                          />
                      </div>
                  </div>
              </>
          ) : (
              <>
                  <div className="col-lg-12 bg-white p-5">
                      <center>
                          <div className="col-8 p-3">
                              <Player
                                  autoplay
                                  speed={0}
                                  loop
                                  src={emputycart}
                                  style={{ height: "250px", width: "250px" }}
                              ></Player>

                              <center>
                                  <h5 className="text-primary">
                                      Your Cart Is Empty
                                  </h5>
                              </center>
                              {/* <h6 className='mt-2' >Upload Your Photos</h6> */}
                              <div className="row mb-4">
                                  <div className="col-12">
                                      <Link
                                          href={appRoutes?.StartPrinting}
                                          className="btn btn-primary col-12 my-3"
                                      >
                                          Order Now
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </center>
                  </div>
              </>
          )}
    </>
  )
}

export default CheckoutShippingAddress
