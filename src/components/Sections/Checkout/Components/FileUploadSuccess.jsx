import React,{useState} from 'react'
import Link from "next/link";
import { apiRoutes, appRoutes, } from "@/constants";
import success from "@/assets/img/success.json";
import dynamic from "next/dynamic";
import zipfile from "@/assets/img/zipfile.json";
import link from "@/assets/img/link.json";
import { LinearProgress, Typography , Box } from "@mui/material";
import AWS from "aws-sdk";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((module) => module.Player),
    { ssr: false }
);


function FileUploadSuccess({ orderId }) {
    const [persent, setPersent] = useState(0);
    const [file, setFile] = useState(null);
    const [fileUploadStatus, setFileUploadStatus] = useState(false);
    const [fileerror, setError] = useState(false);
    const [zipFileError, setZipFileError] = useState(false);

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

            // const 

            if (file?.zip?.type == "application/x-zip-compressed") {
                const s3 = new AWS.S3({
                    accessKeyId: process.env.NEXT_PUBLIC_AWS_CLIENT_ID,
                    secretAccessKey: process.env.NEXT_PUBLIC_AWS_KEY,
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
                                                        msg: "Your file is successfully received, pls contact us if you have any queries regarding your order",
                                                    });
                                                    setFileUploadStatus({
                                                        status: true,
                                                        class: "success",
                                                        msg: "Your file is successfully received, pls contact us if you have any queries regarding your order",
                                                    });
                                                })
                                                .catch((e) => {
                                                    console.log(e);
                                                    setFileUploadStatus({
                                                        status: true,
                                                        class: "danger",
                                                        msg: "Files Is not Uploaded , pls contact us if you have any queries regarding your order",
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
                        msg: "File Upload Failed, pls contact us if you have any queries regarding your order",
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
                        msg: "Your file is successfully received, pls contact us if you have any queries regarding your order",
                    });
                })
                .catch((e) => {
                    console.log(e);
                    setFileUploadStatus({
                        status: true,
                        class: "danger",
                        msg: "Url Failed, pls contact us if you have any queries regarding your order",
                    });
                });
        }
    };

    return (
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
                                                                    Upload Zip
                                                                </h4>
                                                                <p class="card-text">
                                                                    Please upload your photos
                                                                    compressed in zip file format and
                                                                    submit here.
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
                                                                    Drive Link
                                                                </h4>
                                                                <p class="card-text">
                                                                    Please submit the link to your
                                                                    Drive, or storage service that
                                                                    contains your album photos.
                                                                </p>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">
                                                                            Enter Link
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
    )
}

export default FileUploadSuccess
