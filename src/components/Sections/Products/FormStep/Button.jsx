"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formBack } from "@/Redux/Slice/orderSlice";
import { appRoutes, productFormStep } from "@/constants";

function Button({ next, back }) {
  return (
    <>
      <div className="container my-2">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div>
            <BackBtn back={back} />
            <NextBtn next={next} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;

function BackBtn({ back }) {
  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (!(order.formStep == productFormStep.product)) {
    return (
      <>
        <button
          className="mx-2 btn btn-dark btn-sm"
          style={{
            cursor: "pointer",
            backgroundColor: "#222221",
            width: "120px",
          }}
          onClick={() => back()}
        >
          Previous
        </button>
      </>
    );
  }
}
function NextBtn({ next }) {
  const { order } = useSelector((state) => state);
  if (!(order.formStep == productFormStep.event)) {
    return (
      <>
        <button
          className="mx-2 btn btn-dark btn-sm"
          style={{
            cursor: "pointer",
            backgroundColor: "#222221",
            width: "120px",
          }}
          onClick={() => next()}
        >
          Next
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className="mx-2 btn btn-primary btn-sm"
          style={{ cursor: "pointer", width: "120px" }}
          onClick={() => next()}
        >
          Next
        </button>
      </>
    );
  }
}
