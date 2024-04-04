import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCover,
  changeColor,
  formError as fcm,
  formNext,
  selectCoverOption,
  addFrontCoverphoto,
  addBackCoverphoto,
} from "@/Redux/Slice/orderSlice";
import { zonePrice } from "@/utils";
import { localstorageKey } from "@/constants";
function ProductCover() {
  const {
    productcover,
    orderData,
    productcoveroption,
    formError,
    productcolor,
  } = useSelector((state) => state.order);
  const disapatch = useDispatch();
  //console.log(productcover);
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <span className="text-danger">{formError?.product_cover}</span>
          <>
            <h6>Select your album cover</h6>
          </>
          <div className="row">
            {productcover.map((datas) => {
              console.log(datas);
              return (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    className={`size card my-2 pro ${
                      orderData.productcover == datas.cover.id &&
                      "selected_prod_size"
                    }`}
                    onClick={() => disapatch(changeCover({ cover: datas }))}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={datas.cover.img}
                        style={{ height: 70, width: 70, padding: "5px" }}
                        alt=""
                        srcset=""
                      />
                      <div>
                        {datas.cover.name}
                        <div>{zonePrice(datas.coverprice).priceSrring}</div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {orderData.coverType == "both_img" && (
          <>
            <span className="text-danger m-0 p-0">{formError?.coverphoto}</span>
            <br />
            <label>Upload your front cover photo *</label>
            <input
              className="form-control form-control-sm my-2"
              type="file"
              onChange={(e) => {
                disapatch(
                  addFrontCoverphoto({ coverphoto: e.target.files[0] })
                );
                disapatch(fcm({ key: "coverphoto", error: false }));
                // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
              }}
            />
            <br />
            <label>Upload your back cover photo ( optional )</label>
            <input
              className="form-control form-control-sm my-2"
              type="file"
              onChange={(e) => {
                disapatch(addBackCoverphoto({ coverphoto: e.target.files[0] }));
                // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
              }}
            />
          </>
        )}
        <div className="col-7 my-3">
          {orderData.coverType == "img_option_colors" && (
            <>
              <span className="text-danger m-0 p-0">
                {formError?.coverphoto}
              </span>
              <br />
              <label>Upload your frontside photo *</label>
              <input
                className="form-control form-control-sm my-2"
                type="file"
                onChange={(e) => {
                  disapatch(
                    addFrontCoverphoto({ coverphoto: e.target.files[0] })
                  );
                  disapatch(fcm({ key: "coverphoto", error: false }));
                  // localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
                }}
              />
            </>
          )}
        </div>
        <div className="col-12 my-3">
          {productcoveroption.length !== 0 && (
            <>
              <span className="text-danger m-0 p-0">
                {formError?.product_cover_option}
              </span>
              <>
                <h6>Select options</h6>
              </>
              <div className="row">
                {productcoveroption.map((data) => {
                  console.log(data);
                  return (
                    <>
                      <div className="col-2">
                        <div
                          onClick={() => {
                            disapatch(selectCoverOption({ coveroption: data }));
                            disapatch(
                              fcm({ key: "product_cover_option", error: false })
                            );
                          }}
                        >
                          <img
                            src={data.img}
                            style={{ width: 120 }}
                            className={`pro ${
                              orderData.productcoveroption == data.id &&
                              "selected_prod_cover_option"
                            }`}
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div className="my-2">{data.name}</div>
                      </div>
                    </>
                  );
                }) || (
                  <>
                    <h1>Select Size</h1>
                  </>
                )}
              </div>
            </>
          )}
          {productcolor.length !== 0 && (
            <>
              <span className="text-danger m-0 p-0">
                {formError?.product_cover_color_option}
              </span>
              <>
                <h6>Select color options</h6>
              </>
              <div className="row">
                {productcolor.map((data) => {
                  //console.log("color")
                  console.log(data);
                  return (
                    <>
                      <div className="col-2">
                        <div
                          onClick={() => {
                            disapatch(changeColor({ color: data }));
                            disapatch(
                              fcm({
                                key: "product_cover_color_option",
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
                              orderData.productcovercolor == data.id &&
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
      </div>
      <Button
        next={() => {
          if (!orderData.productcover) {
            disapatch(
              fcm({ key: "product_cover", error: "Select minimum one option" })
            );
            return;
          }
          if (
            orderData.coverType === "both_img" ||
            orderData.coverType === "img_option_colors"
          ) {
            if (!orderData.coverphotofront) {
              disapatch(
                fcm({ key: "coverphoto", error: "Please upload a file" })
              );
              return;
            }
          }
          if (orderData.coverType !== "both_img") {
            if (!orderData.productcoveroption) {
              disapatch(
                fcm({
                  key: "product_cover_option",
                  error: "Select minimum one option",
                })
              );
              return;
            }
            if (!orderData.productcovercolor) {
              disapatch(
                fcm({
                  key: "product_cover_color_option",
                  error: "Select minimum one option",
                })
              );
              return;
            }
          }
          disapatch(formNext());
        }}
      />
    </>
  );
}

export default ProductCover;
