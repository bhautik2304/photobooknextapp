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
      <section id="design">
        <div class="container text-center pt-5 mt-lg-4 mt-xl-5">
          <div
            class="position-relative mx-auto my-3"
            style={{ maxWidth: "850px" }}
          >
            <h1 class="display-5 position-relative z-2 mb-0">Our Designs</h1>
            <br />
            <p className="fs-4">Tailered Styles for Every Occassion</p>
          </div>
        </div>
      </section>
      <section class="blended my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="heading"
                style={{ padding: "3em 0 0", position: "relative" }}
              >
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    fontWeight: 600,
                  }}
                >
                  Blended Style
                </h2>
                <p class="mb-5 col-lg-6 col-12">
                  Designing a blended style photo album involves seamlessly
                  integrating photos with backgrounds, borders, and overlays,
                  creating a cohesive, artistic look that enhances storytelling
                  with soft edges and creative, professional transitions.
                </p>
                <center>
                  <Slider img={blended} />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blended my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="heading"
                style={{ padding: "3em 0 0", position: "relative" }}
              >
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    fontWeight: 600,
                  }}
                >
                  Classic Style
                </h2>
                <p class="mb-5 col-lg-6 col-12">
                  Classic style design combines modern, stylish layouts to
                  create a sophisticated look, blending timeless elegance with
                  contemporary elements, resulting in an album that exudes both
                  tradition and chic modernity.
                </p>
                <center>
                  <Slider img={Classic} />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blended my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="heading"
                style={{ padding: "3em 0 0", position: "relative" }}
              >
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    fontWeight: 600,
                  }}
                >
                  Clean Style
                </h2>
                <p class="mb-5 col-lg-6 col-12">
                  Clean style design offers various innovative looks and
                  multiple layout options, ensuring each image creates a fresh,
                  memorable impression while maintaining a sleek, modern
                  aesthetic. Two Styles in the same category,again offers
                  options to the users.
                </p>
                <center>
                  <Slider img={Clean} />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
