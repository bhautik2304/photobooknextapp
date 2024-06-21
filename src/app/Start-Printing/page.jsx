"use client";
import React, { useEffect, useState } from "react";
// import  from '@/components'
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import ShowProduct from "@/components/Sections/Products/ShowProduct";
import NotsupportedScreen from "@/components/NotsupportedScreen";
import TotalCounter from "./TotalCounter";

// const ShowProduct = //dynamic(() => import('@/components/Sections/Products/ShowProduct'), { ssr: false })
// const NotsupportedScreen = dynamic(() => import('@/components/NotsupportedScreen'), { ssr: false })
import { isLocalStorageAvailable } from "@/utils";
import { appRoutes, localstorageKey } from "@/constants";

function page() {
  const authStatus = isLocalStorageAvailable()
    ? localStorage.getItem(localstorageKey.authStatus)
    : null;

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const headerElement = document.querySelector("header");
      if (!headerElement) {
        return;
      }
      setHeaderHeight(headerElement.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!authStatus) {
      redirect(appRoutes.Login);
    }
  }, [authStatus]);

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#e5e5e5",
          //   backgroundImage: "linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)",
        }}
      >
        <div className="sticky-top" style={{ top: `${headerHeight + 16}px` }}>
          <TotalCounter />
        </div>
        <div className="row">
          <div className="d-flex justify-content-center aligns-item-center">
            <div className="col-md-8 noothing d-none d-lg-block">
              <div className="card shadw-sm p-5">
                <ShowProduct />
              </div>
            </div>
            <div className="d-block d-lg-none">
              <NotsupportedScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
