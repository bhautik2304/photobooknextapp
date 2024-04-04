import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeOrientation,
  formNext,
  formError,
} from "@/Redux/Slice/orderSlice";

function ProductOrientation() {
  const { order } = useSelector((state) => state);

  const disapatch = useDispatch();

  // nsole.log(order?.product?.orientation);

  return (
    <>
      <span className="text-danger">
        {order.formError?.product_orientation}
      </span>
      {order?.product?.orientation.map((data, key) => (
        <>
          <div key={key} className="col-lg-3 col-md-3 col-sm-12">
            <div
              className={`pro ${
                order.orderData?.productOrientation == data.orientation.id
                  ? "selected_prod"
                  : null
              }`}
              onClick={() => {
                console.log(data);
                disapatch(changeOrientation({ product: data }));
              }}
            >
              <img src={data?.orientation?.img} alt="" srcset="" />
            </div>
            <h6 className="my-3">{data?.orientation?.name}</h6>
          </div>
        </>
      ))}
      <Button
        next={() => {
          if (!order.orderData?.productOrientation) {
            disapatch(
              formError({
                key: "product_orientation",
                error: "Please select orientation",
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

export default ProductOrientation;
