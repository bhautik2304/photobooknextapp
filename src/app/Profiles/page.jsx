"use client";
import { appRoutes, localstorageKey } from "@/constants";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { isLocalStorageAvailable } from "@/utils";
import { Profile } from "@/components";

function page() {
  const authStatus = isLocalStorageAvailable()
    ? localStorage.getItem(localstorageKey.authStatus)
    : null;

  useEffect(() => {
    if (!authStatus) {
      redirect(appRoutes.Home);
    }
    // setData(user);
  }, [authStatus]);

  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState(user);
  // Check if user is not available (still loading) and show loading message
  if (!user) {
    return <div>Loading...</div>;
  }

  // Update data state when user changes (and on initial render)
  useEffect(() => {
    setData(user);
  }, [user]);

  return (
    <>
      <Profile />
    </>
  );
}

export default page;
