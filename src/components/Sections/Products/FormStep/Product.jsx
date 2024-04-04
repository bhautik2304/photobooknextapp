"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import {
  formError,
  formNext,
  selectProduct,
} from "../../../../Redux/Slice/orderSlice";

function Product() {
  const {
    product: { product },
    order,
  } = useSelector((state) => state);
  const disapatch = useDispatch();
  return (
    <>
      <span className="text-danger">{order.formError?.product_error}</span>
      {product
        ? product.map((data, key) => (
            <>
              <div key={key} className="col-lg-3 col-md-3 col-sm-12">
                <div
                  className={`pro ${
                    order.product?.id == data.id ? "selected_prod" : null
                  }`}
                  onClick={() => disapatch(selectProduct({ product: data }))}
                >
                  <img src={data?.img} alt="" srcset="" />
                </div>
                <h6 className="my-3">{data.name}</h6>
              </div>
            </>
          ))
        : null}
      <Button
        next={() => {
          if (order.orderData.product_id) {
            disapatch(formNext());
            return;
          }
          disapatch(
            formError({
              key: "product",
              product_error: "Select minimum one option",
            })
          );
        }}
      />
    </>
  );
}

export default Product;
