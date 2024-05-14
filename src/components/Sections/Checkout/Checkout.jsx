"use client";
import React, { useState } from "react";
import CheckOutItem from "./CheckOutItem";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import success from "@/assets/img/success.json";
import zipfile from "@/assets/img/zipfile.json";
import link from "@/assets/img/link.json";
import processing from "@/assets/img/success.json";
import emputycart from "@/assets/img/emputycart.json";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { apiRoutes, appRoutes, appAxios } from "@/constants";
import { clearCart } from "@/Redux/Slice/orderSlice";
import AWS from "aws-sdk";
import { redirect, useRouter } from "next/navigation";
import { fetchUsers } from "@/Redux/Slice/userSlice";
// import Image from "next/Image";

const status = {
  proceed: "Proceed to order",
  placeOrder: "Place an order",
  processingOrder: "Order Processed",
  successOrder: "Order Processed Successfully",
};

function Checkout() {
  const [chackOutStatus, setChackOutStatus] = useState(status.proceed);
  const [orderId, setOrderId] = useState(null);
  const [persent, setPersent] = useState(0);
  const [buffer, setBuffer] = useState(3);
  const [another, setAnother] = useState(false);
  const [downloadLink, setDownload] = useState("");
  const [sourceType, setSourceType] = useState(null);
  const [file, setFile] = useState(null);
  const [fileUploadStatus, setFileUploadStatus] = useState(false);
  const [fileerror, setError] = useState(false);
  const [zipFileError, setZipFileError] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    auth: { user },
    order,
    order: {
      orderData,
      orderData: { orderDetaild },
    },
  } = useSelector((state) => state);

  // useEffect(() => {
  //   // dispatch(setPrintingTotale());
  //   dispatch(setTotale());
  // }, [
  //   orderData.page_qty,
  //   orderData.sheetValue,
  //   orderData.paperValue,
  //   orderData.coverValue,
  //   orderData.boxSleeveValue,
  //   orderData.orderTotale,
  //   orderData.photoBookCopy,
  //   orderData.album_qty,
  // ]);

  const submitOrder = () => {
    setChackOutStatus(status.processingOrder);

    const formData = new FormData();
    formData.append(
      "orderData",
      JSON.stringify({ ...orderData, user: user, zone: user.zone })
    );
    formData.append("boxsleevefrontimg", orderData.coverphotofront);
    formData.append("boxsleevebackimg", orderData.coverphotoback);
    formData.append("coverfrontphoto", orderData.boxphotofront);
    formData.append("coverbackphoto", orderData.boxphotoback);
    // formData.append("photoszip", orderData.photoszip);

    appAxios
      .post(apiRoutes.orders, formData)
      .then((res) => {
        setOrderId(res.data.order_id);
        setChackOutStatus(status.successOrder);
        dispatch(clearCart());
      })
      .catch((error) => {
        setChackOutStatus(status.placeOrder);
        console.error("Error uploading file:", error);
      });
  };

  const controller = new AbortController();

  // const CancelToken = appAxios.CancelToken;
  // const source = CancelToken.source();

  const fileUplode = async (type) => {
    setPersent(2);
    const error = {};

    if (type == "file") {
      if (file?.zip == null) {
        error.file = "Required *";
      }

      // Check if there are any errors
      if (Object.keys(error).length > 0) {
        setError(error);
        setPersent(0);
        return 0; // Validation failed
      }
      if (file.type == "application/x-zip-compressed") {
        const s3 = new AWS.S3({
          accessKeyId: "",
          secretAccessKey: "",
          region: "ap-south-1",
        });

        const params = {
          Bucket: "photokrafft",
          Key: `ORD-${orderId}.zip`,
          Body: file?.zip,
        };

        try {
          s3.upload(params)
            .on("httpUploadProgress", (progress) => {
              const percentage = Math.round(
                (progress.loaded / progress.total) * 100
              );
              if (percentage < 98) {
                setPersent(percentage);
              }
            })
            .send((err, data) => {
              if (err) {
                console.log("Error uploading file");
                console.error(err);
                console.log("Error uploading file");
                setPersent(0);
              } else {
                console.log("File uploaded successfully");
                console.log("Upload successful", data);
                console.log("File uploaded successfully");
                // Get downloadable URL
                s3.getSignedUrl(
                  "getObject",
                  { Bucket: "photokrafft", Key: `ORD-${orderId}.zip` },
                  (err, url) => {
                    if (err) {
                      console.error(err);
                      // alert("Error getting downloadable URL");
                    } else {
                      console.log(url);
                      appAxios
                        .post(apiRoutes.uploadfile, {
                          orderNo: orderId,
                          source_link: url,
                          Expires: 31536000,
                        })
                        .then((e) => {
                          setPersent(100);
                          setFileUploadStatus({
                            status: true,
                            class: "success",
                            msg: "Your file is successfully received, pls contact us if you have any queries regarding you order",
                          });
                          setFileUploadStatus({
                            status: true,
                            class: "success",
                            msg: "Your file is successfully received, pls contact us if you have any queries regarding you order",
                          });
                        })
                        .catch((e) => {
                          console.log(e);
                          setFileUploadStatus({
                            status: true,
                            class: "danger",
                            msg: "Files Is not Uploaded , pls contact us if you have any queries regarding you order",
                          });
                        });
                    }
                  }
                );
                // setSelectedFile(null);
                // setUploadProgress(0);
              }
            });
        } catch (error) {
          setFileUploadStatus({
            status: true,
            class: "danger",
            msg: "File Upload Failed, pls contact us if you have any queries regarding you order",
          });
        }
      } else {
        error.fileType = "Only zip files*";
        setPersent(0);
        setError(error);
        return 0;
      }
    } else {
      if (file?.url == null) {
        error.url = "Required *";
      }

      // Check if there are any errors
      if (Object.keys(error).length > 0) {
        setError(error);
        setPersent(0);
        return 0; // Validation failed
      }
      appAxios
        .post(apiRoutes.uploadfile, {
          orderNo: orderId,
          source_link: file?.url,
        })
        .then((e) => {
          setPersent(100);
          setFileUploadStatus({
            status: true,
            class: "success",
            msg: "Your file is successfully received, pls contact us if you have any queries regarding you order",
          });
        })
        .catch((e) => {
          console.log(e);
          setFileUploadStatus({
            status: true,
            class: "danger",
            msg: "Url Failed, pls contact us if you have any queries regarding you order",
          });
        });
    }
  };
  const cancelFileUpload = () => {
    console.log("Before aborting");
    source.cancel("Operation canceled by the user.");
    controller.abort();
    console.log("After aborting");
  };
  return (
    <>
      <main
        className="page-wrapper"
        style={{
          backgroundColor: "#e5e5e5",
          //   backgroundImage: "linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)",
        }}
      >
        {/* <!-- Page content--> */}
        {/* <div className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width:"52.5%" }}></div> */}
        <div className="container position-relative zindex-2 pt-0 pb-lg-5 pb-md-4 pb-2">
          <div className="row">
            <div className="col-lg-12 mt-5 card p-5">
              {chackOutStatus == status.proceed && (
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
              )}
              {chackOutStatus == status.placeOrder && (
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  ></div>
                  <CheckOutItem
                    submitOrder={submitOrder}
                    back={() => setChackOutStatus(status.proceed)}
                  />
                </>
              )}
              {chackOutStatus == status.processingOrder && (
                <>
                  <Player
                    autoplay
                    loop
                    src={processing}
                    style={{ height: "300px", width: "300px" }}
                  ></Player>
                </>
              )}
              {chackOutStatus == status.successOrder && (
                <>
                  <div className="col-lg-12 bg-white p-5 d-flex justify-content-center aligns-item-center">
                    <div className="col-8">
                      <center>
                        <Player
                          autoplay
                          speed={0}
                          loop
                          src={success}
                          style={{ height: "250px", width: "250px" }}
                        ></Player>
                      </center>
                      <center>
                        <h5 className="text-primary">
                          We Received Your Order Successfully
                        </h5>
                      </center>
                      {fileUploadStatus?.status ? (
                        <>
                          <div
                            class={`alert alert-${fileUploadStatus?.class}`}
                            role="alert"
                          >
                            {fileUploadStatus?.msg}
                          </div>
                          <Link
                            className="btn btn-primary w-100"
                            href={appRoutes.userProfileOrders}
                          >
                            Go To Orders
                          </Link>
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
                                    if something went wrong please{" "}
                                    <Link
                                      href={`https://wa.me/+919081770314?text=please%20help%20me%20with%20my%20order%20number%20:%20${orderId}%20,%20something%20went%20wrong%20while%20uploading%20my%20photos`}
                                      className="link text-primary"
                                    >
                                      contact us
                                    </Link>
                                    .
                                  </h6>
                                  {/* <LinearProgress
                                    variant="determinate"
                                    value={persent}
                                  /> */}
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <center>
                            <h6 className="mt-2">Upload Your Photos</h6>
                          </center>
                          <div class="bg-secondary rounded-1 p-4 my-2">
                            <center>
                              {/* <img
                                src="https://basira.in/assets/sharde link.jpg"
                                style={{ width: "400px" }}
                              /> */}
                            </center>
                            <p class="my-2 p-3">
                              Please select one of the source options to upload
                              your photos which needs to be print in your order.
                              If something went wrong please contact us.
                              {/* If something went wrong please contact us, also you can check your orders in your profile section */}
                            </p>

                            <div className="row mb-4 p-3">
                              {persent != 0 ? (
                                <>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Box sx={{ width: "100%" }}>
                                      <LinearProgress
                                        variant="buffer"
                                        valueBuffer={buffer}
                                        sx={{
                                          // height: 8,
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
                                  <div className="col-12">
                                    <div className="row ">
                                      <div className="col-6">
                                        <div class="card">
                                          {/* <img
                                            src="assets/img/blog/grid/01.jpg"
                                            class="card-img-top"
                                            alt="Card image"
                                          /> */}
                                          <Player
                                            autoplay
                                            speed={0}
                                            loop
                                            src={zipfile}
                                            style={{
                                              width: "200px",
                                              height: "135px",
                                            }}
                                          ></Player>
                                          <div class="card-body">
                                            <h4 class="card-title">
                                              Upload zip
                                            </h4>
                                            <p class="card-text">
                                              Please upload your photos
                                              compressed in zip file format and
                                              submit here
                                            </p>
                                            <div className="col-12 my-2">
                                              {zipFileError && (
                                                <span className="text-danger">
                                                  {zipFileError}
                                                </span>
                                              )}
                                              <div className="form-group">
                                                <label>Source Type</label>
                                                <input
                                                  type="file"
                                                  accept=".zip"
                                                  onChange={(e) =>
                                                    setFile({
                                                      zip: e.target.files[0],
                                                    })
                                                  }
                                                  className="form-control"
                                                  name=""
                                                  id=""
                                                  aria-describedby="helpId"
                                                  placeholder=""
                                                />
                                              </div>
                                              <span className="text-danger">
                                                {fileerror?.file}
                                                {fileerror?.fileType}
                                              </span>
                                            </div>
                                            {persent === 0 && (
                                              <>
                                                <button
                                                  className="btn btn-primary col-12 my-3 pro"
                                                  onClick={() =>
                                                    fileUplode("file")
                                                  }
                                                >
                                                  Submit
                                                </button>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <div class="card">
                                          {/* <img
                                            src="assets/img/blog/grid/01.jpg"
                                            class="card-img-top"
                                            alt="Card image"
                                          /> */}
                                          <Player
                                            autoplay
                                            speed={0}
                                            loop
                                            src={link}
                                            style={{
                                              width: "200px",
                                              height: "135px",
                                            }}
                                          ></Player>
                                          <div class="card-body">
                                            <h4 class="card-title">
                                              Drive Url
                                            </h4>
                                            <p class="card-text">
                                              Please upload your photos
                                              compressed in zip file format and
                                              submit here
                                            </p>
                                            <div className="col-12 my-2">
                                              <div className="form-group">
                                                <label htmlFor="">
                                                  Enter Url
                                                </label>
                                                <input
                                                  type="text"
                                                  value={file?.url}
                                                  onChange={(e) =>
                                                    setFile({
                                                      url: e.target.value,
                                                    })
                                                  }
                                                  className="form-control"
                                                  name=""
                                                  id=""
                                                  aria-describedby="helpId"
                                                  placeholder=""
                                                />
                                              </div>
                                              <span className="text-danger">
                                                {fileerror?.url}
                                              </span>
                                            </div>
                                            {persent === 0 && (
                                              <>
                                                <button
                                                  className="btn btn-primary col-12 my-3 pro"
                                                  onClick={() => fileUplode("")}
                                                >
                                                  Submit
                                                </button>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* {sourceType && (
                                    <>
                                      {sourceType == "Zip File" ? (
                                        
                                      ) : (
                                        
                                      )}
                                    </>
                                  )} */}
                                </>
                              )}
                              {/* <center>{`uploading file : ${persent} %`}</center> */}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <Successmodel /> */}
    </>
  );
}
export default Checkout;
