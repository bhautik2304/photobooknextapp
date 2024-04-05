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
        <section class="container">
          <div class="card p-5 main-section">
            <div class="row position-relative">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div class="intro-section p-5">
                  <div class="z-index-1 position-relative">
                    <h2>
                      Introducing Photokrafft: Elevating Vsual Experiences
                      Globally
                    </h2>
                    <p>
                      Established in 2007 in the vibrant landscape of India,
                      Photokarfft has been at te forefront of graphic design and
                      album manufacturing
                    </p>
                    <button class="primary-button">Start Printing</button>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 p-5 z-index-1 position-relative">
                <img src="/images/about.png" alt="about us" width="80%" />
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 text-center mb-5">
                <div class="about-us-section p-5 mt-1">
                  <div>
                    <h2 className="text-white">
                      The Ultimate Store for Exquisite Photo Album
                    </h2>
                    <p>
                      Hundreds of options to choose for your perfect print and
                      bind.
                    </p>
                  </div>
                  <div class="card p-4">
                    <i class="fa-solid fa-layer-group"></i>
                    <p class="d-block mt-2">30+ Types of cover option!!</p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-12"></div>
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12 mt-1">
                <h2>
                  Welcome to <a href="">photokrafft.com</a>, Where Your Memories
                  Come to Life
                </h2>
                <p>
                  Potokrafft has been at the forefront of graphic design and
                  album manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="container mt-5 d-none d-lg-block d-md-block">
          <section class="container py-5 mt-5 mb-xl-3 mb-xxl-5">
            <div class="row pt-2">
              {/* <!-- Text + CTA button --> */}
              <div class="col-lg-6">
                <div class="row row-cols-1 row-cols-sm-2 g-1">
                  {/* <!-- Card --> */}
                  <div class="col">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/2.jpg)" }}
                        >
                          <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Strategy
                            </h2>
                          </div>
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Strategy</h3>
                            <p class="text-body mb-3">
                              Leo vitae sem eget eget at in vivamus placerat in
                              sodales tristique a risusiis senectusic vitae sem
                              eget eget at in vivamus placerat in sodales.
                            </p>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/5.jpg)" }}
                        >
                          <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                          </div>
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Social</h3>
                            <ul class="text-body ps-4 mb-3">
                              <li class="mb-2">Social media posts</li>
                              <li class="mb-2">Content plan</li>
                              <li class="mb-2">Advertising launch</li>
                              <li class="mb-2">Photo and video content</li>
                              <li class="mb-1">Cases and portfolio</li>
                            </ul>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col order-sm-2">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/7.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Web design
                            </h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Web design</h3>
                            <p class="text-body mb-3">
                              Pharetra in morbi quis is massa maecenas arcu
                              vulputate in pulvinar elit non nullage a, duis
                              tortor mi massa ipsum in eu eu eget libero.
                            </p>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col order-sm-1">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/3.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Branding
                            </h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Branding</h3>
                            <ul class="text-body ps-4 mb-3">
                              <li class="mb-2">Identity design</li>
                              <li class="mb-2">Brand book creation</li>
                              <li class="mb-2">Colors and fonts</li>
                              <li class="mb-2">Banners and covers</li>
                              <li class="mb-1">Visual style</li>
                            </ul>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Services (Grid of cards) --> */}
              <div class="col-lg-6">
                <div class="row row-cols-1 row-cols-sm-2 g-1">
                  {/* <!-- Card --> */}
                  <div class="col">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/2.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Strategy
                            </h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Strategy</h3>
                            <p class="text-body mb-3">
                              Leo vitae sem eget eget at in vivamus placerat in
                              sodales tristique a risusiis senectusic vitae sem
                              eget eget at in vivamus placerat in sodales.
                            </p>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/5.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Social</h3>
                            <ul class="text-body ps-4 mb-3">
                              <li class="mb-2">Social media posts</li>
                              <li class="mb-2">Content plan</li>
                              <li class="mb-2">Advertising launch</li>
                              <li class="mb-2">Photo and video content</li>
                              <li class="mb-1">Cases and portfolio</li>
                            </ul>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col order-sm-2">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/7.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Web design
                            </h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Web design</h3>
                            <p class="text-body mb-3">
                              Pharetra in morbi quis is massa maecenas arcu
                              vulputate in pulvinar elit non nullage a, duis
                              tortor mi massa ipsum in eu eu eget libero.
                            </p>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* <!-- Card --> */}
                  <div class="col order-sm-1">
                    <a class="card-flip" href="#">
                      <div class="card-flip-inner">
                        <div
                          class="card-flip-front"
                          style={{ backgroundImage: "url(/images/3.jpg)" }}
                        >
                          {/* <div
                            class="d-flex flex-column h-100"
                            data-bs-theme="light"
                          >
                            <h2 class="fs-lg fw-normal mb-0 mt-auto">
                              Branding
                            </h2>
                          </div> */}
                        </div>
                        <div class="card-flip-back bg-secondary">
                          <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                            <h3 class="h4">Branding</h3>
                            <ul class="text-body ps-4 mb-3">
                              <li class="mb-2">Identity design</li>
                              <li class="mb-2">Brand book creation</li>
                              <li class="mb-2">Colors and fonts</li>
                              <li class="mb-2">Banners and covers</li>
                              <li class="mb-1">Visual style</li>
                            </ul>
                            <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                              <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                                <i class="ai-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* <section class="container my-5">
          <div class="row align-items-center">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <img src="images/intro.jpg" alt="photography" class="w-100" />
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div class="card p-5">
                <h2>You Design we Print and Bind</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  maiores soluta qui ducimus magnam quos unde et repudiandae
                  molestias, nulla cupiditate necessitatibus nobis, iure
                  blanditiis inventore. Soluta hic dolores sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  aperiam sunt, omnis alias sequi
                </p>
                <div class="mt-3">
                  <a href="" class="third-button">
                    Start Printing Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
         */}
        <div className="container">
          <div className="d-flex justify-content-center aligns-item-center">
            <div className="p-5">
              <p>What Photokraft provides you ?</p>
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
                Sart your printing journey with us{" "}
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
                      <h2 className="mb-2">Parth Shah</h2>
                      <p className="fs-xl text-muted mb-2">
                        CEO Photokrafft.com
                      </p>
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
                        Q. How do I order an album online?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse show"
                      id="questionOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        Adipiscing sagittis neque egestas id platea accumsan.
                        Morbi inpa platea urna curabitur habitant pulvinar
                        lacinia neque. Netus gravida amet, aliquam quam turpis
                        aliquet cras. Find aute irure dolor in reprehenderit
                        voluptate velit esse cillum dolore eu nulla pariatur.
                        Sit amet, adipiscing elit.
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
                        Q. What paper surfaces are available at the lab?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="questionTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        Quisque rutrum sit amet magna sit amet tristique.
                        Vivamus rhoncus ac purus vitae convallis. Aliquam erat
                        volutpat. Proin egestas, mauris ut semper semper, ipsum
                        felis mattis ligula, et porttitor ante arcu nec ante.
                        Aliquam congue est eu turpis sollicitudin, et
                        ullamcorper tortor aliquam.
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
                        Q. What is the turn around time for an album?
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="questionThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm">
                        Proin ac quam eget velit luctus tincidunt vel in nunc.
                        Maecenas cursus erat lacus, id interdum elit accumsan
                        in. Mauris placerat dapibus sem, condimentum interdum
                        nulla varius ac. Mauris quam mauris, rhoncus et tortor
                        vel, tempus dignissim libero. Curabitur sed odio in odio
                        elementum cursus.
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
            <button class="secondary-button">Chat Now</button>
          </div>
        </footer>
      </section>
    </>
  );
}
