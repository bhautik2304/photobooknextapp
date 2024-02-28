"use client";
import React, { useState } from "react";
import axios from "axios";
import { apiRoutes, appRoutes, localstorageKey } from "@/constants";
import { useRouter } from "next/navigation";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import success from "@/assets/img/success.json";
import { Button } from "@mui/material";
// import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const errorMsg = {
  name: "Please enter your name.",
  mobile: "Please enter a valid mobile number.",
  email: "Please enter a valid email address.",
  password: "Please enter a password with at least 8 characters.",

  address: "Please enter your address.",
  state: "Please enter your state.",
  country: "Please enter your country.",

  company: "Please enter your company / Studio name.",
  logo: "Please upload a company logo.",
  social1: "Please enter a valid link for the first social media account.",
  social2: "Please enter a valid link for the second social media account.",
};

function RegisterForm() {
  const router = useRouter();
  // const router = useRouter()

  const [data, setData] = useState({
    name: "",
    mobaile: "",
    email: "",
    password: "",

    address: "",
    city: "",
    state: "",
    country: "",

    company: "",
    logo: "",
    social1: "",
    social2: "",
  });
  const [status, setStatus] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [error, setError] = useState(false);
  const [show, setHide] = useState(false);

  // axios.post()
  const submitData = async () => {
    const newError = {};

    if (!data?.name) {
      newError.name = errorMsg.name;
    }
    if (!mobile) {
      newError.mobile = errorMsg.mobile;
    }
    if (!data?.email) {
      newError.email = errorMsg.email;
    }
    if (!data?.password) {
      newError.password = errorMsg.password;
    }
    if (!data?.company) {
      newError.companyName = errorMsg.company;
    }
    if (!data?.address) {
      newError.address = errorMsg.address;
    }
    if (!data?.state) {
      newError.state = errorMsg.state;
    }
    if (!data?.country) {
      newError.country = errorMsg.country;
    }

    // Check if there are any errors
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return 0; // Validation failed
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_no", mobile);
    formData.append("email", data.email);
    formData.append("password", data.password);

    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);

    formData.append("compunys_name", data.company);
    formData.append("compunys_logo", data.logo);
    formData.append("social_link_1", data.social1);
    formData.append("social_link_2", data.social2);
    axios.post('http://127.0.0.1:8000/api/costomer/', formData).then(res => {
        if (Number(res.data.code) === 444) {
            newError.apiError = res.data.msg
            setError(newError);
            return 0;
        }
        setStatus(true)
    }).catch(err => console.log(err))
  };

  return (
    <div>
      {!status ? (
        <>
          <h3 className="h3 pb-2 pb-lg-3">Sign up to photokrafft.com</h3>
          <div classNameName="row">
            <div classNameName="col-lg-6 col-md-6 col-sm-12">
              <h6>Personal Information</h6>
              <div className="col mb-2">
                <span className="text-danger">{error?.name}</span>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Your name *"
                  required
                />
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                <div className="col mb-2">
                  <span className="text-danger">{error?.mobile}</span>
                  <PhoneInput
                    className="form-control form-control-lg"
                    onChange={setMobile}
                    placeholder="Your Mobile No *"
                    value={mobile}
                    required
                  />
                </div>
                <div className="col mb-2">
                  <span className="text-danger">{error?.email}</span>
                  <input
                    className="form-control form-control-lg"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    type="email"
                    placeholder="Email address *"
                    required
                  />
                </div>
              </div>
              <span className="text-danger">{error?.password}</span>
              <div className="password-toggle mb-2">
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type={show ? "text" : "password"}
                  placeholder="Password *"
                  required
                />
                <label
                  className="password-toggle-btn"
                  aria-label="Show/hide password"
                >
                  <input
                    className="password-toggle-check"
                    type="checkbox"
                    onClick={() => setHide(!show)}
                  />
                  <span className="password-toggle-indicator"></span>
                </label>
              </div>
              <div className="my-4 px-5">
                <hr />
              </div>
              <h6>Your Company or Studio Information</h6>
              <div className="col-12 password-toggle mb-2">
                <span className="text-danger">{error?.companyName}</span>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, company: e.target.value })
                  }
                  placeholder="Your Company’s Name *"
                  required
                />
              </div>
              <div className="password-toggle mb-2">
                <span className="text-danger">{error?.companyLogo}</span>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, logo: e.target.files[0] })
                  }
                  type="file"
                  placeholder="Your Company’s Logo *"
                  required
                />
              </div>
              <span classNameName="" style={{ fontSize: "14px !important" }}>
                Your Company’s Logo <span classNameName="text-danger">*</span>{" "}
              </span>
            </div>
            <div className="my-4 px-5">
              <hr />
            </div>
            {/* </div> */}
            <div classNameName="col-lg-6 col-md-6 col-sm-12">
              <h6>Address Details</h6>
              <span className="text-danger">{error?.address}</span>
              <div className="password-toggle mb-2">
                <textarea
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  rows={1}
                  placeholder="Address *"
                  required
                ></textarea>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                <div className="col mb-2">
                  <span className="text-danger">{error?.city}</span>
                  <input
                    className="form-control form-control-lg"
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    type="text"
                    placeholder="City *"
                    required
                  />
                </div>
                <div className="col mb-2">
                  <span className="text-danger">{error?.state}</span>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                    placeholder="State / Province *"
                    required
                  />
                </div>
                <div className="col mb-2">
                  <span className="text-danger">{error?.country}</span>
                  <input
                    className="form-control form-control-lg"
                    onChange={(e) =>
                      setData({ ...data, country: e.target.value })
                    }
                    type="text"
                    placeholder="Country *"
                    required
                  />
                </div>
              </div>

              <div className="my-4 px-5">
                <hr />
              </div>

              <h6 classNameName="">Social Information</h6>
              <div className="password-toggle mb-2">
                <span className="text-danger">{error?.socialLinkTwo}</span>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, social1: e.target.value })
                  }
                  type="text"
                  placeholder="Social Profile Link *"
                  required
                />
              </div>
              <div className="password-toggle mb-2">
                <span className="text-danger">{error?.socialLinkOne}</span>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, social2: e.target.value })
                  }
                  type="text"
                  placeholder="Social Profile Link *"
                  required
                />
              </div>
            </div>
          </div>
          <span className="text-danger mt-3">{error?.apiError}</span>
          <button
            className="btn btn-md btn-primary w-100 my-4 pro"
            onClick={() => submitData()}
            style={{ borderRadius: "5px !important" }}
          >
            Sign up
          </button>
        </>
      ) : (
        <>
          <div classNameName="row">
            <Player
              autoplay
              speed={0}
              loop
              src={success}
              style={{ height: "250px", width: "250px" }}
            ></Player>
            <center>
              <div class="alert alert-primary" role="alert">
                You have successfully registered and your profile is under
                review , please wait for approval
              </div>
            </center>
            <center>
              <button
                className="btn btn-md btn-primary w-100 my-4 pro"
                variant="contained"
                onClick={() => {
                  router.replace(appRoutes.Login);
                }}
                size="medium"
              >
                Go to login
              </button>
            </center>
          </div>
        </>
      )}
    </div>
  );
}

export default RegisterForm;
