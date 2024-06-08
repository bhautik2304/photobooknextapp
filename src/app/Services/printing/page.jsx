import { appRoutes } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import "./index.css";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";
import Slider from "./Slider";

const blended = [
  "/images/004-min.jpg",
  "/images/005-min.jpg",
  "/images/006-min.jpg",
  "/images/007-min.jpg",
  "/images/008-min.jpg",
  "/images/009-min.jpg",
  "/images/010-min.jpg",
  "/images/011-min.jpg",
  "/images/012-min.jpg",
  "/images/013-min.jpg",
  "/images/014-min.jpg",
  "/images/015-min.jpg",
];

const Classic = [
  "/images/Classic/002-min.jpg",
  "/images/Classic/003-min.jpg",
  "/images/Classic/004-min.jpg",
  "/images/Classic/005-min.jpg",
  "/images/Classic/006-min.jpg",
  "/images/Classic/007-min.jpg",
  "/images/Classic/008-min.jpg",
  "/images/Classic/009-min.jpg",
  "/images/Classic/010-min.jpg",
  "/images/Classic/011-min.jpg",
  "/images/Classic/012-min.jpg",
  "/images/Classic/013-min.jpg",
  "/images/Classic/014-min.jpg",
  "/images/Classic/015-min.jpg",
  "/images/Classic/016-min.jpg",
];
const Clean = [
  "/images/Clean/001-min.jpg",
  "/images/Clean/001-min-1.jpg",
  "/images/Clean/002-min.jpg",
  "/images/Clean/002-min-1.jpg",
  "/images/Clean/003-min.jpg",
  "/images/Clean/003-min-1.jpg",
  "/images/Clean/004-min.jpg",
  "/images/Clean/004-min-1.jpg",
  "/images/Clean/005-min.jpg",
  "/images/Clean/005-min-1.jpg",
  "/images/Clean/006-min.jpg",
  "/images/Clean/006-min-1.jpg",
  "/images/Clean/007-min.jpg",
  "/images/Clean/007-min-1.jpg",
  "/images/Clean/008-min.jpg",
  "/images/Clean/008-min-1.jpg",
  "/images/Clean/009-min.jpg",
  "/images/Clean/009-min-1.jpg",
  "/images/Clean/010-min.jpg",
  "/images/Clean/010-min-1.jpg",
];

function page() {
  const scrollToNextSection = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section class="bg-dark position-relative pt-5">
        <div
          class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(255,255,255, .03)" }}
        ></div>
        <div
          class="container position-relative z-2 py-5 mb-4 mb-sm-5"
          data-bs-theme="dark"
        >
          <div class="row pb-5 mb-2 mb-sm-0 mb-lg-3">
            <div class="col-lg-10 col-xl-9">
              <nav aria-label="breadcrumb">
                <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href={appRoutes.Home}>Home</Link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    <Link href={appRoutes.services}>Services</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Printing Services
                  </li>
                </ol>
              </nav>

              <h1 class="display-2 pb-2 pb-sm-3 text-white">
                Our Printing Technology
              </h1>
              <ul class="list-unstyled d-flex flex-wrap mb-0">
                <li class="d-flex text-white py-1 me-4">
                  <i class="ai-check-alt text-primary lead me-2"></i>
                  Silver Halide RGB Prints
                </li>
                <li class="d-flex text-white py-1 me-4">
                  <i class="ai-check-alt text-primary lead me-2"></i>
                  Digital Offset CMYK Prints
                </li>
              </ul>
              <div className="mt-5">
                {/* <h5 className="text-white">
                  Silver Halide RGB Prints vs. Digital Offset CMYK Prints{" "}
                </h5> */}
                {/* <p className="text-white">
                  For high-quality photo printing, Silver Halide RGB prints and
                  Digital Offset CMYK prints are top technologies. Understanding
                  their differences helps in choosing the best option. Here are
                  the key features, benefits, and applications of each method.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="container position-relative z-3"
        style={{ marginTop: "0" }}
      >
        <center>
          <h3 className="my-2"></h3>
        </center>
        <div class="rounded-5 overflow-hidden">
          <div class="jarallax ratio ratio-16x9" data-jarallax data-speed="0.6">
            <div
              class="jarallax-img"
              style={{
                backgroundImage: "url(/images/RGB.jpg)",
                backgroundSize: 800,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div class="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
          <div class="col-md-6 col-lg-5">
            <div class="fs-sm text-uppercase mb-3">What we do</div>
            <h2 class="h-5">
              Silver Halide RGB Prints: Unmatched Color Fidelity and Longevity
            </h2>
            <h6 class="h-6">What Are Silver Halide RGB Prints?</h6>
            <p>
              Silver Halide prints use traditional photographic processes with
              RGB lasers or LEDs to expose images onto light-sensitive paper.
              Known for exceptional color accuracy and depth, we use Noristu
              Prolabs for printing and offer Fuji Professional and Kodak
              Metallic papers.
            </p>
          </div>
          <div class="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
            <h6>Key Features:</h6>
            <ul>
              <li>
                1. Superior Color Range: Reproduces a broader spectrum of colors
                for vibrant, true-to-life photos.
              </li>
              <li>
                2. High Resolution: Continuous tone technology offers smooth
                gradients and fine detail.
              </li>
              <li>
                3. Durability: Resistant to fading, lasting decades with proper
                care.
              </li>
              <li>
                4. Glossy Finish: Enhances color saturation for a premium look.
              </li>
            </ul>
            <h6>Best For:</h6>
            <ul>
              <li>High-end photo albums</li>
              <li>Professional photography</li>
              <li>Fine art prints</li>
              <li>Long-term archival</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        class="container position-relative z-3 py-5 my-5"
        style={{ marginTop: "0" }}
      >
        <div class="rounded-5 overflow-hidden">
          <div class="jarallax ratio ratio-16x9" data-jarallax data-speed="0.6">
            <div
              class="jarallax-img"
              style={{
                backgroundImage: "url(/images/CMYK.jpg)",
                backgroundSize: 900,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <div class="fs-sm text-uppercase mb-3">What we do</div>
            <h2 class="h-5">
              Digital Offset CMYK Prints: Versatility and Cost - Effectiveness
            </h2>
            <h6 class="h-6">What Are Digital Offset CMYK Prints?</h6>
            <p>
              Digital Offset printing uses Cyan, Magenta, Yellow, and Black
              (CMYK) inks to produce images. This technology is widely used for
              printing a variety of media, from brochures and business cards to
              posters and marketing materials as well as light weight photob
              ooks. We use HP Indigo for all our Digital Offset Prints
            </p>
          </div>
          <div class="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
            <h6>Key Features:</h6>
            <ul>
              <li>
                1. Cost - Effective for Large Runs: Digital Offset is more
                economical for high - volume printing, making it suitable for
                bulk orders
              </li>
              <li>
                2. Quick Turnaround: Faster printing process compared to tra
                ditional methods, ideal for urgent projects.
              </li>
              <li>
                3. Versatile Substrate Options: Can print on a wide range of
                paper types and finishes, including matte, gloss, and satin.
              </li>
              <li>
                4. Good Color Reproduction: While the color range is narrower
                compared to RGB, CMYK prints stil l deliver vibrant and accurate
                colors.
              </li>
            </ul>
            <h6>Best For:</h6>
            <ul>
              <li>Light weight Photobooks or Coffee table books</li>
              <li>Marketing materials</li>
              <li>Posters and flyers</li>
              <li>Short-run custom prints</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
