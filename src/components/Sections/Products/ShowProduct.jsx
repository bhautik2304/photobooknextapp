"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appRoutes } from "@/constants";
import {
  selectProduct,
  setTotale,
  setPrintingTotale,
} from "@/Redux/Slice/orderSlice";
import Link from "next/link";
import {
  Product,
  ProductOrientation,
  ProductSize,
  EventDetailForm,
  ProductCover,
  ProductBox,
  ProductColor,
  OrderDetaild,
} from "./FormStep";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchProduct } from "@/Redux/Slice/ProductSlice";

function ShowProduct() {
  const {
    auth: { authStatus, user },
    product: { product },
    order: {
      formStep,
      orderData: {
        photoBookCopyPrice,
        page_qty,
        sheetValue,
        paperValue,
        photoBookCopy,
        coverValue,
        boxSleeveValue,
        orderTotale,
        pritnig_price_value
      },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    // dispatch(setPrintingTotale());
    dispatch(setTotale());
    setTotal(orderTotale + photoBookCopy * photoBookCopyPrice);
  }, [
    page_qty,
    sheetValue,
    paperValue,
    coverValue,
    boxSleeveValue,
    orderTotale,
    photoBookCopy,
  ]);

  return (
    <>
      {authStatus ? (
        <>
          {formStep == 0 ? (
            <>
              <h2>Select your product.</h2>
              <p>
                Browse and select the ideal product for your need to deliver
                your memories & elevate your brand.
              </p>
              <div className="row mt-2 mb-2">
                <Product />
              </div>
            </>
          ) : null}
          {formStep == 1 ? (
            <>
              <h2>Select your orientation.</h2>
              <p>
                Select the orientation which is ideal for your product printing
                requirement.
              </p>
              <div className="row mt-2 mb-2">
                <ProductOrientation />
              </div>
            </>
          ) : null}
          {formStep == 2 ? (
            <>
              <div className="d-flex justify-content-between aligns-item-center">
                <h2>Select your sizes & paper.</h2>
                <div>
                  {/* <div className="d-flex" >
                    <button
                      className="btn btn-primary btn-sm mx-2"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >{`Design cost : ${pritnig_price_value * page_qty} ${user?.zone?.currency_sign}`}</button><br/>
                    <button
                      className="btn btn-primary btn-sm mx-2"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >{`Product cost : ${total} ${user?.zone?.currency_sign}`}</button>
                  </div> */}
                </div>
              </div>
              <p>
                Select the options mentioned below to rectify the printing
                quality and sizes for your product.
              </p>
              <div className="row mt-2 mb-2">
                <ProductSize />
              </div>
            </>
          ) : null}
          {formStep == 3 ? (
            <>
              <div className="d-flex justify-content-between aligns-item-center">
                <h2>Select your Album Cover.</h2>
                {/* <div>
                  <span
                    style={{ fontSize: 18, fontWeight: "bold" }}
                    className="text-success"
                  >{`Design cost : ${pritnig_price_value * page_qty} ${user?.zone?.currency_sign}   `}</span><br/>
                  
                  <span
                    style={{ color: "red", fontSize: 18, fontWeight: "bold" }}
                  >{`Product cost : ${total} ${user?.zone?.currency_sign}`}</span>
                </div> */}
              </div>
              <p>Please select cover options from below mentioned section.</p>
              <div className="row mt-2 mb-2">
                <ProductCover />
              </div>
            </>
          ) : null}
          {formStep == 4 ? (
            <>
              <div className="d-flex justify-content-between aligns-item-center">
                <h2>Select your box & sleeve.</h2>
                <div>
                  <span
                    style={{ fontSize: 18, fontWeight: "bold" }}
                    className="text-success"
                  >{`Design cost : ${pritnig_price_value * page_qty} ${user?.zone?.currency_sign}   `}</span><br/>
                  
                  <span
                    style={{ color: "red", fontSize: 18, fontWeight: "bold" }}
                  >{`Product cost : ${
                    total + photoBookCopy * photoBookCopyPrice
                  } ${user?.zone?.currency_sign}`}</span>
                </div>
              </div>
              <p>
                Please select box & sleeve options from below mentioned section.
              </p>
              <div className="row mt-2 mb-2">
                <ProductBox />
              </div>
            </>
          ) : null}
          {formStep == 5 ? (
            <>
              <div className="d-flex justify-content-between aligns-item-center">
                <h2>Order Details</h2>
                {/* <div>
                  <span
                    style={{ fontSize: 18, fontWeight: "bold" }}
                    className="text-success"
                  >{`Design cost : ${pritnig_price_value * page_qty} ${user?.zone?.currency_sign}   `}</span><br/>
                  
                  <span
                    style={{ color: "red", fontSize: 18, fontWeight: "bold" }}
                  >{`Product cost : ${total} ${user?.zone?.currency_sign}`}</span>
                </div> */}
              </div>
              <p>
                Please fill the below mentioned form which will help us to
                customise and print the content on your product.
              </p>
              <div className="row mt-2 mb-2">
                <EventDetailForm />
              </div>
            </>
          ) : null}
          {formStep == 6 ? (
            <>
              <div className="row mt-2 mb-2">
                <OrderDetaild />
              </div>
            </>
          ) : null}
          {formStep == 7 ? <></> : null}
        </>
      ) : (
        <>
          <div className="row mt-2 mb-2">
            <h2>Select your product.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href={appRoutes.Login}
              style={{ textDecoration: "none" }}
              className="row"
            >
              {product
                ? product.map((data) => (
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <img src={data?.img} alt="" srcset="" />
                      <h6 className="my-3">{data.name}</h6>
                    </div>
                  ))
                : null}
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default ShowProduct;
