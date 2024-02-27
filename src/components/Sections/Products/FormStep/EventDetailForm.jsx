"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addOrderDetail,
  changeOrderDetaildData,
  addphotoszip,
  changeOrderData,
} from "@/Redux/Slice/orderSlice";
import { appRoutes } from "@/constants";
import { zonePrice } from "@/utils";
function EventDetailForm() {
  const router = useRouter();
  const [error, setError] = useState({
    eventType: "",
    eventDate: "",
    eventName: "",
    costumizeMessage: "",
    printing: "",
  });
  const {
    orderData,
    orderData: { orderDetaild },
  } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const next = () => {
    const newError = {};

    if (!orderDetaild?.eventType) {
      newError.eventType = "Please select Event Type";
    }
    if (!orderDetaild?.eventDate) {
      newError.eventDate = "Please select Event Date";
    }
    if (!orderDetaild?.eventName) {
      newError.eventName = "Please select Event Name";
    }
    if (!orderDetaild?.costumizeMessage) {
      newError.costumizeMessage = "Please select Customize Message";
    }
    if (!orderDetaild?.printing) {
      newError.printing = "Please select Printing Option";
    }

    // Check if there are any errors
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return 0; // Validation failed
    }

    router.replace(appRoutes?.checkout);
    // Continue with the next step
  };

  return (
    <>
      <div className="col-12">
        <div className="row">
          <div className="col-6 my-2">
            <div className="form-group">
              <label htmlFor="">Event Type</label>
              <select
                className="form-control"
                value={orderDetaild.eventType}
                onChange={(e) =>
                  dispatch(
                    changeOrderDetaildData({
                      key: "eventType",
                      value: e.target.value,
                    })
                  )
                }
                name=""
                id=""
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="pre-Wedding">pre-Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Sweet 16">Sweet 16</option>
                <option value="Bar Mitzvah">Bar Mitzvah</option>
                <option value="Bat Mitzvah">Bat Mitzvah</option>
                <option value="Puberty Ceremony">Puberty Ceremony</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Guestbook">Guestbook</option>
              </select>
              <span className="text-danger">{error?.eventType}</span>
            </div>
          </div>
          <div className="col-6 my-2">
            <div className="form-group">
              <label htmlFor="">Event Date</label>
              <input
                type="date"
                value={orderDetaild.eventDate}
                onChange={(e) =>
                  dispatch(
                    changeOrderDetaildData({
                      key: "eventDate",
                      value: e.target.value,
                    })
                  )
                }
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <span className="text-danger">{error?.eventDate}</span>
            </div>
          </div>
          <div className="col-6 my-2">
            <div className="form-group">
              <label htmlFor="">Event Name</label>
              <input
                type="text"
                value={orderDetaild.eventName}
                onChange={(e) =>
                  dispatch(
                    changeOrderDetaildData({
                      key: "eventName",
                      value: e.target.value,
                    })
                  )
                }
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <span className="text-danger">{error?.eventName}</span>
            </div>
          </div>
          <div className="col-6 my-2">
            <label htmlFor="">Custom Message</label>
            <input
              type="text"
              value={orderDetaild.costumizeMessage}
              onChange={(e) =>
                dispatch(
                  changeOrderDetaildData({
                    key: "costumizeMessage",
                    value: e.target.value,
                  })
                )
              }
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
            <span className="text-danger">{error?.costumizeMessage}</span>
          </div>
          <div className="col-4 my-2">
            <div className="form-group">
              <label htmlFor="">Imprinting</label>
            </div>
            {/* check box */}
            <div
              className="pro my-3"
              onClick={() =>
                dispatch(
                  changeOrderDetaildData({
                    key: "printing",
                    value: "Laser Imprinting",
                  })
                )
              }
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                borderRadius: 5,
                border: "2px solid #8ccec6",
                color: "#ffffff",
                backgroundColor:
                  orderDetaild.printing == "Laser Imprinting" && "#8ccec6",
              }}
            >
              Laser Imprinting
            </div>
          </div>
          {/* <div className="col-4  my-2">
                        <div className="form-group">
                            <label htmlFor=""></label>
                        </div>
                        <div className='pro my-3' onClick={() => dispatch(changeOrderDetaildData({ key: 'printing', value: "Foil Imprinting" }))} style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            borderRadius: 5,
                            border: "2px solid #8ccec6",
                            backgroundColor: (orderDetaild.printing == "Foil Imprinting") && '#8ccec6'
                        }} >
                            Foil Imprinting
                        </div>
                    </div> */}
          <span className="text-danger">{error?.printing}</span>
        </div>
      </div>
      {/* <hr /> */}
      {/* <h6 className='mt-2' >Upload Your Photos</h6>
            <div className="row mb-4">
                <div className="col-6 my-2">
                    <div className="form-group">
                        <label htmlFor="">Source Type</label>
                        <select className="form-control" value={orderDetaild?.sourceType} onChange={(e) => dispatch(changeOrderDetaildData({ key: 'sourceType', value: e.target.value }))} name="" id="">
                            <option value="">Select Source Type</option>
                            <option value="Zip File">Zip File</option>
                            <option value="Third Party">Drive Link / Third Party</option>
                        </select>
                    </div>
                </div>
                {orderDetaild?.sourceType &&
                    <>
                        {orderDetaild?.sourceType == "Zip File" ? (
                            <div className="col-6 my-2">
                                <div className="form-group">
                                    <label htmlFor="">Source Type</label>
                                    <input type="file" onChange={(e) => dispatch(addphotoszip({ photoszip: e.target.files[0] }))} className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                </div>
                            </div>
                        ) : (
                            <div className="col-6 my-2">
                                <div className="form-group">
                                    <label htmlFor="">Enter Url</label>
                                    <input type="text" value={orderDetaild.url} onChange={(e) => dispatch(changeOrderDetaildData({ key: 'url', value: e.target.value }))} className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                </div>
                            </div>
                        )
                        }
                    </>}
            </div> */}

      <div className="card my-2 p-3">
        <div className="row">
          <div className="col-6">
            <h6 className="mt-2">Get a sample copy only</h6>
            <div className="mb-4">
              <div className="col-12 my-2">
                <div
                  className="pro"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    borderRadius: 5,
                    border: "2px solid #8ccec6",
                    backgroundColor: orderData.isSample == true && "#8ccec6",
                    color: orderData.isSample == true && "#ffffff",
                  }}
                  onClick={() =>
                    dispatch(
                      changeOrderData({
                        key: "isSample",
                        value: !orderData.isSample,
                      })
                    )
                  }
                >
                  Click to order sample copy
                </div>
              </div>
              {orderData.isSample == true && (
                <>
                  <span className="text-danger">
                    Note : By selecting this option you will only receive a
                    sample copy for this order
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="col-6">
            <h6 className="mt-2">Order pocket book copies</h6>
            <div className="mb-4">
              <div className="col-12 my-2">
                <div
                  className="pro mt-3"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    borderRadius: 5,
                    border: "2px solid #8ccec6",
                    backgroundColor:
                      orderData.isPhotoBookCopy == true && "#8ccec6",
                    color: orderData.isPhotoBookCopy == true && "#ffffff",
                  }}
                  onClick={() =>
                    dispatch(
                      changeOrderData({
                        key: "isPhotoBookCopy",
                        value: !orderData.isPhotoBookCopy,
                      })
                    )
                  }
                >
                  Click to order a pocket book copies {}
                </div>
              </div>
              <div className="col-12">
                {orderData.isPhotoBookCopy && (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="">Number Of Copy</label>
                          <input
                            type="number"
                            value={orderDetaild.photoBookCopy}
                            onChange={(e) =>
                              dispatch(
                                changeOrderData({
                                  key: "photoBookCopy",
                                  value: e.target.value,
                                })
                              )
                            }
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-6">
                      <label htmlFor="">Amount</label>
                        <div
                          className="pro"
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 50,
                            borderRadius: 5,
                            border: "2px solid #8ccec6",
                            backgroundColor: "#8ccec6",
                            color: "#ffffff",
                          }}
                        >
                          {user.zone.currency_sign}{" "}
                          {orderData.photoBookCopyPrice *
                            orderData.photoBookCopy || 0}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button next={next} />
    </>
  );
}

export default EventDetailForm;

/*
isPhotoBookCopy
photoBookCopy
*/
