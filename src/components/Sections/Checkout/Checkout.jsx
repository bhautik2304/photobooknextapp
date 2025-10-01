"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { apiRoutes, appAxios } from "@/constants";
import { clearCart } from "@/Redux/Slice/orderSlice";
import processing from "@/assets/img/processing.json";
import { getAwsKey } from "@/utils"
// import Image from "next/Image";
import CheckoutShippingAddress from './Components/CheckoutShippingAddress';
import CheckoutOrderSummry from './Components/CheckoutOrderSummry';
import FileUploadSuccess from './Components/FileUploadSuccess';

const status = {
    proceed: "Proceed to order",
    placeOrder: "Place an order",
    processingOrder: "Order Processed",
    successOrder: "Order Processed Successfully",
};

function Checkout() {
    const [chackOutStatus, setChackOutStatus] = useState(status.proceed);
    const [orderId, setOrderId] = useState(null);

    const dispatch = useDispatch();

    const { auth: { user }, order: { orderData } } = useSelector((state) => state);

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

    const awsKey = async () => {
        const { AWS_ID, AWS_Secret } = await getAwsKey()
        console.log({ AWS_ID, AWS_Secret })
    }

    useEffect(() => {
awsKey()
    }, [])

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
                                    <CheckoutShippingAddress setChackOutStatus={setChackOutStatus} />
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
                                    <CheckoutOrderSummry
                                        submitOrder={submitOrder}
                                        setChackOutStatus={setChackOutStatus}
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
                                    <FileUploadSuccess orderId={orderId} />
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