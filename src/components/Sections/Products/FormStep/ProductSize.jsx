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
import { localstorageKey } from "@/constants";

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
                      style={{ height: 150, width: "100%", padding: "5px",borderRadius:"5px" }}
                      alt=""
                      srcset=""
                    />
                    <div></div>
                  </div>
                  <div className="py-3" >
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
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    className={`size card  my-2 pro ${
                      orderData.productSize == data.size.id &&
                      "selected_prod_size"
                    }`}
                    onClick={() => {
                      disapatch(changeOrientationSize({ size: data }));
                      disapatch(fcm({ key: "product_size", error: false }));
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={data?.size?.img}
                        style={{ height: 70, width: 70, padding: "5px" }}
                        alt=""
                        srcset=""
                      />
                      {data?.size?.name}
                      <div></div>
                    </div>
                  </div>
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
                <h6>What do you want us to process ?</h6>
              </>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    className={`size card my-2 pro ${
                      orderData.pritnig_price_type == "print_bind" &&
                      "selected_prod_size"
                    }`}
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
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="https://api.photokrafft.com/img/size/img.png"
                        style={{ height: 70, width: 70, padding: "5px" }}
                        alt=""
                        srcset=""
                      />
                      <div>
                        Print + Bind
                        <center>
                          {/* 0 */}
                          {/* {`${zonePrice(data.price)?.price} ₹`} */}
                        </center>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    className={`size card my-2 pro ${
                      orderData.pritnig_price_type == "design_print_bind" &&
                      "selected_prod_size"
                    }`}
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
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="https://api.photokrafft.com/img/size/img.png"
                        style={{ height: 70, width: 70, padding: "5px" }}
                        alt=""
                        srcset=""
                      />
                      <div>
                        Design + Print + Bind
                        <div>
                          {zonePrice(pritnig_price)?.priceSrring} + per page
                          {/* {`${zonePrice(data.price)?.price} ₹`} */}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  {orderData.pritnig_price_type == "design_print_bind" && (
                    <span className="text-success">
                      Designing cost is added{" "}
                      {orderData.pritnig_price_value * orderData.page_qty}{" "}
                      {zonePrice(pritnig_price)?.currency}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {(orderData.pritnig_price_type == "print_bind" ||
              orderData.pritnig_price_type == "design_print_bind") && (
              <>
                <div className="col-12 my-3">
                  <span className="text-danger">
                    {formError?.product_sheet}
                  </span>
                  <>
                    <h6>Select your paper sheet</h6>
                  </>
                  <div className="row">
                    {productSheet.map((data) => {
                      return (
                        <>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div
                              className={`size card my-2 pro ${
                                orderData.productSheet == data?.sheet?.id &&
                                "selected_prod_size"
                              }`}
                              onClick={() => {
                                console.log(data);
                                disapatch(changeSheet({ sheet: data }));
                                disapatch(
                                  fcm({ key: "product_sheet", error: false })
                                );
                              }}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <img
                                  src={data?.sheet?.img}
                                  style={{
                                    height: 70,
                                    width: 70,
                                    padding: "5px",
                                  }}
                                  alt=""
                                  srcset=""
                                />
                                <div>
                                  {data?.sheet?.name}
                                  <div>
                                    {zonePrice(data.sheetprice)?.priceSrring}
                                    {/* {`${zonePrice(data.price)?.price} ₹`} */}
                                  </div>
                                </div>
                                <div></div>
                              </div>
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
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div
                            className={`size card my-2 pro ${
                              orderData.paperType == data.paper.id &&
                              "selected_prod_size"
                            }`}
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
                            <div className="d-flex justify-content-between align-items-center">
                              <img
                                src={data.paper.img}
                                style={{
                                  height: 70,
                                  width: 70,
                                  padding: "5px",
                                }}
                                alt=""
                                srcset=""
                              />
                              <div>
                                {data.paper.name}
                                <div>
                                  {data.paper.value > 0 &&
                                    `+ ${data.paper.value} % Extra`}
                                </div>
                              </div>
                              <div></div>
                            </div>
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
            disapatch(
              fcm({ key: "product_size", error: "Select minimum one option" })
            );
            return 0;
          }
          if (!orderData.pritnig_price_type) {
            disapatch(
              fcm({ key: "product_print", error: "Select minimum one option" })
            );
            return 0;
          }
          if (!orderData.productSheet) {
            disapatch(
              fcm({ key: "product_sheet", error: "Select minimum one option" })
            );
            return 0;
          }
          if (!orderData.paperType) {
            disapatch(
              fcm({ key: "paperType", error: "Select minimum one option" })
            );
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
          disapatch(formNext());
        }}
      />
    </>
  );
}

export default ProductSize;
