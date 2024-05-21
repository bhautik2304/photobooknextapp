import Link from "next/link";
import Image from "next/image";
import { appRoutes } from "@/constants";
import { AnimateText, ProductScroll, Testymonial } from "@/components";
import {
  FaArrowRightLong,
  FaHandHoldingHand,
  FaRepeat,
  FaBoxOpen,
} from "react-icons/fa6";
import { RiSafe2Fill } from "react-icons/ri";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import axios from "axios";
import { landscape, portrait, square } from "@/assets/img";
import LoginButton from "./LoginButton";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <section>
        <section class="hero">
          <video autoPlay loop muted className="hero-video">
            <source src="/photokrafft_banner_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <div class="hero-content">
            <h1 className="text-white">Your album printing starts here.</h1>
            <p>
              Photokrafft has been at the forefront of graphic design and album
              manufacturing, shaping visual narratives that
            </p>
            <button class="primary-button">Start Printing</button>
          </div>
        </section>
        {/* <section class="container">
          <div class="card p-5 main-section">
            <div class="row position-relative">
              <div>
                <center>
                  <h2>
                    Welcome to <a href="">photokrafft.com</a>, <br />
                    Where Your Memories Come to Life
                  </h2>
                  <p>
                    Potokrafft has been at the forefront of graphic design and
                    album manufacturing.
                  </p>
                </center>
              </div>
            </div>
          </div>
        </section> */}
        <section class="container my-5">
          <div class="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5">
            <div class="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
              <div class="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
                <h2 class="h2 mb-4">
                  Welcome to <a href="">photokrafft.com</a>,
                  <br class="d-none d-lg-inline" />
                  Where Your Memories Come to Life
                </h2>
                <p class="pb-3 mb-3 mb-lg-4">
                  {" "}
                  Potokrafft has been at the forefront of graphic design and
                  album manufacturing.
                </p>
              </div>
              <div
                class="order-lg-1 w-100 mx-auto mx-lg-0"
                style={{ maxWidth: 558 }}
              >
                <div class="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
                  <img
                    src="/assets/img/logo.png"
                    // height={250}
                    style={{ width: 450 }}
                    alt=""
                  />
                </div>
                <div
                  class="d-lg-none text-center pt-4 mt-2 mt-md-3"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-back"
                  data-aos-delay="900"
                >
                  <a class="btn btn-primary" href="#">
                    See all tools
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="position-relative mb-5">
          <div class="container position-relative z-2">
            <div class="row align-items-center g-3 g-lg-4 mb-3 mb-lg-4">
              <div className="p-5"></div>
              <div class="col-sm-6 text-center order-sm-2">
                <img src="/images/loader.png" alt="" srcset="" />
                <h2 class="h3 mb-2 mb-sm-0 mt-3">
                  <a href="#" class="text-primary text-decoration-none">
                    #Photokrafft
                  </a>
                </h2>
              </div>
              <div class="col-6 col-sm-3 order-sm-1">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/1.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-3 order-sm-3">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/2.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="row g-3 g-lg-4">
              <div class="col-6 col-sm-3">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/3.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-3">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/4.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-3">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/5.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-3">
                <a class="d-block card-hover zoom-effect" href="#">
                  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i class="ai-instagram lead text-white position-relative z-2"></i>
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                  </div>
                  <div class="zoom-effect-wrapper rounded-1">
                    <img
                      class="zoom-effect-img"
                      src="/images/collage/6.jpg"
                      alt="Instagram image"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5 my-5 w-100"></div>
        <div className="container">
          <div className="d-flex justify-content-center aligns-item-center">
            <div className="p-5">
              <p>What Photokrafft provides you ?</p>
              <h2>
                Happiness, Which Comes In All Shapes And Size,
                <br /> So Do Our Books.
              </h2>
              <p>
                Experience the power of creativity with Photokrafft. Let’s
                embark on a journey of visual storytelling together, with our
                verity of product range you can choose one of the product to
                start with
              </p>
              <div className="row my-5">
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <Link
                    href={appRoutes.StartPrinting}
                    style={{ textDecoration: "none" }}
                  >
                    <Image width={300} src={square} alt="" srcset="" />
                    <h6 className="my-3">Square</h6>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <Link
                    href={appRoutes.StartPrinting}
                    style={{ textDecoration: "none" }}
                  >
                    <Image width={300} src={landscape} alt="" srcset="" />
                    <h6 className="my-3">Landscape</h6>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <Link
                    href={appRoutes.StartPrinting}
                    style={{ textDecoration: "none" }}
                  >
                    <Image width={300} src={portrait} alt="" srcset="" />
                    <h6 className="my-3">Portrait</h6>
                  </Link>
                </div>
              </div>

              <Link
                href={appRoutes.StartPrinting}
                className="nav-link text-success mb-4 mt-5 d-flex align-center"
                style={{ fontSize: 18 }}
              >
                Start your printing journey with us{" "}
                <FaArrowRightLong size={20} style={{ marginLeft: 10 }} />
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <section className="overflow-hidden">
            <div className="container pb-5 pt-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
              <div className="row pb-md-3 pb-lg-4 mb-2 mb-lg-3">
                {/* <!-- CEO quote--> */}
                <div className="col-md-5 d-flex align-items-center mb-md-0">
                  <div>
                    <div
                      className="position-relative"
                      style={{ maxWidth: "416px" }}
                    >
                      <img
                        className="d-block position-relative zindex-2"
                        src="/assets/img/logo.png"
                        alt="Nicolas Black"
                      />
                      <div
                        className="position-absolute start-0 bottom-0 w-100"
                        style={{
                          height: "85.4%",
                          borderRadius: "2.25rem 8rem 2.25rem 2.25rem",
                        }}
                      ></div>
                    </div>
                    <div className="text-center text-md-start pt-3 mt-3">
                      <h2 className="mb-2">Our focus</h2>
                      <p className="fs-xl text-muted mb-2">Photokrafft.com</p>
                      <div
                        className="position-relative pt-4"
                        style={{ maxWidth: "500px" }}
                      >
                        <div className="position-absolute top-0 start-0 w-100 text-center text-md-start ms-md-1">
                          <svg
                            className="text-border"
                            width="155"
                            height="111"
                            viewBox="0 0 155 111"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M125.969 38.7937C129.372 30.2345 134.734 21.7781 141.902 13.6311C144.17 11.053 144.48 7.34066 142.623 4.45316C141.18 2.18441 138.808 0.94696 136.23 0.94696C135.508 0.94696 134.786 0.99826 134.064 1.25633C118.905 5.69065 83.4811 21.4171 82.5014 71.8454C82.1407 91.2842 96.3717 107.99 114.883 109.898C125.144 110.93 135.353 107.578 142.933 100.772C150.512 93.914 154.844 84.117 154.844 73.9077C154.844 56.8922 142.778 41.9905 125.969 38.7937Z"></path>
                            <path d="M32.5904 109.898C42.7999 110.93 53.0092 107.578 60.5888 100.772C68.1686 93.914 72.5 84.117 72.5 73.9077C72.5 56.8922 60.4342 41.9905 43.6248 38.7937C47.0281 30.2345 52.3905 21.7781 59.5578 13.6312C61.8265 11.0531 62.1359 7.34071 60.2794 4.45321C58.8358 2.18446 56.4638 0.947006 53.8857 0.947006C53.1641 0.947006 52.4421 0.998306 51.7202 1.25638C36.5608 5.6907 1.13734 21.4172 0.157654 71.8454V72.5671C0.157654 91.6968 14.2341 107.99 32.5904 109.898Z"></path>
                          </svg>
                        </div>
                        <p className="fs-xl position-relative zindex-2 mb-0">
                          The main task of our organization is{" "}
                          <strong>
                            to assess the state of your enterprise now and how
                            you can achieve your goals.
                          </strong>{" "}
                          Self-assessment of current activities and review of
                          processes formulate decisions to achieve the desired
                          outcome.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Steps--> */}
                <div className="col-md-7 col-lg-6 col-xxl-5 offset-lg-1 offset-xxl-2">
                  <div className="ps-md-4 ps-lg-0">
                    <div
                      className="position-relative d-flex justify-content-end"
                      data-aos="fade-left"
                      data-aos-easing="ease-out-back"
                    >
                      <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">
                        01
                      </div>
                      <div
                        className="card border-0 ps-3"
                        style={{ width: "calc(100% - 1.75rem)" }}
                      >
                        <div className="card-body ps-4">
                          <h3 className="h5 card-title pb-2 mb-1">
                            Create an account with us
                          </h3>
                          <p className="card-text">
                            Create an account with us by clicking on signup
                            button and add your company details during the
                            signup process
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-relative d-flex justify-content-end"
                      data-aos="fade-left"
                      data-aos-easing="ease-out-back"
                      data-aos-delay="250"
                    >
                      <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">
                        02
                      </div>
                      <div
                        className="card border-0 ps-3"
                        style={{ width: "calc(100% - 1.75rem)" }}
                      >
                        <div className="card-body ps-4">
                          <h3 className="h5 card-title pb-2 mb-1">
                            Login to your dashboard
                          </h3>
                          <p className="card-text">
                            We will evaluate your new account request and
                            profile before accepting the request, ones you
                            receive the approval mail you can login and go to
                            your dashboard and can start the order
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-relative d-flex justify-content-end"
                      data-aos="fade-left"
                      data-aos-easing="ease-out-back"
                      data-aos-delay="500"
                    >
                      <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">
                        03
                      </div>
                      <div
                        className="card border-0 ps-3"
                        style={{ width: "calc(100% - 1.75rem)" }}
                      >
                        <div className="card-body ps-4">
                          <h3 className="h5 card-title pb-2 mb-1">
                            Select product and start order journey
                          </h3>
                          <p className="card-text">
                            After you get your approval for your account you can
                            start ordering by clicking on the start printing
                            button and process the order as per your
                            requirements
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="position-relative d-flex justify-content-end my-3" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="700">
                    <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">04</div>
                    <div className="card border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <div className="card-body ps-4">
                        <h3 className="h5 card-title pb-2 mb-1">Upload your memories and just click send to print</h3>
                        <p className="card-text">Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc  vel nec risus.</p>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <Testymonial /> */}

        {/* <!-- FAQ (Accordion)--> */}
        <section className="bg-body py-5">
          <div className="container py-md-2 py-lg-3 py-xl-5 my-2 my-sm-3 my-md-4 my-xxl-5">
            <div className="row">
              <div className="col-md-4 col-sm-12 text-center text-md-start">
                <h2 className="h1">Need help?</h2>
                {/* <p className="pb-3 pb-sm-4">Et felis vitae ac venenatis lacus cras etiam risus scelerisque auctor adipiscing in a porta</p> */}
                <div className="row col-12">
                  <div className="col-2">
                    <IoIosCall
                      size={50}
                      color="#5BB5A2"
                      style={{
                        backgroundColor: "#E8F2EE",
                        padding: 10,
                        borderRadius: 50,
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <div>
                      <a href="tel:+919227232123">
                        <h6 className="m-0">+91 9227 232 123</h6>
                      </a>
                      <p className="text-muted">Support Hotline</p>
                    </div>
                  </div>
                </div>
                <div className="row col-12">
                  <div className="col-2">
                    <IoMdMailUnread
                      size={50}
                      color="#5BB5A2"
                      style={{
                        backgroundColor: "#E8F2EE",
                        padding: 10,
                        borderRadius: 50,
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <div>
                      <a href="mailto:support@photokrafft.com">
                        <h6 className="m-0">support@photokrafft.com</h6>
                      </a>
                      <p className="text-muted">Support Email</p>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-flex justify-content-center">
                  <svg
                    className="text-warning ms-n4"
                    width="200"
                    height="211"
                    viewBox="0 0 200 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="col-md-8 col-lg-7 col-sm-12 offset-lg-1">
                <div className="accordion" id="faq">
                  <div className="accordion-item bg-secondary">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#questionOne"
                        aria-expanded="true"
                        aria-controls="questionOne"
                      >
                        Q. How many times can I revise the design?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse show"
                      id="questionOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        We provide two rounds of complimentary consolidated
                        feedback to review the book designs. Once we have shared
                        the first review, you can send us layout specific
                        corrections as comments. We will make the changes and
                        share the second review. Any further changes beyond 3rd
                        review onwards, will be charged per layout basis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-secondary">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#questionTwo"
                        aria-expanded="false"
                        aria-controls="questionTwo"
                      >
                        Q. Can you do only the design and let me print
                        elsewhere?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="questionTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        Yes, we can definitely design your album and you are
                        free to choose the printer of your choice. The design
                        services for such orders are treated as Custom Design
                        and will be billed accordingly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-secondary">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#questionThree"
                        aria-expanded="false"
                        aria-controls="questionThree"
                      >
                        Q. How many images can an album accommodate, does it
                        change with the size?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="questionThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        The size of the book does not really affect the number
                        of images that the book can hold. It is the design that
                        dictates the number of images that a book will contain.
                        We generally recommend to add 5-6 images per layout or
                        100-120 images for a 20 layout/spread or a 40
                        sides/pages book. We usually do not recommend adding
                        more images as this can make the design look cluttered.
                        In case you would like to add more images, you can
                        definitely increase the number of layouts in the album
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div class="d-flex justify-content-between align-items-center px-5 py-4">
            <h2 className="text-white">
              Need to counsult about your product needs
            </h2>
            <a
              target="_blank"
              href="https://tawk.to/photokrafftsupport"
              class="secondary-button"
            >
              Chat Now
            </a>
          </div>
        </footer>
      </section>
      <Script src="assets/vendor/jarallax/dist/jarallax.min.js"></Script>
      <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="assets/vendor/lightgallery/lightgallery.min.js"></Script>
      <Script src="assets/vendor/lightgallery/plugins/fullscreen/lg-fullscreen.min.js"></Script>
      <Script src="assets/vendor/lightgallery/plugins/zoom/lg-zoom.min.js"></Script>
      <Script src="assets/js/theme.min.js"></Script>
    </>
  );
}
