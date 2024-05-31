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

const homeHeroCard = [
  {
    title: "Flush Mount Album ",
    img: "images/flushmounts.jpg",
    link: appRoutes.Products,
  },
  {
    title: "TrueHD Photo Books",
    img: "/images/trueHd.jpg",
    link: appRoutes.Products,
  },
  {
    title: "The Krafft Book",
    img: "images/homebancard/ProductKrafftbook.svg",
    link: appRoutes.Products,
  },
  {
    title: "Baby Books",
    img: "images/homebancard/BabyBooks.jpg",
    link: appRoutes.Products,
  },
];

export default function Home() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section class="bg-white py-5 mb-5">
        <div class="container text-center pt-5 mt-lg-4 mt-xl-5">
          <div
            class="position-relative mx-auto my-3"
            style={{ maxWidth: "850px" }}
          >
            <h1 class="display-5 position-relative z-2 mb-0">
              Begin your album printing
              <br /> journey{" "}
              <Link
                className="text-primary link"
                href={appRoutes.StartPrinting}
              >
                here.
              </Link>
            </h1>
          </div>
          {/* <Link
            class="btn btn-lg btn-primary rounded-pill"
            href={appRoutes.StartPrinting}
          >
            Start Printing
          </Link> */}
        </div>
      </section>

      <section class="container mt-n3 mt-sm-0 pb-5 mt-5">
        <div class="row g-4 pb-2 pb-md-4">
          {homeHeroCard.map((data) => (
            <div class="col-md-3">
              {/* <!-- Card --> */}
              <div
                class="card zoom-effect h-100 border-0 overflow-hidden "
                style={{ minHeight: "600px", borderRadius: "20px" }}
              >
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
                <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                  <div
                    class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      // height: 900,
                      backgroundImage: `url(${data.img})`,
                    }}
                  ></div>
                </div>
                <center>
                  <Link
                    class="card-body d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                    href={data.link}
                  >
                    <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">
                      {data.title}
                    </span>
                  </Link>
                </center>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="bg-white d-none d-lg-block">
        <div
          class="container"
          style={{ position: "relative", textAlign: "center" }}
        >
          <img
            src="/images/AllAlbums.png"
            style={{ width: "100%", borderRadius: 20 }}
            className="mb-4"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "850px",
              width: "100%",
            }}
          >
            <h1 class="display-6 mb-4">
              Creativity Beyond Your Imagination,
              <br /> Quality Beyond Your Expectation!!!
            </h1>
            {/* <Link
              class="text-primary rounded-pill"
              href={appRoutes.StartPrinting}
            >
              Start Printing <i class="ai-arrow-right fs-lg text-success"></i>
            </Link> */}
            <Link
              class="btn btn-lg btn-primary rounded-pill"
              href={appRoutes.StartPrinting}
            >
              Start Printing
            </Link>
          </div>
        </div>
      </section>
      {/* <section class="container mt-n3 mt-sm-0 pb-5 mt-5"></section> */}
      {/* <section class="container mt-n3 mt-sm-0 pb-5 mt-5"></section> */}
      <section class="container mt-n3 mt-sm-0 pb-5 mt-5">
        <div class="row g-4 pb-2 pb-md-4">
          <div class="col-md-4">
            {/* <!-- Card --> */}
            <div
              class="card zoom-effect h-100 border-0 overflow-hidden "
              style={{ minHeight: "450px", borderRadius: "20px" }}
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    // height: 900,
                    backgroundImage: `url(images/BoxesSleeves.jpg)`,
                  }}
                ></div>
              </div>
              <center>
                <Link
                  class="card-body d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                  href={appRoutes.Products}
                >
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">
                    Presentation Boxes & Sleeves
                  </span>
                </Link>
              </center>
            </div>
          </div>
          <div class="col-md-4">
            {/* <!-- Card --> */}
            <Link
              href={appRoutes.StartPrinting}
              className="pro"
              style={{ textDecoration: "none" }}
            >
              <div
                class="card zoom-effect h-100 border-0 overflow-hidden p-5"
                style={{ minHeight: "450px", borderRadius: "20px" }}
              >
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
                <div className="my-5">
                  <h3>
                    Limitless of options to choose for your perfect print and
                    bind.
                  </h3>
                  <i
                    class="ai-arrow-right pro"
                    style={{
                      fontSize: 70,
                    }}
                  ></i>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            {/* <!-- Card --> */}
            <div
              class="card zoom-effect h-100 border-0 overflow-hidden "
              style={{ minHeight: "450px", borderRadius: "20px" }}
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    // height: 900,
                    backgroundImage: `url(images/Thickness_AcrylicCoverBrown_2.jpg)`,
                  }}
                ></div>
              </div>
              <center>
                <Link
                  class="card-body d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                  href={appRoutes.Products}
                >
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">
                    Thin Sheet Binding
                  </span>
                </Link>
              </center>
            </div>
          </div>
          <div class="col-md-8">
            {/* <!-- Card --> */}
            <div
              class="card zoom-effect h-100 border-0 overflow-hidden "
              style={{ minHeight: "450px", borderRadius: "20px" }}
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    // height: 900,
                    backgroundImage: `url(images/JT8A4839.jpg)`,
                  }}
                ></div>
              </div>
              <center>
                <Link
                  class="card-body d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                  href={appRoutes.Products}
                >
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">
                    Flush Mount Package
                  </span>
                </Link>
              </center>
            </div>
          </div>
          <div class="col-md-4">
            {/* <!-- Card --> */}
            <div
              class="card zoom-effect h-100 border-0 overflow-hidden "
              style={{ minHeight: "450px", borderRadius: "20px" }}
            >
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
              <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    // height: 900,
                    backgroundImage: `url(images/vcut.jpg)`,
                  }}
                ></div>
              </div>
              <center>
                <Link
                  class="card-body d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                  href={appRoutes.Products}
                >
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">
                    Progressive V Cut
                  </span>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section>
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
                      <a href="tel:+919227094949">
                        <h6 className="m-0">+91-92270 94949</h6>
                      </a>
                      <p className="text-muted">India Support</p>
                    </div>
                  </div>
                </div>
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
                      <a href="tel:+19054525252">
                        <h6 className="m-0">+1-905 452 5252</h6>
                      </a>
                      <p className="text-muted">North America Support</p>
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
                      <a href="mailto:info@photokrafft.com">
                        <h6 className="m-0">info@photokrafft.com</h6>
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
          {/* <div class="d-flex justify-content-between align-items-center px-5 py-4">
            <h2 className="text-white">
              Need to consult about your product needs
            </h2>
            <a
              target="_blank"
              href="https://tawk.to/photokrafftsupport"
              class="secondary-button"
            >
              Chat Now
            </a>
          </div> */}
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
