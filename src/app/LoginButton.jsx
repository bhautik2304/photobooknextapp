"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { localstorageKey, appRoutes } from "@/constants";
import { isLocalStorageAvailable } from "@/utils";
function LoginButton() {
  const authStatus = isLocalStorageAvailable() ? localStorage.getItem(localstorageKey.authStatus) : null
  return authStatus ? (
    <Link
      href={appRoutes.StartPrinting}
      className="btn btn-primary btn-sm fs-sm mb-4"
    >
      Order Now
    </Link>
  ) : (
    <Link
      href={appRoutes.CreateAccount}
      className="btn btn-primary btn-sm fs-sm mb-4"
    >
      Register - Login
    </Link>
  );
}

export default LoginButton;
