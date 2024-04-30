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
  formNext,
} from "@/Redux/Slice/orderSlice";
import { appRoutes, productFormStep } from "@/constants";
import { zonePrice } from "@/utils";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

function EventDetailForm() {
  const router = useRouter();
  const [error, setError] = useState({
    eventType: "",
    eventDate: "",
    eventName: "",
    costumizeMessage: "",
    printing: "",
    fontType: "",
  });
  const {
    product,
    orderData,
    orderData: { orderDetaild, product_id },
  } = useSelector((state) => state.order);
  const { users } = useSelector((state) => state.user);
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
    if (!orderDetaild?.fontType) {
      newError.fontType = "Please select Font Option";
    }

    // Check if there are any errors
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return 0; // Validation failed
    }

    router.replace(appRoutes?.checkout);
    // Continue with the next step
  };

  console.log(users);
  console.log(
    users?.sample_orders?.find((data) => data.products_id === product_id)
  );

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
                <option value="Pre-Wedding">Pre-Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Birthdav">Birthdav</option>
                <option value="Sweet 16">Sweet 16</option>
                <option value="Bar Mitzvah">Bar Mitzvah</option>
                <option value="Bat Mitzvah">Bat Mitzvah</option>
                <option value="Puberty Ceremony">Puberty Ceremony</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Guestbook">Guestbook</option>
                <option value="others">Others</option>
              </select>
              <span className="text-danger">{error?.eventType}</span>
            </div>
          </div>
          {orderDetaild.eventType === "others" && (
            <div className="col-6 my-2">
              <div className="form-group">
                <label htmlFor="">Others Event Type</label>
                <input
                  value={orderDetaild.otherEvent}
                  onChange={(e) =>
                    dispatch(
                      changeOrderDetaildData({
                        key: "otherEvent",
                        value: e.target.value,
                      })
                    )
                  }
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Ex. Corporate Event"
                />
              </div>
            </div>
          )}

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
            <label htmlFor="">Custom messages to print on cover</label>
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
          <div className="col-6 my-2">
            <div className="form-group">
              <label htmlFor="">Font Type</label>
              <select
                className="form-control"
                value={orderDetaild?.fontType}
                onChange={(e) =>
                  dispatch(
                    changeOrderDetaildData({
                      key: "fontType",
                      value: e.target.value,
                    })
                  )
                }
                name=""
                id=""
              >
                <option>Select Font</option>
                <option value="Barkentina script">Barkentina script</option>
                <option value="Cinzel">Cinzel</option>
                <option value="Bickhem script">Bickhem script</option>
                <option value="Scriptina">Scriptina</option>
                <option value="Snell roundhed">Snell roundhed</option>
              </select>
              <span className="text-danger">{error?.fontType}</span>
            </div>
          </div>
          {/* <div className="col-4 my-2">
            <div className="form-group">
              <label htmlFor="">Imprinting</label>
            </div>
            check box
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
          </div> */}
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
      <div className="card my-2 p-3">
        <div className="row">
          {!users?.sample_orders?.find(
            (data) => data.products_id === product_id
          ) && (
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
          )}

          <div className="col-6">
            <h6 className="mt-2">Pocketbooks</h6>
            <div className="mb-4">
              <div className="col-12 my-2">
                <Tooltip
                  title=" Pocketbooks will be exact replica of the main album design with hardbound cover"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                >
                  <div
                    className="pro mt-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
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
                    Click to order a pocketbook {}
                  </div>
                </Tooltip>
              </div>
              <div className="col-12">
                {orderData.isPhotoBookCopy && (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor=""> Number of copies</label>
                          <input
                            type="number"
                            value={orderData.photoBookCopy}
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
                        <label htmlFor="">Price</label>
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
                          {users && users?.zone?.currency_sign}{" "}
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
      <Button
        next={next}
        back={() => {
          if (product.boxandsleeve) {
            dispatch(formNext(productFormStep.boxsleeve));
          } else {
            dispatch(formNext(productFormStep.cover));
          }
        }}
      />
    </>
  );
}

export default EventDetailForm;

/*
isPhotoBookCopy
photoBookCopy
*/
