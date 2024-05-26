import Link from 'next/link'
import React from 'react'
import { appRoutes } from "@/constants"
import Slider from './Slider'

function page() {
    return (
        <>
            <section class="bg-secondary position-relative py-5 mb-5">
                <div class="bg-secondary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
                <div class="bg-secondary position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
                <div class="container position-relative z-2 py-5 pb-lg-0">

                    <nav aria-label="breadcrumb">
                        <ol class="pt-lg-2 pb-1 breadcrumb">
                            <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link href={appRoutes.Products}>Products</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Baby Books</li>
                        </ol>
                    </nav>

                    <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">
                        <div class="d-block order-lg-2 me-auto me-lg-0 ms-auto" style={{ width: 550, height: "100%", backgroundColor: 'transparent' }}>
                            <Slider />
                        </div>
                        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
                            <h1 class="display-2 text-uppercase pb-3 pb-lg-4">Baby Books
                            </h1>
                            <p class="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: "530px" }}>Celebrate the magical journey of motherhood and your baby's milestones with our premium, customizable photo albums. Designed to preserve your cherished memories in the most elegant way, our albums make perfect keepsakes for you and your loved ones.</p>
                        </div>
                    </div>
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
            </section>
            <section class="container pt-lg-2 pt-xl-4 pt-xxl-5">
                <div class="row py-sm-3 py-md-4 py-lg-5">
                    <div class="col-md-9 offset-lg-1">
                        <div class="ps-md-4 ps-lg-0">
                            <div class="border-bottom pb-3 pb-sm-4 pb-lg-5 mb-4">

                            </div>
                            <h3 class="h3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2"> Superior Quality
                            </h3>
                            <p class="fs-lg">We use top-grade materials to ensure that your albums remain pristine over time. Our albums feature thick, durable pages and vibrant, high-resolution printing to showcase your photos beautifully.</p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Personalized Covers
                            </h3>
                            <p class="fs-lg mb-0">Choose from a wide variety of stunning materials and designs. Our customizable options allow you to personalize each page with different layouts, backgrounds, and text, creating a unique narrative for your journey along with soft and elegant cover materials.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">User-Friendly Creation Process</h3>
                            <p class="fs-lg">Our easy-to-use online platform simplifies the creation process. Upload your photos, arrange them in your chosen template, and add personalized touches with ease.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Perfect Gift Option
                            </h3>
                            <p class="fs-lg mb-0">Our albums make heartfelt gifts for baby showers, new parents, grandparents, and more. Give the gift of memories beautifully preserved.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Fast Delivery and Excellent Service
                            </h3>
                            <p class="fs-lg mb-0">Enjoy quick turnaround times and reliable shipping, ensuring you receive your album promptly and in perfect condition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page