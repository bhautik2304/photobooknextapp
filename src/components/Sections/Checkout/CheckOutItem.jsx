"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { zonePrice } from "@/utils";
import {
  changePageCount,
  changeOrderData,
  changeAlbumQty,
  formError as fcm,
} from "@/Redux/Slice/orderSlice";
import axios from "axios";

import { localstorageKey } from "@/constants";

function roundToDecimalPlaces(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

function CheckOutItem({ back, submitOrder }) {
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
      productboxandsleeveoptions,
      productboxandsleeveoptioncolor,
      productcoveroption,
      productcolor,
      productOrientation,
      formError,
    },
  } = useSelector((state) => state);
  const thermelSheet =
    productSheet.find((data) => data.sheet.id == orderData.productSheet) ||
    null;
  const papperType =
    productpaperType.find((data) => data.paper.id == orderData.paperType) ||
    null;
  const cover =
    productcover.find((data) => data.cover.id == orderData.productcover) ||
    null;
  const box =
    productboxSleev.find(
      (data) => data.boxsleeve.id == orderData.productboxSleev
    ) || null;
  const coverUpgrade =
    productcoveroption.find((data) => data.id == orderData.productboxSleev) ||
    null;
  const coverUpgradeColor =
    productcolor.find((data) => data.id == orderData.productboxSleev) || null;
  const boxUpgrade =
    productboxandsleeveoptions.find(
      (data) => data.id == orderData.productboxandsleeveoption
    ) || null;
  const boxUpgradeColor =
    productboxandsleeveoptioncolor.find(
      (data) => data.id == orderData.productboxandsleevecolor
    ) || null;

  const size =
    productSize.find((data) => data.size.id == orderData.productSize) || null;

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
        <div className="row  ">
          <div className="d-flex justify-content-center aligns-item-center">
            <div className="col-lg-9 col-md-8 col-sm-12 card">
              <div class="table-responsive p-3">
                <h2 className="pb-2 pt-md-2">Order summary</h2>
                <table
                  class="table align-middle w-100"
                  style={{ minWidth: "450px" }}
                >
                  <tbody>
                    {/* Product detaild */}
                    <tr>
                      <td class="border-0 py-1 px-0">
                        <div class="d-flex align-items-center">
                          <a
                            class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                            href="#"
                          >
                            <img src={product?.img} width="110" alt="Product" />
                          </a>
                          <div class="ps-3 ps-sm-4">
                            <h4 class="h6 mb-2">
                              <a href="#">{product?.name}</a>
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Quantity
                        </div>
                        <div class="fs-sm fw-medium text-dark">1</div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        {/* <div class="fs-sm text-body-secondary mb-2">Price</div>
                                    <div class="fs-sm fw-medium text-dark">$16</div> */}
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        {/* <div class="fs-sm text-body-secondary mb-2">Total</div>
                                    <div class="fs-sm fw-medium text-dark">$16</div> */}
                      </td>
                    </tr>
                    {/* product sheet dtaild page */}
                    <tr>
                      <td class="border-0 py-1 px-0">
                        <div class="d-flex align-items-center">
                          <a
                            class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                            href="#"
                          >
                            <img
                              src={thermelSheet?.sheet?.img}
                              width="110"
                              alt="Product"
                            />
                          </a>
                          <div class="ps-3 ps-sm-4">
                            <h4 class="h6 mb-2">
                              <a href="#">{thermelSheet?.sheet?.name}</a>
                            </h4>
                            <div class="text-body-secondary fs-sm me-3">
                              Orientation :{" "}
                              <span class="text-dark fw-medium">
                                {productOrientation?.orientation?.name}
                              </span>
                            </div>
                            <div class="text-body-secondary fs-sm me-3">
                              Size :{" "}
                              <span class="text-dark fw-medium">
                                {size?.size?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Sheet Quantity
                        </div>
                        <div class="fs-sm fw-medium text-dark">
                          <div className="count-input ms-n3">
                            <button
                              className="btn btn-icon fs-xl pro"
                              onClick={() => {
                                if (orderData?.page_qty <= product?.min_page) {
                                  setErrorMsg(
                                    `Minimum page ${product?.min_page}+`
                                  );
                                  return;
                                }
                                dispatch(
                                  changePageCount(orderData?.page_qty - 1)
                                );
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
                                dispatch(
                                  changePageCount(orderData?.page_qty + 1)
                                );
                              }}
                              data-increment
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Price</div>
                        <div class="fs-sm fw-medium text-dark">
                          {`${orderData?.sheetValue} ${user?.zone?.currency_sign}`}
                        </div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Total</div>
                        <div class="fs-sm fw-medium text-dark">
                          {`${orderData?.page_qty * orderData?.sheetValue} ${
                            user?.zone?.currency_sign
                          }`}
                        </div>
                      </td>
                    </tr>

                    {/* product papper dtaild page */}
                    <tr>
                      <td class="border-0 py-1 px-0">
                        <div class="d-flex align-items-center">
                          <a
                            class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                            href="#"
                          >
                            <img
                              src={papperType?.paper?.img}
                              width="110"
                              alt="Product"
                            />
                          </a>
                          <div class="ps-3 ps-sm-4">
                            <h4 class="h6 mb-2">
                              <a href="#">{papperType?.paper?.name}</a>
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Sheet Total
                        </div>
                        <div class="fs-sm fw-medium text-dark">
                          {zonePrice(thermelSheet?.sheetprice)?.price *
                            orderData?.page_qty}{" "}
                          + {papperType?.paper?.value} %
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Paper Price
                        </div>
                        <div class="fs-sm fw-medium text-dark">
                          {((orderData?.sheetValue * orderData.paperValue) /
                            100 +
                            orderData?.sheetValue) *
                            orderData?.page_qty -
                            orderData?.sheetValue * orderData?.page_qty}{" "}
                          {user?.zone?.currency_sign}
                        </div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Total</div>
                        <div class="fs-sm fw-medium text-dark">
                          {" "}
                          {((orderData?.sheetValue * orderData.paperValue) /
                            100 +
                            orderData?.sheetValue) *
                            orderData?.page_qty}{" "}
                          {user?.zone?.currency_sign}
                        </div>
                      </td>
                    </tr>

                    {/* product cover detaild */}
                    <tr>
                      <td class="border-0 py-1 px-0">
                        <div class="d-flex align-items-center">
                          <a
                            class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                            href="#"
                          >
                            <img
                              src={cover?.cover?.img}
                              width="110"
                              alt="Product"
                            />
                          </a>
                          <div class="ps-3 ps-sm-4">
                            <h4 class="h6 mb-2">
                              <a href="#">{cover?.cover?.name}</a>
                            </h4>
                            {orderData?.coverType !== "both_img" && (
                              <>
                                <div class="text-body-secondary fs-sm me-3">
                                  Cover Upgrade:{" "}
                                  <span class="text-dark fw-medium">
                                    {coverUpgrade?.name}
                                  </span>
                                </div>
                                <div class="text-body-secondary fs-sm me-3">
                                  Cover Color:{" "}
                                  <span class="text-dark fw-medium">
                                    {coverUpgradeColor?.colors?.color}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Quantity
                        </div>
                        <div class="fs-sm fw-medium text-dark">1</div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Price</div>
                        <div class="fs-sm fw-medium text-dark">
                          {zonePrice(cover?.coverprice)?.priceSrring}
                        </div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Total</div>
                        <div class="fs-sm fw-medium text-dark">
                          {zonePrice(cover?.coverprice)?.priceSrring}
                        </div>
                      </td>
                    </tr>

                    {/* product box & sleev detaild*/}
                    <tr>
                      <td class="border-0 py-1 px-0">
                        <div class="d-flex align-items-center">
                          <a
                            class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                            href="#"
                          >
                            <img
                              src={box?.boxsleeve.img}
                              width="110"
                              alt="Product"
                            />
                          </a>
                          <div class="ps-3 ps-sm-4">
                            <h4 class="h6 mb-2">
                              <a href="#">{box?.boxsleeve.name}</a>
                            </h4>
                            {orderData?.productboxandsleeveType !==
                              "both_img" && (
                              <>
                                <div class="text-body-secondary fs-sm me-3">
                                  Box & Sleev Upgrade:{" "}
                                  <span class="text-dark fw-medium">
                                    {boxUpgrade?.name}
                                  </span>
                                </div>
                                <div class="text-body-secondary fs-sm me-3">
                                  Box & Sleev Color:{" "}
                                  <span class="text-dark fw-medium">
                                    {boxUpgradeColor?.colors[0]?.color}
                                  </span>
                                </div>
                              </>
                            )}
                            {/* <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div> */}
                          </div>
                        </div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Quantity
                        </div>
                        <div class="fs-sm fw-medium text-dark">1</div>
                      </td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Price</div>
                        <div class="fs-sm fw-medium text-dark">{`${user?.zone?.currency_sign} ${orderData.boxSleeveValue}`}</div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Total</div>
                        <div class="fs-sm fw-medium text-dark">{`${user?.zone?.currency_sign} ${orderData.boxSleeveValue}`}</div>
                      </td>
                    </tr>
                    {Number(orderData?.isPhotoBookCopy) ? (
                      <tr>
                        <td class="border-0 py-1 px-0">
                          <div class="d-flex align-items-center">
                            <a
                              class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                              href="#"
                            >
                              <img
                                src={product?.img}
                                width="110"
                                alt="Product"
                              />
                            </a>
                            <div class="ps-3 ps-sm-4">
                              <h4 class="h6 mb-2">
                                <a href="#">Pocket book copy</a>
                              </h4>
                              {/* <div class="text-body-secondary fs-sm me-3">
                                                Box & Sleev Upgrade:{" "}
                                                <span class="text-dark fw-medium">
                                                  {datas?.coversupgrade?.name}
                                                </span>
                                              </div>
                                              <div class="text-body-secondary fs-sm me-3">
                                                Box & Sleev Color:{" "}
                                                <span class="text-dark fw-medium">
                                                  {
                                                    datas?.coversupgradecolor
                                                      ?.name
                                                  }
                                                </span>
                                              </div> */}
                              {/* <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div> */}
                            </div>
                          </div>
                        </td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Quantity
                          </div>
                          <div class="fs-sm fw-medium text-dark">
                            {orderData?.photoBookCopy}
                          </div>
                        </td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Price
                          </div>
                          <div class="fs-sm fw-medium text-dark">
                            {user?.zone?.currency_sign}{" "}
                            {orderData?.photoBookCopyPrice *
                              orderData?.photoBookCopy}{" "}
                          </div>
                        </td>
                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Total
                          </div>
                          <div class="fs-sm fw-medium text-dark">
                            {user?.zone?.currency_sign}{" "}
                            {zonePrice(product?.album_copy_price)?.price *
                              orderData?.photoBookCopy}{" "}
                          </div>
                        </td>
                      </tr>
                    ) : null}
                    {orderData?.pritnig_price_type == "design_print_bind" ? (
                      <tr>
                        <td class="border-0 py-1 my-2 px-0">
                          <div class="d-flex align-items-center">
                            <a
                              class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                              href="#"
                            >
                              <img
                                src={
                                  "https://api.photokrafft.com/img/size/img.png"
                                }
                                width="110"
                                alt="Product"
                              />
                            </a>
                            <div class="ps-3 ps-sm-4">
                              <h4 class="h6 mb-2">
                                <a href="#">Design + Print + Bind</a>
                              </h4>
                              {/* <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div> */}
                            </div>
                          </div>
                        </td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Quantity
                          </div>
                          <div class="fs-sm fw-medium text-dark">
                            {orderData?.page_qty}
                          </div>
                        </td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Price
                          </div>
                          <div class="fs-sm fw-medium text-dark">{`${
                            user?.zone?.currency_sign
                          } ${
                            orderData?.page_qty * orderData?.pritnig_price_value
                          }`}</div>
                        </td>
                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Total
                          </div>
                          <div class="fs-sm fw-medium text-dark">{`${
                            user?.zone?.currency_sign
                          } ${
                            orderData?.page_qty * orderData?.pritnig_price_value
                          }`}</div>
                        </td>
                      </tr>
                    ) : null}

                    {/* product box & sleev detaild*/}
                    <tr>
                      <td class="border-0 pb-1 px-0"></td>
                      <td class="border-0 pb-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 pb-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 pb-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm fw-medium text-dark">
                          <p>Total Album to print</p>
                          <div className="count-input">
                            <button
                              className="btn btn-primary text-white btn-sm pro"
                              onClick={() => {
                                if (orderData?.album_qty <= 1) {
                                  dispatch(
                                    fcm({
                                      key: "album_qty",
                                      error: `Minimum Album qty 1`,
                                    })
                                  );
                                  return;
                                }
                                dispatch(
                                  changeAlbumQty(orderData?.album_qty - 1)
                                );
                              }}
                              type="button"
                              data-decrement
                            >
                              -
                            </button>
                            <input
                              className="form-control-input mx-2 border-primary form-control-sm my-2"
                              type="number"
                              value={orderData?.album_qty}
                            />
                            <button
                              className="btn btn-primary btn-sm pro text-white"
                              type="button"
                              onClick={() => {
                                dispatch(
                                  fcm({
                                    key: "album_qty",
                                    error: false,
                                  })
                                );
                                dispatch(
                                  changeAlbumQty(orderData?.album_qty + 1)
                                );
                              }}
                              data-increment
                            >
                              +
                            </button>
                          </div>
                          <p className="text-danger">{formError?.album_qty}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-0 py-1 px-0"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Subtotal
                        </div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm fw-medium text-dark">
                          {(orderData.boxSleeveValue +
                            orderData.coverValue +
                            ((orderData?.sheetValue * orderData.paperValue) /
                              100 +
                              orderData?.sheetValue) *
                              orderData?.page_qty +
                            orderData.pritnigPriceTotalPageValue) *
                            orderData?.album_qty +
                            orderData?.photoBookCopyPrice *
                              orderData?.photoBookCopy}{" "}
                          {user?.zone?.currency_sign}
                        </div>
                      </td>
                    </tr>
                    {Number(orderData?.discount) != 0 ? (
                      <>
                        <tr>
                          <td class="border-0 py-1 px-0"></td>
                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                            <div class="fs-sm text-body-secondary mb-2">
                              Discount {`( ${orderData?.discount}% )`}
                            </div>
                          </td>
                          <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                            <div class="fs-sm fw-medium text-danger">{`- ${
                              user?.zone?.currency_sign
                            } ${
                              orderData.boxSleeveValue +
                              orderData.coverValue +
                              ((orderData?.sheetValue * orderData.paperValue) /
                                100 +
                                orderData?.sheetValue) *
                                orderData?.page_qty +
                              orderData.pritnigPriceTotalPageValue +
                              orderData?.photoBookCopyPrice *
                                orderData?.photoBookCopy -
                              Math.round(orderData?.orderTotale)
                            }`}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="border-0 py-1 px-0"></td>
                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                            <div class="fs-sm text-body-secondary mb-2">
                              After Discount Total
                            </div>
                          </td>
                          <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                            <div class="fs-sm fw-medium text-success">{`${
                              user?.zone?.currency_sign
                            } ${Math.round(orderData?.orderTotale)}`}</div>
                          </td>
                        </tr>
                      </>
                    ) : null}
                    {/* {datas?.pritnig_price_type ==
                                    "design_print_bind" ? (
                                      <>
                                        <tr>
                                          <td class="border-0 py-1 px-0"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm text-body-secondary mb-2">
                                              design print bind{" "}
                                              {datas?.pritnig_price}
                                            </div>
                                          </td>
                                          <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm fw-medium text-success">{`${
                                             12
                                            } ${
                                              datas?.pritnig_price *
                                              datas?.page_qty
                                            }`}</div>
                                          </td>
                                        </tr>
                                      </>
                                    ) : null} */}
                    {Number(orderData.isPhotoBookCopy) ? (
                      <tr>
                        <td class="border-0 py-1 px-0"></td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm text-body-secondary mb-2">
                            Pocket book Copy
                          </div>
                        </td>
                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div class="fs-sm fw-medium ">{`${
                            user?.zone?.currency_sign
                          } ${
                            orderData?.photoBookCopyPrice *
                            orderData?.photoBookCopy
                          }`}</div>
                        </td>
                      </tr>
                    ) : null}
                    <tr>
                      <td class="border-0 py-1 px-0"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">
                          Shiping charges
                        </div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm fw-medium text-dark">{`${user?.zone?.shipingcharge} ${user?.zone?.currency_sign}`}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-0 py-1 px-0"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm text-body-secondary mb-2">Total</div>
                      </td>
                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                        <div class="fs-sm fw-medium text-dark">
                          {orderData?.orderTotale + user?.zone?.shipingcharge}{" "}
                          {user?.zone?.currency_sign}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-0 py-1 px-0"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                  <div className="col-6">
                    <button
                      className="pro btn btn-dark w-100"
                      style={{ width: 250 }}
                      onClick={() => back()}
                    >
                      Back
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="pro btn btn-primary w-100"
                      onClick={() => submitOrder()}
                    >
                      Place an order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
       */}
    </>
  );
}

export default CheckOutItem;
