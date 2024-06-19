"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appRoutes } from "@/constants";
import {
  selectProduct,
  setTotale,
  setPrintingTotale,
} from "@/Redux/Slice/orderSlice";
import { fetchProduct } from "@/Redux/Slice/ProductSlice";

function TotalCounter() {
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
        pritnig_price_value,
        album_qty,
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
    album_qty,
  ]);

  return (
    <>
      <div
        className="container-fluid navbar-fixed-top"
        // style={{
        //   position: "fixed",
        //   // top: 80,
        //   right: 0,
        //   width: "100%",
        //   color: "white",
        //   textAlign: "center",
        //   zIndex: 1,
        //   padding: "1rem 0",
        //   // backgroundColor: "rgba(0, 0, 0, 0.8)", // Optional: to ensure it's readable against the background
        // }}
      >
        <div className="d-flex justify-content-center aligns-item-center ">
          <div className="col-md-8 noothing d-none d-lg-block">
            <div className="w-100 d-flex justify-content-end aligns-item-center mb-3">
              <button
                className="btn btn-primary btn-sm mx-2"
                style={{ fontSize: 18, fontWeight: "bold" }}
              >{`Design cost : ${pritnig_price_value * page_qty} ${
                user?.zone?.currency_sign
              }`}</button>
              <button
                className="btn btn-success btn-sm"
                style={{ fontSize: 18, fontWeight: "bold" }}
              >{`Product cost : ${total} ${user?.zone?.currency_sign}`}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCounter;
