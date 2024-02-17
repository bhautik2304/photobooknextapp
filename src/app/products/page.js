import { ProductCardSwiper } from "@/components"
import Script from 'next/script'
import Link from 'next/link'
import { appRoutes } from "@/constants"
export default function page() {

  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="position-relative bg-dark pt-lg-4 pt-xl-5">
        <div className="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax data-speed="0.4">
          <div className="jarallax-img" style={{ backgroundImage: "url(assets/img/landing/saas-4/hero-bg-pattern.png)" }}></div>
        </div>
        <div className="container position-relative z-2 pt-2 pt-sm-4 pt-md-5">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-9 col-xl-8 text-center pt-5 mt-1">
              <Link href={appRoutes.StartPrinting} className="d-inline-flex align-items-center fs-sm fw-semibold text-decoration-none bg-warning bg-opacity-10 text-warning rounded-pill py-2 px-3">
                <span className="fw-semibold lh-sm"> Start Ordering</span>
                <i className="ai-arrow-right fs-lg ms-2 me-n1"></i>
              </Link>
              <h1 className="display-5 text-white pt-3 mt-3 mb-4">Welcome to photokrafft.com , Where Your Memories Come to Life</h1>
              <p className="text-white opacity-70 fs-xl">Our signature products include exquisite flush mount albums and photobook albums, meticulously crafted to preserve your cherished memories in timeless elegance.</p>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block" style={{ height: "480px" }}></div>
        <div className="d-lg-none" style={{ height: "400px" }}></div>
        <div className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style={{ color: "var(--ar-body-bg)" }}>
          <div className="position-relative start-50 translate-middle-x flex-shrink-0" style={{ width: "3774px" }}>
            <svg width="3774" height="201" viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor" /></svg>
          </div>
        </div>
      </section>

      {/* <!-- Benefits --> */}
      <section class="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div class="row gy-3 pb-sm-3 pb-md-4 pb-lg-5">
          <div class="col-sm-6 col-lg-6">
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0 bg-primary rounded-1 p-2">
                <svg class="text-white" width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.251 13.8502C26.0512 11.5597 25.2134 9.37118 23.8326 7.53287C22.4518 5.69455 20.5834 4.2801 18.4394 3.45005C16.2953 2.61999 13.9615 2.40757 11.7029 2.83689C9.44419 3.26622 7.35109 4.32009 5.66111 5.87891C3.40499 7.95157 2.01112 10.7971 1.75643 13.8502C1.73566 14.0918 1.76535 14.3351 1.8436 14.5647C1.92185 14.7942 2.04696 15.005 2.211 15.1836C2.37503 15.3623 2.5744 15.5049 2.79647 15.6024C3.01853 15.6999 3.25843 15.7501 3.50096 15.75H13.126V21.875C13.126 22.8033 13.4947 23.6935 14.1511 24.3499C14.8075 25.0063 15.6977 25.375 16.626 25.375C17.5542 25.375 18.4445 25.0063 19.1008 24.3499C19.7572 23.6935 20.126 22.8033 20.126 21.875C20.126 21.6429 20.0338 21.4204 19.8697 21.2563C19.7056 21.0922 19.483 21 19.251 21C19.0189 21 18.7963 21.0922 18.6322 21.2563C18.4681 21.4204 18.376 21.6429 18.376 21.875C18.376 22.3391 18.1916 22.7843 17.8634 23.1124C17.5352 23.4406 17.0901 23.625 16.626 23.625C16.1618 23.625 15.7167 23.4406 15.3885 23.1124C15.0603 22.7843 14.876 22.3391 14.876 21.875V15.75H24.501C24.7439 15.7509 24.9844 15.7012 25.2072 15.604C25.4299 15.5068 25.6299 15.3644 25.7945 15.1856C25.9592 15.0069 26.0848 14.7959 26.1633 14.566C26.2419 14.336 26.2718 14.0923 26.251 13.8502ZM3.50096 14C3.69489 11.746 4.61052 9.61458 6.11193 7.92225C7.61334 6.22991 9.62047 5.06687 11.8353 4.60578C10.5535 6.34375 8.9533 9.41828 8.76955 14H3.50096ZM10.5174 14C10.6694 10.6345 11.6691 8.22391 12.5189 6.755C12.938 6.02531 13.4349 5.3432 14.001 4.72063C14.566 5.34329 15.0618 6.02541 15.4797 6.755C16.9322 9.26406 17.3916 11.9525 17.4813 14H10.5174ZM19.2291 14C19.0453 9.41828 17.4452 6.34375 16.1666 4.60031C18.3829 5.06038 20.3914 6.22384 21.8931 7.91752C23.3949 9.6112 24.3095 11.7445 24.501 14H19.2291Z" />
                </svg>
              </div>
              <h3 class="h5 ms-3 mb-0">Your One-Stop Printing Solution</h3>
            </div>
            <p class="fs-sm" style={{paddingRight:'20%'}} >Exceptional printing services; it demands a comprehensive solution that encompasses creativity, quality, and convenience. That's why we're proud to offer our clients a one-stop printing solution designed to streamline the entire process from start to finish.</p>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0 bg-primary rounded-1 p-2">
                <svg class="text-white" width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.5541C3.5 22.3552 11.7928 25.6069 13.4531 26.1592C13.8077 26.2798 14.1923 26.2798 14.5469 26.1592C16.2094 25.6069 24.5 22.3552 24.5 12.5541V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.493 23.998 14 24.4967C12.5202 24.0034 5.25 21.14 5.25 12.5552V6.125H22.75V12.5552ZM9.00594 15.4941C8.84175 15.3299 8.74951 15.1072 8.74951 14.875C8.74951 14.6428 8.84175 14.4201 9.00594 14.2559C9.17012 14.0918 9.39281 13.9995 9.625 13.9995C9.85719 13.9995 10.0799 14.0918 10.2441 14.2559L12.25 16.2619L17.7559 10.7559C17.8372 10.6746 17.9337 10.6102 18.04 10.5662C18.1462 10.5222 18.26 10.4995 18.375 10.4995C18.49 10.4995 18.6038 10.5222 18.71 10.5662C18.8163 10.6102 18.9128 10.6746 18.9941 10.7559C19.0754 10.8372 19.1398 10.9337 19.1838 11.04C19.2278 11.1462 19.2505 11.26 19.2505 11.375C19.2505 11.49 19.2278 11.6038 19.1838 11.71C19.1398 11.8163 19.0754 11.9128 18.9941 11.9941L12.8691 18.1191C12.7878 18.2004 12.6913 18.265 12.5851 18.309C12.4788 18.353 12.365 18.3757 12.25 18.3757C12.135 18.3757 12.0212 18.353 11.9149 18.309C11.8087 18.265 11.7122 18.2004 11.6309 18.1191L9.00594 15.4941Z" />
                </svg>
              </div>
              <h3 class="h5 ms-3 mb-0">Consistency and Trust</h3>
            </div>
            <p class="fs-sm">At Photokrafft, consistency and trust in our printing quality are paramount. With meticulous attention to detail and unwavering dedication, we ensure that every print reflects the highest standards. Clients rely on us for reliable, consistent results, fostering trust in our ability to deliver excellence time and time again.</p>
          </div>
        </div>
      </section>

      {/* <!-- Services: Car insurance --> */}
      <section class=" pb-5">
        <div class="container pb-sm-3 mb-md-2 mb-lg-3">
          <div class="row g-4">
            <div class="col-md-7" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
              <img class="object-fit-cover rounded-3" width="800px" src="assets/img/graphics/card-green.svg" alt="Image" />
            </div>
            <div class="col-md-5" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
              <div class="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                <h2 class="mb-xl-4">Flush Mount Albums</h2>
                <p class="mb-4 mb-xl-5">Elevate your special moments with our luxurious flush mount albums. Handcrafted with precision and attention to detail, these albums feature seamless, lay-flat pages that showcase your photographs in stunning clarity. Choose from a range of premium materials, including fine leathers, elegant fabrics, and high-quality papers, to customize your album and reflect your unique style. Whether it's a wedding, a milestone celebration, or a professional portfolio, our flush mount albums are the perfect keepsake to treasure for years to come.</p>
                <div class="mt-auto">
                  <a class="btn btn-outline-primary" href="#">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* <!-- Services: Travel insurance --> */}
      <section class="overflow pb-5">
        <div class="container pb-sm-3 mb-md-2 mb-lg-3">
          <div class="row g-4">
            <div class="col-md-7 order-md-2" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
              <img class="object-fit-cover rounded-3" width="800px" src="assets/img/graphics/card-green.svg" alt="Image" />
            </div>
            <div class="col-md-5 order-md-1" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
              <div class="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                <h2 class="mb-xl-4">Photobook Albums</h2>
                <p class="mb-4 mb-xl-5">Immerse yourself in the art of storytelling with our photobook albums. Combining cutting-edge printing technology with exquisite design, these albums offer a versatile and modern way to preserve your memories. From sleek and contemporary layouts to classic and timeless designs, our photobook albums are fully customizable to suit your preferences. With options for various sizes, finishes, and cover materials, you can create a personalized album that perfectly encapsulates your vision.</p>
                
                <div class="mt-auto">
                  <a class="btn btn-outline-primary" href="#">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="bg-black py-4" data-bs-theme="dark">
        <div class="container fs-lg text-white text-center">Our dedicated team of Photokrafft is prepared to assist you. <a class="text-white" href="https://wa.me/919227232123">Talk to our Customer Support</a></div>
      </div>
    </>
  )
}