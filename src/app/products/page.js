import { ProductCardSwiper } from "@/components"
import Script from 'next/script'
import Link from 'next/link'
import { appRoutes } from "@/constants"
export default function page() {

  return (
    <>
      <section class="container pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">

        <nav aria-label="breadcrumb">
          <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>

        <h1 class="pb-5">Our Product Range</h1>

        {/* <!-- Item --> */}
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div class="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a class="d-block position-relative" href="portfolio-single-v1.html">
              <div class="rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img class="d-block position-relative z-2 mx-auto" style={{ borderRadius: 10 }} src="images/ProductFlushMountAlbums.jpg" width="600" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div class="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div class="ps-md-3 ps-lg-0">
              <img class="d-block d-dark-mode-none mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <img class="d-none d-dark-mode-block mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <h2 class="h4">Flush Mount Albums</h2>
              <p class="fs-sm pb-3 pb-lg-4 mb-3">Flush mount albums are a beautiful way to preserve and showcase your cherished memories. Unlike traditional photo albums, flush mount albums feature pages that are thick and rigid, creating a seamless and elegant presentation of your photos. Here's some content about flush mount albums.</p>
              <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/FlushMountAlbums`}>Get More Details</Link>
              <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              <div class="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <div className="d-flex">
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3"
                    href="https://www.facebook.com/photokrafft?mibextid=LQQJ4d"
                  >
                    <i className="ai-facebook"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3"
                    href="https://www.instagram.com/photokrafftofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  >
                    <i className="ai-instagram"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle"
                    href="https://www.linkedin.com/company/photokrafft/?originalSubdomain=in"
                  >
                    <i className="ai-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div class="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a class="d-block position-relative" href="portfolio-single-v1.html">
              <div class="rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img class="d-block position-relative z-2 mx-auto" style={{ borderRadius: 10 }} src="images/ProductPhotobooks.jpg" width="600" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div class="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div class="ps-md-3 ps-lg-0">
              <img class="d-block d-dark-mode-none mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <img class="d-none d-dark-mode-block mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <h2 class="h4">TruVib Photobooks</h2>
              <p class="fs-sm pb-3 pb-lg-4 mb-3">Introducing TruVib Photobooks: Where True Vibrancy Meets Timeless Memories</p>
              <p>
                TruVib Photobooks are more than just albums; they're vibrant, immersive journeys through your most cherished moments. Crafted with precision and passion.
              </p>
              <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/TrueVibPhotobooks`}>Get More Details</Link>
              <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              <div class="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <div className="d-flex">
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3"
                    href="https://www.facebook.com/photokrafft?mibextid=LQQJ4d"
                  >
                    <i className="ai-facebook"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3"
                    href="https://www.instagram.com/photokrafftofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  >
                    <i className="ai-instagram"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle"
                    href="https://www.linkedin.com/company/photokrafft/?originalSubdomain=in"
                  >
                    <i className="ai-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div class="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a class="d-block position-relative" href="portfolio-single-v1.html">
              <div class="rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img class="d-block position-relative z-2 mx-auto" style={{ borderRadius: 10 }} src="images/ProductKrafftbook.jpg" width="600" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div class="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div class="ps-md-3 ps-lg-0">
              <img class="d-block d-dark-mode-none mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <img class="d-none d-dark-mode-block mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
              <h2 class="h4">The Krafft Book</h2>
              <p class="fs-sm pb-3 pb-lg-4 mb-3">"The Krafft Book" is an exquisite line of photobooks designed and crafted by Photokrafft, renowned for its elegance, quality, and innovation. Here's a description of "The Krafft Book".</p>
              <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/TheKrafftBook`}>Get More Details</Link>
              <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              <div class="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <div className="d-flex">
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3"
                    href="https://www.facebook.com/photokrafft?mibextid=LQQJ4d"
                  >
                    <i className="ai-facebook"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3"
                    href="https://www.instagram.com/photokrafftofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  >
                    <i className="ai-instagram"></i>
                  </a>
                  <a
                    className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle"
                    href="https://www.linkedin.com/company/photokrafft/?originalSubdomain=in"
                  >
                    <i className="ai-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero section --> */}
      <div class="bg-black py-4" data-bs-theme="dark">
        <div class="container fs-lg text-white text-center">Our dedicated team of Photokrafft is prepared to assist you. <a class="text-white" href="https://wa.me/919227232123">Talk to our Customer Support</a></div>
      </div>
    </>
  )
}