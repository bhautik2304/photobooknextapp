"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { zonePrice } from "@/utils";
import { changePageCount, changeOrderData } from "@/Redux/Slice/orderSlice";
import axios from "axios";

import { localstorageKey } from "@/constants";

function roundToDecimalPlaces(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

function CheckOutItem({ setOrderStatus, submitOrder }) {
  const [pageErrorMsg, setErrorMsg] = useState("");

  const {
    auth: { user },
    order: {
      product,
      orderData,
      productSize,
      productSheet,
      productcover,
      productpaperType,
      productboxSleev,
    },
  } = useSelector((state) => state);
  const thermelSheet =
    productSheet.find((data) => data.id == orderData.productSheet) || null;
  const papperType =
    productpaperType.find((data) => data.id == orderData.paperType) || null;
  const cover =
    productcover.find((data) => data.id == orderData.productcover) || null;
  const box =
    productboxSleev.find((data) => data.id == orderData.productboxSleev) ||
    null;

  const dispatch = useDispatch();

  console.log(user);
  useEffect(() => {
    if (orderData.page_qty != null) {
      const discount = user?.discount || 0;
      const paperValue = orderData?.paperValue || 0;
      const pageQty = orderData.page_qty || 0;
      const photoBookCopy =
        zonePrice(product?.album_copy_price)?.price * orderData?.photoBookCopy;
      // Calculate the orderTotale without discount
      const orderTotaleWithoutDiscount =
        orderData.boxSleeveValue +
        orderData.coverValue +
        (orderData.sheetValue * pageQty * paperValue) / 100 +
        orderData.sheetValue * pageQty +
        orderData.pritnigPriceTotalPageValue;

      // Calculate the discount amount
      const discountAmount = Math.round(
        orderTotaleWithoutDiscount * (discount / 100)
      );

      // Update the order data in Redux state
      dispatch(changeOrderData({ key: "discount", value: discount }));
      dispatch(
        changeOrderData({ key: "orderDiscountAmount", value: discountAmount })
      );
      dispatch(
        changeOrderData({
          key: "orderTotale",
          value:
            Math.round(orderTotaleWithoutDiscount - discountAmount) +
            photoBookCopy,
        })
      );
    }
  }, [
    orderData.page_qty,
    user?.discount,
    orderData.boxSleeveValue,
    orderData.coverValue,
    orderData.sheetValue,
    orderData.page_qty,
    orderData?.paperValue,
  ]);
  console.log(orderData);
  return (
    <>
      {/* <!-- Order summary--> */}
      <div>
        <h2 className="pb-2 pt-md-2">Order summary</h2>
        {/* <!-- Item--> */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 card">
            <div className="d-sm-flex align-items-center py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                href="#"
              >
                <img src={product?.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <a href="#">{product?.name}</a>
                    </h3>
                  </div>
                </div>

                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="d-sm-flex align-items-center border-top py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                href="#"
              >
                <img src={thermelSheet?.sheet?.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <a href="#">{thermelSheet?.sheet?.name}</a>
                    </h3>
                    <div className="text-end ms-auto">
                      <span className="text-danger">{pageErrorMsg}</span>
                    </div>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">
                      <div className="count-input ms-n3">
                        <button
                          className="btn btn-icon fs-xl pro"
                          onClick={() => {
                            if (orderData?.page_qty <= product?.min_page) {
                              setErrorMsg(`Minimum page ${product?.min_page}+`);
                              return;
                            }
                            dispatch(changePageCount(orderData?.page_qty - 1));
                          }}
                          type="button"
                          data-decrement
                        >
                          -
                        </button>
                        <input
                          className="form-control"
                          type="number"
                          value={orderData?.page_qty}
                        />
                        <button
                          className="btn btn-icon fs-xl pro"
                          type="button"
                          onClick={() => {
                            setErrorMsg("");
                            dispatch(changePageCount(orderData?.page_qty + 1));
                          }}
                          data-increment
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="d-sm-flex align-items-center border-top py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                href="#"
              >
                <img src={thermelSheet?.sheet?.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <a href="#">{thermelSheet?.sheet?.name}</a>
                    </h3>
                    <div className="text-end ms-auto">
                      <div className="fs-5 mb-2">{`${
                        zonePrice(thermelSheet?.sheetprice)?.priceSrring
                      } X ${orderData?.page_qty} Pages`}</div>
                    </div>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">
                      {zonePrice(thermelSheet?.sheetprice)?.price *
                        orderData?.page_qty}{" "}
                      {user?.zone?.currency_sign}
                    </div>
                  </div>
                </div>
                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="d-sm-flex align-items-center border-top py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1 mb-2 mb-sm-0"
                href="#"
              >
                <img src={papperType?.paper?.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 ">
                      <a href="#">{papperType?.paper?.name}</a>
                    </h3>
                    <div className="text-end ms-auto">
                      <div className="fs-5 mb-2">
                        {zonePrice(thermelSheet?.sheetprice)?.price *
                          orderData?.page_qty}{" "}
                        + {papperType?.paper?.value} %
                      </div>
                    </div>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">
                      {(  (orderData?.sheetValue * orderData.paperValue) / 100 +
                        orderData?.sheetValue) *
                        orderData?.page_qty - orderData?.sheetValue * orderData?.page_qty}{" "}
                      {user?.zone?.currency_sign}
                    </div>
                  </div>
                </div>
                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            
            </div>
            {/* <!-- Item--> */}
            <div className="d-sm-flex align-items-center border-top py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                href="#"
              >
                <img src={cover?.cover?.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <a href="#">{cover?.cover?.name}</a>
                    </h3>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">
                      {zonePrice(cover?.coverprice)?.priceSrring}
                    </div>
                  </div>
                </div>
                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            </div>
            {/* <!-- Item--> */}
           
            {/* <!-- Item--> */}
            <div className="d-sm-flex align-items-center border-top py-2">
              <a
                className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                href="#"
              >
                <img src={box?.boxsleeve.img} width="50" alt="Product" />
              </a>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <a href="#"> Design + Print + Bind </a>
                    </h3>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">
                      {orderData.pritnigPriceTotalPageValue +
                        "  " +
                        zonePrice(box?.boxsleeveprice)?.currency +
                        ""}
                    </div>
                  </div>
                </div>
                {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
              </div>
            </div>

            {orderData?.isPhotoBookCopy && (
                <>
                  <div className="d-sm-flex align-items-center border-bottom py-2">
                    <a
                      className="d-inline-block flex-shrink-0 bg-secondary rounded-1  mb-2 mb-sm-0"
                      href="#"
                    >
                      <img src={product?.img} width="50" alt="Product" />
                    </a>
                    <div className="w-100 pt-1 ps-sm-4">
                      <div className="d-flex">
                        <div className="me-3">
                          <h3 className="h5 mb-2">
                            <a href="#">Photo Book Copy</a>
                          </h3>
                        </div>
                        <div className="text-end ms-auto">
                          <div className="fs-5 mb-2">
                            {user?.zone?.currency_sign}{" "}
                            {zonePrice(product?.album_copy_price)?.price *
                              orderData?.photoBookCopy}{" "}
                            .
                          </div>
                        </div>
                      </div>
                      {/* <div className="nav justify-content-end mt-n5 mt-sm-n3"><a className="nav-link fs-xl p-2" href="#" data-bs-toggle="tooltip" title="Remove"><i className="ai-trash"></i></a></div> */}
                    </div>
                  </div>
                </>
              )}
            {/* <div className="border-top pt-4 mb-3"></div> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card p-3 ">
              <div className="card-header">
                <center>Order Summary</center>
              </div>
             
              <ul className="list-unstyled py-3 mb-0">
                <li className="d-flex justify-content-between mb-2">
                  Subtotal:
                  <span className="fw-semibold ms-2">
                    {user?.zone?.currency_sign}{" "}
                    {orderData.boxSleeveValue +
                      orderData.coverValue +
                      (orderData.sheetValue *
                        orderData.page_qty *
                        orderData?.paperValue) /
                        100 +
                      orderData.sheetValue * orderData.page_qty +
                      orderData.pritnigPriceTotalPageValue}
                  </span>
                </li>
                {Number(user?.discount) ? (
                  <>
                    <li className="d-flex justify-content-between mb-2">
                      Discount:
                      <span className="fw-semibold ms-2 text-danger">
                        -{user?.zone?.currency_sign}{" "}
                        {orderData?.orderDiscountAmount}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between mb-2">
                      Subtotal ( after discount {user?.discount} % ):
                      <span className="fw-semibold ms-2">
                        {user?.zone?.currency_sign}{" "}
                        {Math.round(orderData?.orderTotale)}
                      </span>
                    </li>
                  </>
                ) : null}
                <li className="d-flex justify-content-between mb-2">
                  Shipping cost:
                  <span className="fw-semibold ms-2">
                    {user?.zone?.currency_sign} {user?.zone?.shipingcharge}
                  </span>
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-between border-top fs-xl pt-4">
                Total:
                <span className="fs-3 fw-semibold text-dark ms-2">
                  {user?.zone?.currency_sign}{" "}
                  {orderData?.orderTotale + user?.zone?.shipingcharge}
                </span>
              </div>
              <div className="my-3 py-2 border-top">
                <span className="fw-semibold text-danger">
                  Taxes are included in this price, we will send a bifurcated
                  invoice copy to your email
                </span>
              </div>
              <button
                className="btn btn-lg btn-primary w-100"
                onClick={() => submitOrder()}
              >
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutItem;
