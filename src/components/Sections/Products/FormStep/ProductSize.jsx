import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeOrientationSize,
  changePageCount,
  changeSheet,
  formError as fcm,
  formNext,
  changePapertypeOption,
  changeOrderData,
} from "@/Redux/Slice/orderSlice";
import { zonePrice } from "@/utils";
import { localstorageKey, productFormStep } from "@/constants";

function ProductSize() {
  const {
    productSize,
    orderData,
    productSheet,
    product,
    formError,
    productpaperType,
    pritnig_price,
  } = useSelector((state) => state.order);
  const disapatch = useDispatch();
  return (
    <>
      <div className="row">
        {/* <div className="col-md-12 col-sm-12 col-lg-12">
          <span className="text-danger">{formError?.product_size}</span>
          <>
            <h6>Select size</h6>
          </>
          <div className="">
            {productSize.map((data) => (
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div
                  className={`size card  my-2 pro ${
                    orderData.productSize == data.id && "selected_prod_size"
                  }`}
                  onClick={() =>
                    disapatch(changeOrientationSize({ size: data }))
                  }
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={data?.size?.img}
                      style={{
                        height: 150,
                        width: "100%",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                      alt=""
                      srcset=""
                    />
                    <div></div>
                  </div>
                  <div className="py-3">
                    <center>{data?.size?.name}</center>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="col-md-12 col-sm-12 col-lg-12">
          <span className="text-danger">{formError?.product_size}</span>
          <>
            <h6>Select size</h6>
          </>
          <div className="row">
            {productSize.map((data) => {
              console.log(data);
              return (
                <div className="col-2 my-3">
                  <div
                    onClick={() => {
                      disapatch(changeOrientationSize({ size: data }));
                      disapatch(fcm({ key: "product_size", error: false }));
                    }}
                  >
                    <img
                      src={data?.size?.img}
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: "10px",
                        // backgroundColor: data.colorcode,
                      }}
                      className={`pro ${
                        orderData.productSize == data.size.id &&
                        "selected_prod_cover_option"
                      }`}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="my-2">{data?.size?.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        {orderData.productSize && (
          <>
            <div className="col-12 my-3">
              <span className="text-danger">{formError?.product_print}</span>
              <>
                <h6>Select your service ?</h6>
              </>
              <div className="row">
                <div className="col-2 my-3">
                  <div
                    onClick={() => {
                      disapatch(
                        changeOrderData({
                          key: "pritnig_price_type",
                          value: "print_bind",
                        })
                      );
                      disapatch(
                        changeOrderData({
                          key: "pritnig_price_value",
                          value: 0,
                        })
                      );
                      disapatch(
                        changeOrderData({
                          key: "pritnigPriceTotalPageValue",
                          value: product?.min_page * 0,
                        })
                      );
                      disapatch(fcm({ key: "product_print", error: false }));
                    }}
                  >
                    <img
                      src="https://api.photokrafft.com/img/size/img.png"
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: "10px",
                        // backgroundColor: data.colorcode,
                      }}
                      className={`pro ${
                        orderData.pritnig_price_type == "print_bind" &&
                        "selected_prod_cover_option"
                      }`}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="my-2">Print + Bind</div>
                </div>
                <div className="col-2 my-3">
                  <div
                    onClick={() => {
                      disapatch(
                        changeOrderData({
                          key: "pritnig_price_type",
                          value: "design_print_bind",
                        })
                      );
                      disapatch(
                        changeOrderData({
                          key: "pritnig_price_value",
                          value: zonePrice(pritnig_price)?.price,
                        })
                      );
                      disapatch(
                        changeOrderData({
                          key: "pritnigPriceTotalPageValue",
                          value:
                            product?.min_page * zonePrice(pritnig_price)?.price,
                        })
                      );
                      disapatch(fcm({ key: "product_print", error: false }));
                    }}
                  >
                    <img
                      src="https://api.photokrafft.com/img/size/img.png"
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: "10px",
                        // backgroundColor: data.colorcode,
                      }}
                      className={`pro ${
                        orderData.pritnig_price_type == "design_print_bind" &&
                        "selected_prod_cover_option"
                      }`}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="my-2">Design + Print + Bind</div>
                  <div className="my-2">
                    <b>{zonePrice(pritnig_price)?.priceSrring}</b> + per page
                  </div>
                </div>
              </div>
            </div>

            {orderData.pritnig_price_type == "design_print_bind" && (
              <div className="col-4">
                <div class="alert alert-success" role="alert">
                  <span className="text-success">
                    Designing cost is added{" "}
                    {`${zonePrice(pritnig_price)?.currency} ${
                      orderData.pritnig_price_value * orderData.page_qty
                    }`}
                  </span>
                </div>
              </div>
            )}

            {(orderData.pritnig_price_type == "print_bind" ||
              orderData.pritnig_price_type == "design_print_bind") && (
              <>
                <div className="col-12 my-3">
                  <span className="text-danger">
                    {formError?.product_sheet}
                  </span>
                  <>
                    <h6>Select your binding</h6>
                  </>
                  <div className="row">
                    {productSheet.map((data) => {
                      return (
                        <>
                          <div className="col-2 my-3">
                            <div
                              onClick={() => {
                                console.log(data);
                                disapatch(changeSheet({ sheet: data }));
                                disapatch(
                                  fcm({ key: "product_sheet", error: false })
                                );
                              }}
                            >
                              <img
                                src={data?.sheet?.img}
                                style={{
                                  width: 120,
                                  height: 120,
                                  borderRadius: "10px",
                                  // backgroundColor: data.colorcode,
                                }}
                                className={`pro ${
                                  orderData.productSheet == data?.sheet?.id &&
                                  "selected_prod_cover_option"
                                }`}
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div className="my-2">{data?.sheet?.name}</div>
                            <div className="my-2">
                              <b>{zonePrice(data.sheetprice)?.priceSrring}</b>
                            </div>
                          </div>
                        </>
                      );
                    }) || (
                      <>
                        <h1>Select Size</h1>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-12 my-3">
                  <span className="text-danger">{formError?.paperType}</span>
                  <>
                    <h6>Select your paper type</h6>
                  </>
                  <div className="row">
                    {productpaperType.map((data) => (
                      <>
                        <div className="col-2 my-3">
                          <div
                            onClick={() => {
                              console.log(data);
                              disapatch(
                                changePapertypeOption({ papertype: data })
                              );
                              disapatch(
                                fcm({ key: "paperType", error: false })
                              );
                            }}
                          >
                            <img
                              src={data?.paper?.img}
                              style={{
                                width: 120,
                                height: 120,
                                // backgroundColor: data.colorcode,
                                borderRadius: "10px",
                              }}
                              className={`pro ${
                                orderData.paperType == data.paper.id &&
                                "selected_prod_cover_option"
                              }`}
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div className="my-2">{data.paper.name}</div>
                          <div className="my-2">
                            <b>
                              {data.paper.value > 0 &&
                                `+ ${data.paper.value} % Extra`}
                            </b>
                          </div>
                        </div>
                      </>
                    )) || (
                      <>
                        <h1>Select Size</h1>
                      </>
                    )}
                  </div>
                </div>
                <div className="my-5">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h6>Total pages to print</h6>
                    <span className="text-danger">
                      {formError?.product_page}
                    </span>
                    <div class="fs-sm fw-medium text-dark">
                      <div className="count-input">
                        <button
                          className="btn btn-primary text-white btn-sm pro"
                          onClick={() => {
                            if (orderData?.page_qty <= product?.min_page) {
                              disapatch(
                                fcm({
                                  key: "product_page",
                                  error: `Minimum page ${product?.min_page}+`,
                                })
                              );
                              return;
                            }
                            disapatch(changePageCount(orderData?.page_qty - 1));
                          }}
                          type="button"
                          data-decrement
                        >
                          -
                        </button>
                        <input
                          className="form-control-input mx-2 border-primary form-control-sm my-2"
                          type="number"
                          value={orderData?.page_qty}
                        />
                        <button
                          className="btn btn-primary btn-sm pro text-white"
                          type="button"
                          onClick={() => {
                            disapatch(
                              fcm({
                                key: "product_page",
                                error: false,
                              })
                            );
                            disapatch(changePageCount(orderData?.page_qty + 1));
                          }}
                          data-increment
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p>Enter your total pages to print for the album</p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Button
        next={() => {
          if (!orderData.productSize) {
            disapatch(fcm({ key: "product_size", error: "Select one option" }));
            return 0;
          }
          if (!orderData.pritnig_price_type) {
            disapatch(
              fcm({ key: "product_print", error: "Select one option" })
            );
            return 0;
          }
          if (!orderData.productSheet) {
            disapatch(
              fcm({ key: "product_sheet", error: "Select one option" })
            );
            return 0;
          }
          if (!orderData.paperType) {
            disapatch(fcm({ key: "paperType", error: "Select one option" }));
            return 0;
          }
          if (orderData.page_qty < product?.min_page) {
            disapatch(
              fcm({
                key: "product_page",
                error: `Minimum page ${product?.min_page}+`,
              })
            );
            return 0;
          }
          disapatch(formNext(productFormStep.cover));
        }}
        back={() => {
          disapatch(formNext(productFormStep.orientation));
        }}
      />
    </>
  );
}

export default ProductSize;
