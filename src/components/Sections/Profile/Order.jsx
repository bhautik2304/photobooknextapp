"use client";
import React, { useEffect, useState } from "react";
import ProfilePageLayout from "./ProfilePageLayout";
import axios from "axios";
import { apiRoutes, appRoutes } from "@/constants";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import Link from "next/link";
import { Badge, Chip } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import emputycart from "@/assets/img/emputycart.json";
import Image from "next/image";

const productTotalPrice = (
  page,
  sheet,
  paper,
  cover,
  boxsleev,
  shiping,
  discount = 0
) => {
  const productTotal =
    (page * sheet * paper) / 100 + page * sheet + (cover + boxsleev);

  const ProductSubTotal =
    productTotal - (productTotal * discount) / 100 + shiping;

  const discountValue = (productTotal * discount) / 100;

  const afterDiscountTotal = productTotal - (productTotal * discount) / 100;

  return {
    productTotal: productTotal,
    subTotal: ProductSubTotal,
    discountValue: discountValue,
    afterDiscount: afterDiscountTotal,
  };
};

function Order() {
  const [data, setData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [dataCount, setDataCount] = useState(0);
  const userId = useSelector((state) => state.auth.user);

  console.log(`${apiRoutes.orders} / user_order`);

  useEffect(() => {
    axios
      .post(`${apiRoutes.orders}/user_order`, { user_id: userId.id })
      .then((response) => {
        setData(response.data.data.reverse());
        setDataCount(response.data.data.length || 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userId, currentPage]);

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the data array to get the items for the current page
  const currentItems = data && data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages based on the data count and items per page
  const pageCount = Math.ceil(dataCount / itemsPerPage);

  // Change page
  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  console.log(pageCount); // This will now log the correct currentItems after data is fetched

  return (
    <ProfilePageLayout>
      {/* <!-- Orders--> */}

      <div className="col-lg-9">
        <div className="row g-4 mb-4">
          <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
                <Badge badgeContent={data.length} color="success">
                  <i className="ai-cart text-primary lead pe-1 me-2"></i>
                </Badge>
                <h2 className="h4 mb-0 mx-4">Orders</h2>
              </div>
              {data ? (
                <>
                  {currentItems?.map((datas, key) => {
                    const date = moment(datas?.created_at);
                    const {
                      discountValue,
                      subTotal,
                      productTotal,
                      afterDiscount,
                    } = productTotalPrice(
                      datas?.page_qty,
                      datas?.sheetValue,
                      datas?.paperValue,
                      datas?.coverValue,
                      datas?.boxSleeveValue,
                      datas?.shippingValue,
                      datas?.discount
                    );
                    return (
                      <>
                        <Accordion
                          key={key}
                          class="accordion-item border-top mb-0"
                        >
                          <AccordionSummary
                            // expandIcon={<ArrowDownwardIcon />}
                            aria-controls={`panel${key}-content`}
                            id={`panel${key}-header`}
                          >
                            <div
                              class="pro accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed"
                              href="#orderOne"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="orderOne"
                            >
                              <div
                                class="d-flex justify-content-between w-100"
                                style={{ maxWidth: "440px" }}
                              >
                                <div class="me-3 me-sm-4">
                                  <div class="fs-sm text-body-secondary">
                                    #ord-{datas?.order_no}
                                  </div>
                                  <Chip
                                    label={datas?.order_status}
                                    color={
                                      (datas?.order_status === "pending" &&
                                        "secondary") ||
                                      (datas?.order_status === "processing" &&
                                        "warning") ||
                                      (datas?.order_status === "cancel" &&
                                        "error") ||
                                      (datas?.order_status === "completed" &&
                                        "success") ||
                                      "default"
                                    }
                                    size="small"
                                  >
                                    Delivered
                                  </Chip>
                                </div>
                                <div class="me-3 me-sm-4">
                                  <div class="d-none d-sm-block fs-sm text-body-secondary mb-2">
                                    Order date
                                  </div>
                                  <div class="d-sm-none fs-sm text-body-secondary mb-2">
                                    Date
                                  </div>
                                  {/* {.format('M'))} */}
                                  <div class="fs-sm fw-medium text-dark">
                                    {date.format("MMM DD, YY h:m a")}
                                  </div>
                                </div>
                                <div class="me-3 me-sm-4">
                                  <div class="fs-sm text-body-secondary mb-2">
                                    Total
                                  </div>
                                  <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${subTotal + datas?.pritnig_price * datas?.page_qty}`}</div>
                                </div>
                              </div>
                              {/* <div class="accordion-button d-none d-sm-flex">
                            <div class="mx-1">
                              <img src={datas?.product?.img} width="48" alt="Product" />
                              <center>
                             <span className="fs-sm" > {datas?.product?.name}</span>
                              </center>
                            </div>
                            <div class="mx-1">
                              <img src={datas?.product?.img} width="48" alt="Product" />
                            </div>
                            <div class="mx-1">
                              <img src={datas?.product?.img} width="48" alt="Product" />
                            </div>
                            <div class="mx-1">
                              <img src={datas?.product?.img} width="48" alt="Product" />
                            </div>
                          </div> */}
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div class="accordion-body">
                              <div class="table-responsive pt-1">
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
                                            <img
                                              src={datas?.product?.img}
                                              width="110"
                                              alt="Product"
                                            />
                                          </a>
                                          <div class="ps-3 ps-sm-4">
                                            <h4 class="h6 mb-2">
                                              <a href="#">
                                                {datas?.product?.name}
                                              </a>
                                            </h4>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Quantity
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">
                                          1
                                        </div>
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
                                              src={
                                                datas?.productsheet?.sheet?.img
                                              }
                                              width="110"
                                              alt="Product"
                                            />
                                          </a>
                                          <div class="ps-3 ps-sm-4">
                                            <h4 class="h6 mb-2">
                                              <a href="#">
                                                {
                                                  datas?.productsheet?.sheet
                                                    ?.name
                                                }
                                              </a>
                                            </h4>
                                            <div class="text-body-secondary fs-sm me-3">
                                              Orientation :{" "}
                                              <span class="text-dark fw-medium">
                                                {
                                                  datas?.productorientation
                                                    ?.orientation?.name
                                                }
                                              </span>
                                            </div>
                                            <div class="text-body-secondary fs-sm me-3">
                                              Size :{" "}
                                              <span class="text-dark fw-medium">
                                                {datas?.productsize?.size?.name}
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
                                          {datas?.page_qty}
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Price
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.sheetValue} ${datas?.countryzone?.currency_sign}`}</div>
                                      </td>
                                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Total
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${
                                          datas?.page_qty * datas?.sheetValue
                                        } ${
                                          datas?.countryzone?.currency_sign
                                        }`}</div>
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
                                              src={
                                                datas?.productpaper?.paper?.img
                                              }
                                              width="110"
                                              alt="Product"
                                            />
                                          </a>
                                          <div class="ps-3 ps-sm-4">
                                            <h4 class="h6 mb-2">
                                              <a href="#">
                                                {
                                                  datas?.productpaper?.paper
                                                    ?.name
                                                }
                                              </a>
                                            </h4>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Sheet Total
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${
                                          datas?.countryzone?.currency_sign
                                        } ${
                                          datas?.page_qty * datas?.sheetValue
                                        }`}</div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Paper Price
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${
                                          datas?.countryzone?.currency_sign
                                        } ${
                                          (datas?.page_qty *
                                            datas?.sheetValue *
                                            datas?.paperValue) /
                                          100
                                        } (+${datas?.paperValue})`}</div>
                                      </td>
                                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Total
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${
                                          datas?.countryzone?.currency_sign
                                        } ${
                                          datas?.page_qty * datas?.sheetValue +
                                          (datas?.page_qty *
                                            datas?.sheetValue *
                                            datas?.paperValue) /
                                            100
                                        }`}</div>
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
                                              src={
                                                datas?.productcover?.cover?.img
                                              }
                                              width="110"
                                              alt="Product"
                                            />
                                          </a>
                                          <div class="ps-3 ps-sm-4">
                                            <h4 class="h6 mb-2">
                                              <a href="#">
                                                {
                                                  datas?.productcover?.cover
                                                    ?.name
                                                }
                                              </a>
                                            </h4>
                                            <div class="text-body-secondary fs-sm me-3">
                                              Cover Upgrade:{" "}
                                              <span class="text-dark fw-medium">
                                                {datas?.coversupgrade?.name}
                                              </span>
                                            </div>
                                            <div class="text-body-secondary fs-sm me-3">
                                              Cover Color:{" "}
                                              <span class="text-dark fw-medium">
                                                {
                                                  datas?.coversupgradecolor
                                                    ?.name
                                                }
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Quantity
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">
                                          1
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Price
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.coverValue}`}</div>
                                      </td>
                                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Total
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.coverValue}`}</div>
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
                                              src={
                                                datas?.productboxsleeve
                                                  ?.boxsleeve?.img
                                              }
                                              width="110"
                                              alt="Product"
                                            />
                                          </a>
                                          <div class="ps-3 ps-sm-4">
                                            <h4 class="h6 mb-2">
                                              <a href="#">
                                                {
                                                  datas?.productboxsleeve
                                                    ?.boxsleeve?.name
                                                }
                                              </a>
                                            </h4>
                                            <div class="text-body-secondary fs-sm me-3">
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
                                            </div>
                                            {/* <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div> */}
                                          </div>
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Quantity
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">
                                          1
                                        </div>
                                      </td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Price
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.boxSleeveValue}`}</div>
                                      </td>
                                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Total
                                        </div>
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.boxSleeveValue}`}</div>
                                      </td>
                                    </tr>
                                    {Number(datas.is_album_book_copy) ? (
                                      <tr>
                                        <td class="border-0 py-1 px-0">
                                          <div class="d-flex align-items-center">
                                            <a
                                              class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                                              href="#"
                                            >
                                              <img
                                                src={datas?.product?.img}
                                                width="110"
                                                alt="Product"
                                              />
                                            </a>
                                            <div class="ps-3 ps-sm-4">
                                              <h4 class="h6 mb-2">
                                                <a href="#">
                                                  Pocket book copy
                                                </a>
                                              </h4>
                                              <div class="text-body-secondary fs-sm me-3">
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
                                              </div>
                                              {/* <div class="text-body-secondary fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div> */}
                                            </div>
                                          </div>
                                        </td>
                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                          <div class="fs-sm text-body-secondary mb-2">
                                            Quantity
                                          </div>
                                          <div class="fs-sm fw-medium text-dark">
                                            {datas?.album_book_copy_qty}
                                          </div>
                                        </td>
                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                          <div class="fs-sm text-body-secondary mb-2">
                                            Price
                                          </div>
                                          <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.album_book_copy_price}`}</div>
                                        </td>
                                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                          <div class="fs-sm text-body-secondary mb-2">
                                            Total
                                          </div>
                                          <div class="fs-sm fw-medium text-dark">{`${
                                            datas?.countryzone?.currency_sign
                                          } ${
                                            datas?.album_book_copy_price *
                                            datas?.album_book_copy_qty
                                          }`}</div>
                                        </td>
                                      </tr>
                                    ) : null}
                                    {datas?.pritnig_price_type ==
                                    "design_print_bind" ? (
                                      <tr>
                                        <td class="border-0 py-1 my-2 px-0">
                                          <div class="d-flex align-items-center">
                                          <a
                                              class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                                              href="#"
                                            >
                                              <img
                                                src={"https://api.photokrafft.com/img/size/img.png"}
                                                width="110"
                                                alt="Product"
                                              />
                                            </a>
                                            <div class="ps-3 ps-sm-4">
                                           
                                              <h4 class="h6 mb-2">
                                                <a href="#">
                                                Design + Print + Bind
                                                </a>
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
                                            {datas?.page_qty}
                                          </div>
                                        </td>
                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                          <div class="fs-sm text-body-secondary mb-2">
                                            Price
                                          </div>
                                          <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.pritnig_price}`}</div>
                                        </td>
                                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                          <div class="fs-sm text-body-secondary mb-2">
                                            Total
                                          </div>
                                          <div class="fs-sm fw-medium text-dark">{`${
                                            datas?.countryzone?.currency_sign
                                          } ${
                                            datas?.pritnig_price *
                                            datas?.page_qty
                                          }`}</div>
                                        </td>
                                      </tr>
                                    ) : null}

                                    {/* product box & sleev detaild*/}
                                    <tr>
                                      <td class="border-0 py-1 px-0"></td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                                      <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm text-body-secondary mb-2">
                                          Total
                                        </div>
                                      </td>
                                      <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${productTotal + datas?.pritnig_price * datas?.page_qty}`}</div>
                                      </td>
                                    </tr>
                                    {Number(datas?.discount) !=0 ? (
                                      <>
                                        <tr>
                                          <td class="border-0 py-1 px-0"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm text-body-secondary mb-2">
                                              Discount{" "}
                                              {`( ${datas?.discount}% )`}
                                            </div>
                                          </td>
                                          <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm fw-medium text-danger">{`- ${datas?.countryzone?.currency_sign} ${discountValue}`}</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="border-0 py-1 px-0"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4"></td>
                                          <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm text-body-secondary mb-2">
                                              Afetr Discount Total
                                            </div>
                                          </td>
                                          <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                            <div class="fs-sm fw-medium text-success">{`${datas?.countryzone?.currency_sign} ${afterDiscount}`}</div>
                                          </td>
                                        </tr>
                                      </>
                                    ) : null}
                                    {datas?.pritnig_price_type ==
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
                                              datas?.countryzone?.currency_sign
                                            } ${
                                              datas?.pritnig_price *
                                              datas?.page_qty
                                            }`}</div>
                                          </td>
                                        </tr>
                                      </>
                                    ) : null}
                                    {Number(datas.is_album_book_copy) ? (
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
                                            datas?.countryzone?.currency_sign
                                          } ${
                                            datas?.album_book_copy_price *
                                            datas?.album_book_copy_qty
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
                                        <div class="fs-sm fw-medium text-dark">{`${datas?.countryzone?.currency_sign} ${datas?.shippingValue}`}</div>
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
                                        <div class="fs-sm fw-medium text-dark">{`${
                                          datas?.countryzone?.currency_sign
                                        } ${
                                          subTotal +
                                          datas?.album_book_copy_price *
                                            datas?.album_book_copy_qty +
                                          datas?.pritnig_price * datas?.page_qty
                                        }`}</div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="bg-secondary rounded-1 p-4 my-2">
                                <div class="row">
                                  <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                    <div class="fs-sm fw-medium text-dark mb-1">
                                      Payment:
                                    </div>
                                    <div class="fs-sm">
                                      <Chip
                                        label={datas?.payment_status?.toUpperCase()}
                                        color={
                                          (datas?.payment_status ===
                                            "pending" &&
                                            "warning") ||
                                          (datas?.payment_status === "paid" &&
                                            "success") ||
                                          (datas?.payment_status === "credit" &&
                                            "info") ||
                                          (datas?.payment_status ===
                                            "completed" &&
                                            "success") ||
                                          "default"
                                        }
                                        size="small"
                                      >
                                        Delivered
                                      </Chip>
                                    </div>
                                  </div>
                                  <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                    <div class="fs-sm fw-medium text-dark mb-1">
                                      Delivery address:
                                    </div>
                                    <div class="fs-sm">
                                      {!datas?.delivery_address == null
                                        ? datas?.delivery_address
                                        : datas?.costomer?.address}
                                    </div>
                                  </div>
                                  <div class="col-md-4 col-lg-3 text-md-end"></div>
                                </div>
                              </div>
                              {!datas?.order_photos_link ? (
                                <>
                                  <FileUpload orderId={datas?.order_no} />
                                </>
                              ) : (
                                <>
                                  <a
                                    class="btn btn-primary w-100"
                                    href={datas?.order_photos_link?.source_link}
                                    download
                                  >
                                    Download your album printing photos
                                  </a>
                                </>
                              )}
                            </div>
                            {datas?.order_status == "dispatch" ? (
                              <>
                                <div class="bg-secondary rounded-1 p-4 my-2">
                                  <div class="row">
                                    <div>
                                      <span>Delivery Partner Detail:</span>
                                      <br />
                                      <br />
                                      <a
                                        href={datas?.delivery_partner_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {datas?.delivery_partner_link}
                                      </a>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 my-3">
                                      <div
                                        class="alert alert-success d-flex justify-content-center"
                                        // role="alert"
                                      >
                                        delivery tracking no
                                        <span className="text-black mx-2">
                                          {datas?.delivery_tracking_no}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}

                            {/* <div class="bg-secondary rounded-1 p-4 my-2">
                              {datas?.cover_type != "option_colors" ? (
                                <>
                                  <h4>Cover Photos</h4>
                                  <div class="row">
                                    <div className="col-lg-6 col-md-3 col-sm-12">
                                      <Image
                                        style={{ borderRadius: 10 }}
                                        className="my-3"
                                        height={400}
                                        width={400}
                                        src={datas?.coverfrontimg}
                                        alt=""
                                        srcset=""
                                      />
                                      <h6 className="my-3">
                                        Cover Frontside image
                                      </h6>
                                    </div>
                                    {datas?.boxsleevebacksideimg ? (
                                      <>
                                        <div className="col-lg-6 col-md-3 col-sm-12">
                                          <Image
                                            style={{ borderRadius: 10 }}
                                            className="my-3"
                                            height={400}
                                            width={400}
                                            src={datas?.boxsleevebacksideimg}
                                            alt=""
                                            srcset=""
                                          />
                                          <h6 className="my-3">
                                            Cover Backside Image
                                          </h6>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </>
                              ) : null}
                              {datas?.boxsleeve_type != "option_colors" ? (
                                <>
                                  <h4>Box & Sleeve Photos</h4>
                                  <div class="row">
                                    <div className="col-lg-6 col-md-3 col-sm-12">
                                      <Image
                                        style={{ borderRadius: 10 }}
                                        className="my-3"
                                        height={400}
                                        width={400}
                                        src={datas?.boxsleevefrontimg}
                                        alt=""
                                        srcset=""
                                      />
                                      <h6 className="my-3">
                                        Box & Sleeve Frontside image
                                      </h6>
                                    </div>
                                    {datas?.boxsleevebacksideimg ? (
                                      <>
                                        <div className="col-lg-6 col-md-3 col-sm-12">
                                          <Image
                                            style={{ borderRadius: 10 }}
                                            className="my-3"
                                            height={400}
                                            width={400}
                                            src={datas?.boxsleevebacksideimg}
                                            alt=""
                                            srcset=""
                                          />
                                          <h6 className="my-3">
                                            Box & Sleeve Backside image
                                          </h6>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </>
                              ) : null}
                            </div> */}
                          </AccordionDetails>
                        </Accordion>
                      </>
                    );
                  })}
                  <Stack className="my-5" spacing={2} fullwidth width="100%">
                    <Pagination
                      count={pageCount}
                      page={currentPage}
                      onChange={paginate}
                      fullWidth={true}
                    />
                  </Stack>
                </>
              ) : (
                <>
                  <Player
                    autoplay
                    speed={0}
                    loop
                    src={emputycart}
                    style={{ height: "250px", width: "250px" }}
                  ></Player>
                  <center>
                    <div class="alert alert-danger" role="alert">
                      No Orders Found
                    </div>
                  </center>
                </>
              )}
              {/* <!-- Orders accordion--> */}
            </div>
            {/* <!-- Order --> */}
          </section>
        </div>
      </div>
    </ProfilePageLayout>
  );
}

