import { appRoutes } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import "./index.css";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";
import Slider from "./Slider";

const flushMountThick = [
  "/images/Thick Black Sheet.jpg",
  "/images/Thick White Sheet (1).jpg",
  "/images/Thick White Sheet.jpg",
];
const flushMountSlim = ["/images/Slim Thermal Sheet.jpg"];
const PrograssiveVcut = ["/images/progressive_v_cut.jpg", "/images/vcut.jpg"];
function page() {
  const scrollToNextSection = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        class="py-5"
        style={{ height: "100vh", backgroundColor: "#5bb5a22b" }}
      >
        <div class="container text-center pt-5 mt-lg-4 mt-xl-5">
          <div
            class="position-relative mx-auto my-3"
            style={{ maxWidth: "850px" }}
          >
            <h1 class="display-5 position-relative z-2 mb-0">
              Binding Services
            </h1>
            <br />
            <br />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 p-5 text-center">
              <h3>What is Flush Mount Binding?</h3>
              <p>
                Flush mount binding is a high - end bookbinding technique where
                photos are printed on thick, durable pages and mounted edge - to
                - edge. This creates a flat, seamless spread, allowing your
                photos to shine without any interruptions. The result is a
                luxurious, professional - quality album that lies perfectly flat
                when opened, making it ideal for panoramic photos and full -
                page layouts.
              </p>
            </div>
          </div>
        </div>
        <center>
          <a className="btn btn-dark mt-5" href="#FlushmountThick">
            Scroll Down
          </a>
        </center>
      </section>
      <section class="pt-4" id="FlushmountThick" style={{ height: "100vh" }}>
        <div class="container text-start pe-lg-5 pe-md-5 pt-5 mt-lg-4 mt-xl-5">
          <div className="row">
            <div
              class="position-relative mx-auto my-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
              style={{ maxWidth: "850px" }}
            >
              <div>
                <h1 class="display-5 position-relative z-2 mb-0">
                  Flushmount Thick
                </h1>
                <br />
                <p>
                  We offer premium flush mount binding for your photo albums.
                  Our flush mount albums provide a seamless, sophisticated look
                  that beautifully showcases your photos with unmatched
                  durability and elegance. Perfect for weddings, special events,
                  or any cherished memories, our flush mount albums are designed
                  to be treasured for a life time
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <center>
                <Slider img={flushMountThick} />
              </center>
            </div>
          </div>
        </div>
      </section>
      <section
        class="pt-4"
        id="FlushmountThick"
        style={{ height: 780, backgroundColor: "#5bb5a22b" }}
      >
        <div class="container text-start pe-lg-5 pe-md-5 pt-5 mt-lg-4 mt-xl-5">
          <div className="row">
            <div
              class="position-relative mx-auto my-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
              style={{ maxWidth: "850px" }}
            >
              <div>
                <h1 class="display-5 position-relative z-2 mb-0">
                  Flushmount Slim
                </h1>
                <br />
                <p>
                  Flush Mount Thin albums feature the same high - quality, edge
                  - to - edge photo presentation as traditional flush mount
                  albums but with thinner, more lightweight pages. This creates
                  a sleek, modern look without compromising on the seamless
                  spread and durability that flush mount albums are known for.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <center>
                <Slider img={flushMountSlim} />
              </center>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-white" style={{ height: 600 }}>
        <div class="container text-center pt-5 mt-lg-4 mt-xl-5">
          <div
            class="position-relative mx-auto my-3"
            style={{ maxWidth: "850px" }}
          >
            <h1 class="display-5 position-relative z-2 mb-0"></h1>
            <br />
            <br />
          </div>
        </div>
        <div className="container text-center">
          <h3>What is Progressive V Cut Binding?</h3>
          <p>
            Progressive V Cut Binding is an innovative binding method that
            features pages cut in a V shape at the spine. This design allows the
            album to lay completely flat when open, providing a seamless and
            visually striking presentation. The V cut ensures that the pages
            turn smoothly and enhances the durability of the album, making it a
            stylish and practical choice for any photobook collection.
          </p>
          {/* <div className="row"></div> */}
        </div>
        <center>
          <a className="btn btn-dark mt-5" href="#ProgressiveVCutBinding">
            Scroll Down
          </a>
        </center>
      </section>
      <section
        class="pt-4"
        id="ProgressiveVCutBinding"
        style={{ height: "100vh" }}
      >
        <div class="container text-start pe-lg-5 pe-md-5 pt-5 mt-lg-4 mt-xl-5">
          <div className="row  pt-5">
            <div
              class="position-relative mx-auto my-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
              style={{ maxWidth: "850px" }}
            >
              <div>
                <h1 class="display-5 position-relative z-2 mb-0">
                  Progressive <br />V Cut Binding
                </h1>
                <br />
                <p>
                  We offer Progressive V Cut Binding for your TrueHD Photobooks,
                  which are printed on 8 Color HP Indigo Digital Offset
                  Technology. This cutting - edge binding technique combines
                  durability with a sleek, modern design, making it the perfect
                  choice for preserving and showcasing your most cherished
                  memories. Whether it’s a wedding, family reunion, or special
                  celebration, our Progressive V Cut Binding albums provide a
                  unique and elegant way to present your photos in a light
                  weight photobook.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <center>
                <Slider img={PrograssiveVcut} />
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
