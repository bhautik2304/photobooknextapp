"use client";
import React, { useState, useMemo } from "react";
import axios from "axios";
import { apiRoutes, appRoutes, localstorageKey } from "@/constants";
import { useRouter } from "next/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
import success from "@/assets/img/success.json";
import { IconButton, Tooltip } from "@mui/material";
// import "react-phone-number-input/style.css";
import countryList from "react-select-country-list";
import { FaClipboard } from "react-icons/fa";
import process from "../../assets/img/process.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@/assets/css/styles/social-icons.css";

const errorMsg = {
  name: "Please enter your name.",
  mobile: "Please enter a valid mobile number.",
  whatsapp_no: "Please enter a valid whatsapp number.",
  mobaile_code: "Please Select a country Code.",
  whatsapp_country_code: "Please Select a country Code.",
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

const registrationState = {
  step1: "1",
  step2: "2",
  step3: "3",
};

function RegisterForm() {
  const router = useRouter();
  // const router = useRouter()

  const [data, setData] = useState({
    name: "",
    email: "",
    mobaile: "",
    whatsapp_no: "",
    whatsapp_no_code: "",
    mobaile_code: "",
    password: "",

    address: "",
    city: "",
    state: "",
    country: "",

    company: "",
    logo: "",
    social1: "",
    social2: "",
    gst: "",
  });
  const [status, setStatus] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [nowahtapp, setNowahtapp] = useState(false);
  const [registrationProcess, setRegistrationProcess] = useState(
    registrationState.step1
  );
  const [error, setError] = useState(false);
  const [show, setHide] = useState(false);

  const options = useMemo(() => countryList().getData(), []);
  useMemo(() => countryList().setEmpty("Select a Country").getLabel(""), []);

  // axios.post()
  const submitData = async () => {
    // console.log(getCountryCallingCode(data.mobaile_code))
    console.log(data.mobaile_code);
    const newError = {};

    if (!data?.name) {
      newError.name = errorMsg.name;
    }
    if (!data.mobaile) {
      newError.mobile = errorMsg.mobile;
    }
    if (!nowahtapp) {
      if (!data.whatsapp_no) {
        newError.whatsapp_no = errorMsg.whatsapp_no;
      }
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

    setRegistrationProcess(registrationState.step2);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_no", data.mobaile);
    formData.append("whatsapp_no", data.whatsapp_no);
    formData.append("email", data.email);
    formData.append("password", data.password);

    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("gst", data.gst);

    formData.append("compunys_name", data.company);
    formData.append("compunys_logo", data.logo);
    formData.append("social_link_1", data.social1);
    formData.append("social_link_2", data.social2);
    axios
      .post(apiRoutes.register, formData)
      .then((res) => {
        if (Number(res.data.code) === 444) {
          newError.apiError = res.data.msg;
          setError(newError);
          setRegistrationProcess(registrationState.step1);
          return 0;
        }
        setRegistrationProcess(registrationState.step3);
        // setStatus(true)
      })
      .catch((err) => {
        setRegistrationProcess(registrationState.step1);
        console.log(err);
      });
  };

  return (
    <div>
      {registrationProcess == "1" ? (
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
                <div className="col my-1">
                  <label>Mobile Number</label>
                  <PhoneInput
                    inputStyle={{ width: "100%" }}
                    inputClass="form-control form-control-lg"
                    onChange={(E) => {
                      // console.log(getCountryCallingCode(E));
                      setData({ ...data, mobaile: E });
                    }}
                    inputProps={{
                      placeholder: "Mobile Number",
                    }}
                    country={"in"}
                    placeholder="Your Mobile No *"
                    value={data.mobaile}
                    required
                  />
                  {/* <input
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setData({ ...data, mobaile: e.target.value })
                        }
                        type="number"
                        placeholder="Enter Mobile No."
                        required
                      /> */}
                  <span className="text-danger">{error?.mobile}</span>
                  <span className="text-danger">{error?.mobaile_code}</span>
                </div>
                <div className="col my-1">
                  <label>Your Whatsapp No *</label>
                  <div className="password-toggle mb-2">
                    <PhoneInput
                      inputStyle={{ width: "100%" }}
                      inputClass="form-control form-control-lg"
                      onChange={(E) => {
                        // console.log(getCountryCallingCode(E));
                        setData({ ...data, whatsapp_no: E });
                      }}
                      country={"in"}
                      placeholder="Your Whatsapp No *"
                      value={data.whatsapp_no}
                      required
                      disabled={nowahtapp}
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
                      <Tooltip title="Copy Your Mobile Number">
                        <IconButton
                          aria-label=""
                          disabled={nowahtapp}
                          onClick={() => {
                            setData({ ...data, whatsapp_no: data.mobaile });
                            console.log(data.mobaile);
                          }}
                        >
                          <FaClipboard />
                        </IconButton>
                      </Tooltip>
                    </label>
                  </div>
                  <span
                    className={`text-${
                      nowahtapp ? "success" : "danger"
                    } fs-sm pro`}
                    onClick={() => setNowahtapp(!nowahtapp)}
                  >
                    {nowahtapp
                      ? "Click to add your Whatsapp number"
                      : "Click if you don’t have a Whatsapp number"}
                  </span>
                  <br />
                  <span className="text-danger">{error?.whatsapp_no}</span>
                  <span className="text-danger">
                    {error?.whatsapp_country_code}
                  </span>
                </div>
              </div>
              <div className="col-12 mb-2">
                <input
                  className="form-control form-control-lg"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  placeholder="Email address *"
                  required
                />
                <span className="text-danger">{error?.email}</span>
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
                  <select
                    className="form-select form-select-lg"
                    onChange={(e) =>
                      setData({ ...data, country: e.target.value })
                    }
                    type="text"
                    placeholder="Country *"
                    required
                  >
                    {options.map((data, key) => (
                      <option value={data.label} key={key}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="my-4 px-5">
                <hr />
              </div>

              {data.country == "India" && (
                <>
                  <h6 classNameName="">GST Number</h6>
                  <div className="col-12 mb-2">
                    <input
                      className="form-control form-control-lg"
                      onChange={(e) =>
                        setData({ ...data, gst: e.target.value })
                      }
                      placeholder="GST if applicable"
                      required
                    />
                  </div>
                  <div className="my-4 px-5">
                    <hr />
                  </div>
                </>
              )}

              <div className="d-flex" style={{ gap: "8px" }}>
                <h6 className="pt-2">Social Information</h6>
                <div className="d-flex justify-content-center align-items-center rounded-circle socialIcon">
                  <img
                    src="images/facebook.png"
                    width={25}
                    alt="facebook logo"
                  ></img>
                </div>
                <div className="d-flex justify-content-center align-items-center rounded-circle socialIcon">
                  <img
                    src="images/instagram.png"
                    width={25}
                    alt="instagram logo"
                  ></img>
                </div>
                <div className="d-flex justify-content-center align-items-center rounded-circle socialIcon">
                  <img
                    src="images/web.png"
                    width={25}
                    alt="internet logo"
                  ></img>
                </div>
              </div>

              <div className="password-toggle mb-2">
                <span className="text-danger">{error?.socialLinkTwo}</span>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setData({ ...data, social1: e.target.value })
                  }
                  type="text"
                  placeholder="Social Profile Link"
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
                  placeholder="Social Profile Link"
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
      ) : registrationProcess == "2" ? (
        <>
          <center>
            <Player
              autoplay
              speed={0}
              loop
              src={process}
              style={{ height: "250px", width: "250px" }}
            ></Player>
          </center>
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
              <div class="alert alert-primary" role="alert">
                We have sent a verification email , please verify it or contact
                us for verification.
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
