import { ProductCardSwiper } from "@/components"
import Script from 'next/script'
import Link from 'next/link'
import { appRoutes } from "@/constants"

export default function page() {

  return (
    <>
      <section class="">
        <div class="container pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">

          {/* <!-- Breadcrumb --> */}
          <nav aria-label="breadcrumb">
            <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
          </nav>

          {/* <!-- Page title --> */}
          <h1 class="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">Our Products</h1>

          {/* <!-- Item --> */}
          <article class="row align-items-center card-hover pb-5 mb-md-3 mb-lg-4 mb-xl-5 pt-5" data-aos="fade-up" id="FlushMountAlbums" data-aos-duration="600" data-aos-offset="280">
            <div class="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <Link href={`${appRoutes.Products}/FlushMountAlbums`}>
                <img class="rounded-5" src="images/ProductFlushMountAlbums.svg" width="700" alt="Image" />
              </Link>
            </div>
            <div class="col-md-5 col-xl-4" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
              <div class="ms-md-4 ms-lg-5 ms-xxl-0" style={{ maxWidth: 400 }}>
                {/* <div class="text-body-secondary mb-2"><img class="d-block d-dark-mode-none mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" />
                  <img class="d-none d-dark-mode-block mb-2 mb-lg-3" width={50} src="/images/loader.png" alt="photokrafft" /></div> */}
                <h2 class="mb-lg-4">
                  <Link href={`${appRoutes.Products}/FlushMountAlbums`}>Flush Mount Albums</Link>
                </h2>
                <p class="mb-0 mb-md-1 mb-lg-3">Flush mount albums are a beautiful way to preserve and showcase your cherished memories. Unlike traditional photo albums, flush mount albums feature pages that are thick and rigid, creating a seamless and elegant presentation of your photos.</p>
                <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/FlushMountAlbums`}>Get More Details</Link>
                <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              </div>
            </div>
          </article>

          {/* <!-- Item --> */}
          <article class="row align-items-center card-hover pb-5 mb-md-3 mb-lg-4 mb-xl-5 pt-5" id="TrueVibPhotobooks" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280">
            <div class="col-md-7 order-md-2 mb-4 mb-md-0">
              <Link href={`${appRoutes.Products}/TrueVibPhotobooks`}>
                <img class="rounded-5" src="images/ProductPhotobooks.svg" width="700" alt="Image" />
              </Link>
            </div>
            <div class="col-md-5 col-xl-4 offset-xxl-1 order-md-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
              <div class="me-md-4 me-lg-5 me-xxl-0" style={{ maxWidth: 400 }}>
                {/* <div class="text-body-secondary mb-2">Branding</div> */}
                <h2 class="mb-lg-4">
                  <Link href={`${appRoutes.Products}/TrueVibPhotobooks`}>TruVib Photobooks</Link>
                </h2>
                <p class="mb-0 mb-md-1 mb-lg-3">TruVib Photobooks are more than just albums; they're vibrant, immersive journeys through your most cherished moments. Crafted with precision and passion.</p>
                <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/TrueVibPhotobooks`}>Get More Details</Link>
                <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              </div>
            </div>
          </article>

          {/* <!-- Item --> */}
          <article class="row align-items-center card-hover pb-5 mb-md-3 mb-lg-4 mb-xl-5 pt-5" id="TheKrafftBook" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280">
            <div class="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <Link href={`${appRoutes.Products}/TheKrafftBook`}>
                <img class="rounded-5" src="images/ProductKrafftbook.svg" width="700" alt="Image" />
              </Link>
            </div>
            <div class="col-md-5 col-xl-4" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
              <div class="ms-md-4 ms-lg-5 ms-xxl-0" style={{ maxWidth: 400 }}>
                {/* <div class="text-body-secondary mb-2">Identity, Packaging</div> */}
                <h2 class="mb-lg-4"><Link href={`${appRoutes.Products}/TheKrafftBook`}>The Krafft Book</Link></h2>
                <p class="mb-0 mb-md-1 mb-lg-3">"The Krafft Book" is an exquisite line of photobooks designed and crafted by Photokrafft, renowned for its elegance, quality, and innovation.</p>
                <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${appRoutes.Products}/TheKrafftBook`}>Get More Details</Link>
                <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              </div>
            </div>
          </article>

          {/* <!-- Item --> */}
          <article class="row align-items-center card-hover pb-5 mb-md-3 mb-lg-4 mb-xl-5 pt-5" data-aos="fade-up" id="PresentationBoxesAndBags" data-aos-duration="600" data-aos-offset="280">
            <div class="col-md-7 order-md-2 mb-4 mb-md-0">
              <Link href={"#"}>
                <img class="rounded-5" src="images/prasentationsboxandsleeve.svg" width="700" alt="Image" />
              </Link>
            </div>
            <div class="col-md-5 col-xl-4 offset-xxl-1 order-md-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
              <div class="me-md-4 me-lg-5 me-xxl-0" style={{ maxWidth: 400 }}>
                {/* <div class="text-body-secondary mb-2">Branding</div> */}
                <h2 class="mb-lg-4">
                  <Link href={"#"}>Presentation Boxes & Bags</Link>
                </h2>
                <p class="mb-0 mb-md-1 mb-lg-3">TruVib Photobooks are more than just albums; they're vibrant, immersive journeys through your most cherished moments. Crafted with precision and passion.</p>
                <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`#`}>Get More Details</Link>
                <Link class="btn btn-sm btn-outline-success rounded-pill mx-2" href={appRoutes.StartPrinting}>Order Now</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div style={{
        position: "-webkit - sticky",
        position: "sticky",
        bottom: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem 0",
      }}>
        Explore our product range !!
        <div class="btn-group ms-2" role="group">
          <Link
            href={"#FlushMountAlbums"}
            // type="button"
            class="btn btn btn-outline-light mx-2 rounded btn-sm pro"
            style={{
              fontWeight: 500
            }}
          >
            Flush Mount Albums
          </Link>
          <Link
            href={"#TrueVibPhotobooks"}
            // type="button"
            class="btn btn btn-outline-light mx-2 rounded btn-sm pro"
            style={{
              fontWeight: 500
            }}
          >
            TruVib Photobooks
          </Link>
          <Link
            href={"#TheKrafftBook"}
            // type="button"
            class="btn btn btn-outline-light mx-2 rounded btn-sm pro"
            style={{
              fontWeight: 500
            }}
          >
            The Krafft Book
          </Link>
          <Link
            href={"#PresentationBoxesAndBags"}
            // type="button"
            class="btn btn btn-outline-light mx-2 rounded btn-sm pro"
            style={{
              fontWeight: 500
            }}
          >
            Boxes & Bags
          </Link >
        </div >
      </div >
      {/* <!-- Hero section --> */}
      <div div class="bg-black py-4" data-bs-theme="dark" >
        <div class="container fs-lg text-white text-center">Our dedicated team of Photokrafft is prepared to assist you. <a class="text-white" href="https://tawk.to/photokrafftsupport" target="_blank">Talk to our Customer Support</a></div>
      </div >

    </>
  )
}