"use client";
import React from "react";
import { Sidebar } from "@/components";
function ProfilePageLayout({ children }) {
  return (
    <>
      <main className="page-wrapper" style={{ backgroundColor: "#e5e5e5" }}>
        <div className="container mt-4 mt-lg-5 mb-lg-4 my-xl-5">
          {/* <ProfileSectionNavbar /> */}
          <div className="row pt-sm-2 pt-lg-0">
            <Sidebar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilePageLayout;