export default Order;

const FileUpload = ({ orderId }) => {
  const [sourceType, setSourceType] = useState(null);
  const [file, setFile] = useState(null);
  const [zipFileError, setZipFileError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUploadStatus, setFileUploadStatus] = useState(false);
  const [fileerror, setError] = useState(false);
  const [persent, setPersent] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(null);

  const controller = new AbortController();

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  console.log(orderId);
  const fileUplode = () => {
    const error = {};
    if (file == null) {
      error.file = "Required *";
    }

    // Check if there are any errors
    if (Object.keys(error).length > 0) {
      setError(error);
      return 0; // Validation failed
    }

    if (file.type == "application/x-zip-compressed") {
      const formData = new FormData();
      formData.append("orderNo", orderId);
      formData.append("sourceType", sourceType);
      if (sourceType == "Zip File") {
        formData.append("photos_file", file);
      } else {
        formData.append("photos_url", file);
      }
      axios
        .post(apiRoutes.uploadfile, formData, {
          signal: controller.signal,
          cancelToken: source.token,
          onUploadProgress: (progressEvent) => {
            console.log(controller.signal);
            console.log(progressEvent);
            if (progressEvent.bytes) {
              console.log(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              );
              setPersent(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              );
            }
          },
        })
        .then((res) => {
          if (res?.data?.code == 200) {
            setFileUploadStatus({
              status: true,
              class: "success",
              msg: res.data.msg,
            });
          }
        })
        .catch((error) => {
          setFileUploadStatus({
            status: true,
            class: "danger",
            msg: "Something wrong pls contact us",
          });
          console.error("Error uploading file:", error);
        });
    } else {
      setZipFileError("Select Only Zip File");
    }
  };

  return (
    <>
      <div class="bg-secondary rounded-1 p-4 my-2">
        <>Upload File</>
        {fileUploadStatus?.status ? (
          <>
            <div class={`alert alert-${fileUploadStatus?.class}`} role="alert">
              {fileUploadStatus?.msg}
            </div>
            {fileUploadStatus?.class == "danger" && (
              <>
                <div className="col-12">
                  <button
                    className="btn btn-danger col-12 my-3 pro"
                    onClick={() => fileUplode()}
                  >
                    Retry
                  </button>
                </div>
                <div className="d-flex justify-content-center aligns-item-center">
                  <div className="card p-3 col-8">
                    <h6>
                      Select the source from above drop-down and add your photos
                      which needs to be print. Please don’t refresh your page ,
                      while photos are uploading, if something went wrong please{" "}
                      <Link
                        href="https://wa.me/+919081770314?text=please%20help%20me%20with%20my%20order%20number%20:%20000000%20,%20something%20went%20wrong%20while%20uploading%20my%20photos"
                        className="link text-primary"
                      >
                        contact us
                      </Link>
                      .
                    </h6>
                  </div>
                </div>
              </>
            )}
          </>
        ) : persent != 0 ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  variant="determinate"
                  sx={{
                    height: 8,
                    borderRadius: 100,
                    marginX: 2,
                  }}
                  onError={(e) => {
                    console.log(e);
                  }}
                  color="inherit"
                  value={persent}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
              >{`${persent}%`}</Typography>
            </Box>
            <center>
              <span className="text-danger my-4">
                * Please do not refresh you window
              </span>
            </center>
          </>
        ) : (
          <>
            <div className="col-12 my-2">
              <div className="form-group">
                <label htmlFor="">Source Type</label>
                <select
                  className="form-control"
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="">Select Source Type</option>
                  <option value="Zip File">Zip File</option>
                  <option value="Third Party">Drive Link / Third Party</option>
                </select>
              </div>
            </div>
            {sourceType && (
              <>
                {sourceType == "Zip File" ? (
                  <div className="col-12 my-2">
                    {zipFileError && (
                      <span className="text-danger">{zipFileError}</span>
                    )}
                    <div className="form-group">
                      <label>Source Type</label>
                      <input
                        type="file"
                        accept=".zip"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                    </div>
                    <span className="text-danger">{fileerror?.file}</span>
                  </div>
                ) : (
                  <div className="col-12 my-2">
                    <div className="form-group">
                      <label htmlFor="">Enter Url</label>
                      <input
                        type="text"
                        // value={orderDetaild.url}
                        onChange={(e) => setFile(e.target.value)}
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                    </div>
                    <span className="text-danger">{fileerror?.file}</span>
                  </div>
                )}
                <div className="col-12 my-4">
                  {persent === 0 && (
                    <>
                      <button
                        className="btn btn-primary col-12 my-3 pro"
                        onClick={() => fileUplode()}
                      >
                        Submit
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
