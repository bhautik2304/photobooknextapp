"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { apiRoutes, appRoutes, localstorageKey } from "@/constants";
import Link from "next/link";
import axios from "axios";
import { authLogin, authLogout } from "@/Redux/Slice/authSlice";
import { addUsers } from "@/Redux/Slice/userSlice";
import Avatar from "react-avatar";
import { isLocalStorageAvailable } from "@/utils";
function Navbar() {
  const pathname = usePathname();
  // const
  const dispatch = useDispatch();

  const router = useRouter();

  const { authStatus, user } = useSelector((state) => state.auth);

  const token = isLocalStorageAvailable()
    ? localStorage.getItem(localstorageKey.authKey)
    : false;

  useEffect(() => {
    if (token) {
      // console.log(JSON.parse(token));
      //'http://localhost:8000/api/auth/costomer/token'
      axios
        .post(
          apiRoutes.token,
          { token: token },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          if (res.data.code == 200) {
            dispatch(authLogin(res.data));
            dispatch(addUsers(res.data.user));
          } else {
            dispatch(authLogout());
            console.log(pathname);
            if (pathname == appRoutes.userProfile) {
              router.push(appRoutes.Login);
              console.log("1");
              return 0;
            }
            if (pathname == appRoutes.userProfileOrders) {
              router.push(appRoutes.Login);
              console.log("2");
              return 0;
            }
            if (pathname == appRoutes.checkout) {
              console.log("3");
              router.push(appRoutes.Login);
              return 0;
            }
          }
        })
        .catch((err) => {
          dispatch(authLogout());
          if (pathname == appRoutes.userProfile) {
            router.push(appRoutes.Login);
            return;
          }
          if (pathname == appRoutes.userProfileOrders) {
            router.push(appRoutes.Login);
            return;
          }
          if (pathname == appRoutes.checkout) {
            router.push(appRoutes.Login);
            return;
          }
          console.log(err);
        });
    } else {
      dispatch(authLogout());
      if (pathname == appRoutes.userProfile) {
        router.push(appRoutes.Login);
        return;
      }
      if (pathname == appRoutes.userProfileOrders) {
        router.push(appRoutes.Login);
        return;
      }
      if (pathname == appRoutes.checkout) {
        router.push(appRoutes.Login);
        return;
      }
    }
  }, []);
  return (
    <div>
      <header className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img
              src={"/assets/img/logo.png"}
              alt="Photokraft logo"
              width={220}
              height={100}
            />
            {/* Around */}
          </Link>
          {authStatus && (
            <>
              <div className="dropdown nav d-block order-lg-2 ms-auto">
                <Link
                  href="#"
                  className="nav-link d-flex align-items-center p-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <img src={user?.compunys_logo} className="border rounded-circle" width="48" alt="Isabella Bocouse" /> */}
                  <Avatar
                    name={user?.name}
                    color={"#212121"}
                    size={48}
                    round={true}
                  />
                  <div className="d-none d-sm-block ps-2">
                    <div className="fs-sm dropdown-toggle">
                      Hello {user?.name}
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu dropdown-menu-end my-1">
                  <h6 className="dropdown-header fs-xs fw-medium text-body-secondary text-uppercase pb-1">
                    Account
                  </h6>
                  <Link href={appRoutes.userProfile} className="dropdown-item">
                    <i className="ai-user-check fs-lg opacity-70 me-2"></i>
                    Overview
                  </Link>
                  <Link
                    href={appRoutes.userProfileOrders}
                    className="dropdown-item"
                  >
                    <i className="ai-cart fs-lg opacity-70 me-2"></i>
                    Orders
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button
                    onClick={() => {
                      dispatch(authLogout());
                      router.refresh(appRoutes.Login);
                    }}
                    className="dropdown-item"
                  >
                    <i className="ai-logout fs-lg opacity-70 me-2"></i>
                    Sign out
                  </button>
                </div>
              </div>
            </>
          )}
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="collapse navbar-collapse" id="navbarCollapse1">
            <ul className="navbar-nav me-auto">
              <li
                className={`nav-item ${pathname == appRoutes.Home && "active"}`}
              >
                <Link href={appRoutes.Home} className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname == appRoutes.Products && "active"
                }`}
              >
                <Link href={appRoutes.Products} className="nav-link">
                  Products
                </Link>
              </li>
              {/* <li
                className={`nav-item ${
                  pathname == appRoutes.services && "active"
                }`}
              >
                <Link href={appRoutes.services} className="nav-link">
                  Services
                </Link>
              </li> */}
              <li
                className={`nav-item ${
                  pathname == appRoutes.AboutUS && "active"
                }`}
              >
                <Link href={appRoutes.AboutUS} className="nav-link">
                  About us
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname == appRoutes.Support && "active"
                }`}
              >
                <Link href={appRoutes.Support} className="nav-link">
                  Faqs
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname == appRoutes.StartPrinting && "active"
                }`}
              >
                <Link href={appRoutes.StartPrinting} className="nav-link">
                  Order now
                </Link>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto align-items-center">
                {authStatus ? (
                  <>{/* Login */}</>
                ) : (
                  <>
                    <li
                      className={`nav-item ${
                        pathname == appRoutes.Login && "active"
                      }`}
                    >
                      <Link href={appRoutes.Login} className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        pathname == appRoutes.CreateAccount && "active"
                      }`}
                    >
                      {/* <Link h="#" className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link> */}
                      <Link
                        href={appRoutes.CreateAccount}
                        className="btn btn-primary btn-sm fs-sm ms-3 mb-4 mb-lg-0"
                        style={{
                          borderRadius: "5px !important",
                          fontSize: "16px !important",
                          backgroundColor: "#5bb5a2 !important",
                        }}
                      >
                        {/* <i className="ai-user me-2 ms-n1"></i> */}
                        Create Account
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
