"use client";
import React, { useEffect } from "react";
import { LoginForm } from "@/components";
import { appRoutes, localstorageKey } from "@/constants";
import { redirect } from "next/navigation";
import { isLocalStorageAvailable } from "@/utils";
function page() {
  const authStatus = isLocalStorageAvailable()
    ? localStorage.getItem(localstorageKey.authStatus)
    : null;

  useEffect(() => {
    if (authStatus == "true") {
      redirect(appRoutes.userProfileOrders);
    }
  }, [authStatus]);
  return (
    <>
      <main
        className="page-wrapper"
        style={{
          backgroundColor: "#80d0c7",
          backgroundImage: "linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)",
        }}
      >
        {/* <!-- Page content--> */}
        <div className="d-flex flex-column position-relative h-100 signin-signup-card">
          {/* <!-- Home button--> */}
          <div className="container-fluid mt-auto">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5 col-xl-5 col-sm-12 card signin-signup-card-padding">
                <div className="ps-md-3 ps-lg-5 ps-xl-0 ps-sm-0">
                  <h4 className="h4">Sign in to photokrafft.com</h4>

                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright--> */}
          {/* <div className="container fs-sm pt-5 mt-auto mb-5"><span className="text-muted">&copy; All rights reserved. Made by</span><a className="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div> */}
        </div>
      </main>
    </>
  );
}

export default page;
