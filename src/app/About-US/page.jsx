import React from "react";
import { AboutApproach } from "@/components";
import Image from "next/image";

function page() {
  return (
    <>
      <main class="page-wrapper">
        {/* <!-- Hero --> */}
        <section class="bg-dark position-relative py-5">
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
                {/* <!-- Breadcrumb --> */}
                {/* <!-- Breadcrumb --> */}
                {/* <nav aria-label="breadcrumb">
                                    <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                                        <li class="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">About us</li>
                                    </ol>
                                </nav> */}

                <h1 class="display-3 pb-2 pb-sm-3 text-white">
                  Introducing Photokrafft: Elevating Visual Experiences Globally
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About --> */}
        <section
          class="container position-relative z-3"
          style={{ marginTop: "-135px" }}
        >
          <div class="rounded-5 overflow-hidden">
            <div
              class="jarallax ratio ratio-16x9"
              data-jarallax
              data-speed="0.6"
            >
              <div
                class="jarallax-img"
                style={{ backgroundImage: "url(/images/AllAlbums.svg)" }}
              ></div>
            </div>
          </div>
          <div class="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
            <div class="col-md-6 col-lg-5">
              <div class="fs-sm text-uppercase mb-3">What we do</div>
              <h2 class="display-7">
                Photokrafft has been at the forefront of graphic design and
                album manufacturing.
              </h2>
            </div>
            <div class="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
              <p class="fs-xl">
                Welcome to Photokrafft, where creativity meets craftsmanship.
                Established in 2007 in the vibrant landscape of India,
                Photokrafft has been at the forefront of graphic design and
                album manufacturing, shaping visual narratives that captivate
                and inspire. With a relentless passion for innovation and an
                unwavering commitment to quality, we have proudly expanded our
                horizons, now bringing our expertise to the international market
                since 2016.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Approach --> */}
        <section class="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
          <div class="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
            <div class="fs-sm text-uppercase mb-3">Our Mission</div>
            <h2 class="display-6 pb-3 mb-lg-4">Professional approach </h2>
            <AboutApproach />
          </div>
        </section>

        {/* <!-- How we work (Steps) --> */}
        <section class="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5 my-5">
          <div class="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
            <div class="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
              <div
                class="ratio ratio-1x1 d-flex align-items-center position-relative overflow-hidden bg-size-cover mx-auto"
                style={{ maxWidth: "530px" }}
              >
                <div class="bg-white position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="position-relative z-2 p-4" data-bs-theme="light">
                  <div class="mx-auto" style={{ maxWidth: "275px" }}>
                    <Image
                      src={"/assets/img/logo.png"}
                      width={900}
                      height={150}
                    />
                  </div>
                  <br />
                  <br />
                  <h2 class="display-7">
                    What sets Photokrafft apart is not just our expertise in
                    graphic design and album manufacturing,
                  </h2>
                  <br />
                  <br />
                  <p class="fs-xl">
                    Welcome to Photokrafft, where creativity meets
                    craftsmanship. Established in 2007 in the vibrant landscape
                    of India, Photokrafft has been at the forefront of graphic
                    design and album manufacturing, shaping visual narratives
                    that captivate and inspire. With a relentless passion for
                    innovation and an unwavering commitment to quality, we have
                    proudly expanded our horizons, now bringing our expertise to
                    the international market since 2016.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-5 offset-xl-1">
              <div class="ps-md-4 ps-xl-0">
                <div class="steps steps-hoverable">
                  <div class="step py-3 py-xl-4">
                    <div class="step-number">
                      <div class="step-number-inner">01</div>
                    </div>
                    <div class="step-body">
                      <h3 class="h5 pb-1 mb-2">Pre-Production Planning</h3>
                      <p class="mb-0">
                        Our team collaborates closely with clients to understand
                        their requirements and preferences, determining the
                        size, layout, and design elements of the album.
                      </p>
                    </div>
                  </div>
                  <div class="step py-3 py-xl-4">
                    <div class="step-number">
                      <div class="step-number-inner">02</div>
                    </div>
                    <div class="step-body">
                      <h3 class="h5 pb-1 mb-2">Printing and Assembly</h3>
                      <p class="mb-0">
                        Once the design has been finalized, the printing and
                        assembly process begins. Photokrafft utilizes
                        state-of-the-art printing equipment and techniques to
                        reproduce high-resolution images with stunning clarity
                        and color accuracy.
                      </p>
                    </div>
                  </div>
                  <div class="step py-3 py-xl-4">
                    <div class="step-number">
                      <div class="step-number-inner">03</div>
                    </div>
                    <div class="step-body">
                      <h3 class="h5 pb-1 mb-2">Quality Control</h3>
                      <p class="mb-0">
                        This includes checking for image clarity, color
                        consistency, page alignment, and structural integrity.
                        Any deviations from our quality benchmarks are addressed
                        promptly to maintain the highest level of excellence.
                      </p>
                    </div>
                  </div>
                  <div class="step py-3 py-xl-4">
                    <div class="step-number">
                      <div class="step-number-inner">04</div>
                    </div>
                    <div class="step-body">
                      <h3 class="h5 pb-1 mb-2">Packaging and Shipping</h3>
                      <p class="mb-0">
                        Once the album has passed our stringent quality checks,
                        it undergoes final packaging and preparation for
                        shipping. Photokrafft takes great care to package each
                        album securely to prevent damage during transit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
