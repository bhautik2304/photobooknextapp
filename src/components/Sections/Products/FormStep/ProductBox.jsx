import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeBoxSleev,
  selectBoxSleeveOption,
  changeBoxColor,
  addFrontBoxphoto,
  addBackBoxphoto,
  changePageCount,
  changeSheet,
  formError as fcm,
  formNext,
  selectCoverOption,
} from "@/Redux/Slice/orderSlice";
import { zonePrice } from "@/utils";
import { localstorageKey, productFormStep } from "@/constants";

function ProductBox() {
  const {
    productboxSleev,
    orderData,
    productboxandsleeveoptions,
    productboxandsleeveoptioncolor,
    formError,
  } = useSelector((state) => state.order);
  const disapatch = useDispatch();
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <span className="text-danger">{formError?.product_boxSleev}</span>
          <>
            <h6>box or sleeve </h6>
          </>
          <div className="row">
            {productboxSleev.map((data) => {
              console.log(data);
              return (
                // <div className="col-lg-4 col-md-4 col-sm-12">
                //   <div
                //     className={`size card my-2 pro ${
                //       orderData.productboxSleev == data.boxsleeve.id &&
                //       "selected_prod_size"
                //     }`}
                //     onClick={() => {
                //       disapatch(changeBoxSleev({ boxSleev: data }));
                //       disapatch(fcm({ key: "product_boxSleev", error: false }));
                //     }}
                //   >
                //     <div className="d-flex justify-content-between align-items-center">
                //       <img
                //         src={data.boxsleeve.img}
                //         style={{ height: 70, width: 70, padding: "5px" }}
                //         alt=""
                //         srcset=""
                //       />
                //       <div>
                //         {data.boxsleeve.name}
                //         <div>{zonePrice(data.boxsleeveprice)?.priceSrring}</div>
                //       </div>
                //       <div></div>
                //     </div>
                //   </div>
                // </div>
                <div className="col-2 my-3">
                  <div
                    onClick={() => {
                      console.log(data);
                      disapatch(changeBoxSleev({ boxSleev: data }));
                      disapatch(fcm({ key: "product_boxSleev", error: false }));
                    }}
                  >
                    <img
                      src={data?.boxsleeve?.img}
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: "10px",
                        // backgroundColor: data.colorcode,
                      }}
                      className={`pro ${
                        orderData.productboxSleev == data.boxsleeve.id &&
                        "selected_prod_cover_option"
                      }`}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="my-2">{data.boxsleeve.name}</div>
                  <div className="my-2">
                    <b>{zonePrice(data.boxsleeveprice).priceSrring}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-12 my-4">
          <div className="col-7 my-3">
            {orderData.productboxandsleeveType == "both_img" && (
              <>
                <span className="text-danger m-0 p-0">
                  {formError?.boxphoto}
                </span>
                <br />
                <label>Upload your frontside photo *</label>
                <input
                  className="form-control form-control-sm my-2"
                  type="file"
                  onChange={(e) => {
                    disapatch(
                      addFrontBoxphoto({ boxphoto: e.target.files[0] })
                    );
                    disapatch(fcm({ key: "boxphoto", error: false }));
                    // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
                  }}
                />
                <br />
                <label>Upload your frontside photo *</label>
                <input
                  className="form-control form-control-sm my-2"
                  type="file"
                  onChange={(e) => {
                    disapatch(addBackBoxphoto({ boxphoto: e.target.files[0] }));
                    // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
                  }}
                />
              </>
            )}
            {orderData.productboxandsleeveType == "img_option_colors" && (
              <>
                <span className="text-danger m-0 p-0">
                  {formError?.boxphoto}
                </span>
                <br />
                <label>Upload your backside photo *</label>
                <input
                  className="form-control form-control-sm my-2"
                  type="file"
                  onChange={(e) => {
                    disapatch(
                      addFrontBoxphoto({ boxphoto: e.target.files[0] })
                    );
                    disapatch(fcm({ key: "boxphoto", error: false }));
                    // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
                  }}
                />
              </>
            )}
          </div>

          {orderData.productboxandsleeveType != "both_img" && (
            <>
              <div className="col-12 my-3">
                <span className="text-danger m-0 p-0">
                  {formError?.product_box_option}
                </span>
                <br />
                {productboxandsleeveoptions.length !== 0 && (
                  <>
                    <>
                      <h6>Select box or sleeve material</h6>
                    </>
                    <div className="row">
                      {productboxandsleeveoptions.map((data) => (
                        <>
                          <div className="col-2">
                            <div
                              onClick={() => {
                                disapatch(
                                  selectBoxSleeveOption({ boxSleev: data })
                                );
                                disapatch(
                                  fcm({
                                    key: "product_box_option",
                                    error: false,
                                  })
                                );
                              }}
                            >
                              <img
                                src={data.img}
                                style={{ width: 120 }}
                                className={`pro ${
                                  orderData.productboxandsleeveoption ==
                                    data.id && "selected_prod_cover_option"
                                }`}
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div className="my-2">{data.name}</div>
                          </div>
                        </>
                      )) || (
                        <>
                          <h1>Select Size</h1>
                        </>
                      )}
                    </div>
                  </>
                )}
                {productboxandsleeveoptioncolor.length !== 0 && (
                  <>
                    <span className="text-danger m-0 p-0">
                      {formError?.product_box_color_option}
                    </span>
                    <br />
                    <>
                      <h6>Select material color</h6>
                    </>
                    <div className="row">
                      {productboxandsleeveoptioncolor.map((data) => {
                        //console.log("color")
                        console.log(data.colors);
                        return (
                          <>
                            <div className="col-2">
                              <div
                                onClick={() => {
                                  disapatch(changeBoxColor({ color: data }));
                                  disapatch(
                                    fcm({
                                      key: "product_box_color_option",
                                      error: false,
                                    })
                                  );
                                }}
                              >
                                <img
                                  src={data.colors.img}
                                  style={{
                                    width: 120,
                                    height: 120,
                                    backgroundColor: data.colorcode,
                                  }}
                                  className={`pro ${
                                    orderData.productboxandsleevecolor ==
                                      data.colors.id &&
                                    "selected_prod_cover_option"
                                  }`}
                                  alt=""
                                  srcset=""
                                />
                              </div>
                              <div className="my-2">{data.colors.color}</div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Button
        next={() => {
          if (!orderData.productboxSleev) {
            disapatch(
              fcm({
                key: "product_boxSleev",
                error: "Select one option ",
              })
            );
            return;
          }
          if (
            orderData.productboxandsleeveType == "both_img" ||
            orderData.productboxandsleeveType == "img_option_colors"
          ) {
            if (!orderData.boxphotofront) {
              disapatch(
                fcm({ key: "boxphoto", error: "Please upload a file" })
              );
              return;
            }
          }

          if (orderData.productboxandsleeveType != "both_img") {
            if (!orderData.productboxandsleeveoption) {
              disapatch(
                fcm({
                  key: "product_box_option",
                  error: "Select one option ",
                })
              );
              return;
            }
            if (!orderData.productboxandsleevecolor) {
              disapatch(
                fcm({
                  key: "product_box_color_option",
                  error: "Select one option ",
                })
              );
              return;
            }
          }
          disapatch(formNext(productFormStep.event));
        }}
        back={() => {
          disapatch(formNext(productFormStep.cover));
        }}
      />
    </>
  );
}

export default ProductBox;
