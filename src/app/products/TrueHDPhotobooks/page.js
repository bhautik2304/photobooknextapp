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
                            <li class="breadcrumb-item active" aria-current="page">True HD Photo Books</li>
                        </ol>
                    </nav>

                    <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">

                        <div class="d-block order-lg-2 me-auto me-lg-0 ms-auto" style={{ width: 550, height: "100%" }}>
                            <Slider />
                        </div>
                        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
                            <h1 class="display-2 text-uppercase pb-3 pb-lg-4">True HD Photo Books
                            </h1>
                            <p class="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: "530px" }}>Introducing True HD Photo Books: Where True Vibrancy Meets Timeless Memories <br />
                                True HD Photo Books are more than just albums; they're vibrant, immersive journeys through your most cherished moments. Crafted with precision and passion, TrueHD stands as a testament to the power of preserving memories with unparalleled vibrancy and authenticity.</p>
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
                            <h3 class="h3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2"> True Vibrancy, True Memories
                            </h3>
                            <p class="fs-lg">TrueHD isn't just about printing photos; it's about capturing the true essence and vibrancy of your memories. Our advanced printing technology ensures that every color pops, every detail shines, and every moment feels as vivid and alive as the day it was captured. With True Hd, your memories are more than just images – they're true reflections of the moments that matter most.</p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Unmatched Quality and Craftsmanship</h3>
                            <p class="fs-lg">At True Hd, we believe that your memories deserve the very best. That's why we use only the highest quality materials and the most advanced printing techniques to create photobooks that are as stunning as they are durable. From premium paper stock to luxurious cover materials, every aspect of a TrueHD Photobook is meticulously crafted to ensure that your memories stand the test of time.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Personalized to Perfection
                            </h3>
                            <p class="fs-lg mb-0">Your memories are unique, and your photobook should be too. With True Hd, you have the freedom to customize every aspect of your photobook, from the layout and design to the cover material and finishing touches. Whether you prefer a sleek and modern aesthetic or a classic and timeless look, TrueHD gives you the tools to create a photobook that perfectly reflects your style and personality.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Perfect for Every Occasion
                            </h3>
                            <p class="fs-lg mb-0">True HD Photo Books are perfect for capturing and commemorating all of life's special moments. Whether it's a wedding, a birthday, a graduation, or a family vacation, TrueHD offers a versatile and elegant way to preserve your memories for years to come. With True Hd, every occasion becomes an opportunity to create something truly extraordinary.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Experience True Vibrancy with True Hd
                            </h3>
                            <p class="fs-lg mb-0">Your memories are vibrant, dynamic, and full of life – shouldn't your photobooks be too? Experience the true vibrancy of your memories with True HD Photo Books and embark on a journey through your most cherished moments like never before. Because when it comes to preserving memories, nothing captures the true essence of life quite like True Hd.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page