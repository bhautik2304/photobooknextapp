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
                            <li class="breadcrumb-item active" aria-current="page">The Krafft Book</li>
                        </ol>
                    </nav>

                    <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">
                        <div class="d-block order-lg-2 me-auto me-lg-0 ms-auto" style={{ width: 550, height: "100%" }}>
                            <Slider />
                        </div>
                        {/* <img class="d-block order-lg-2 me-auto me-lg-0 ms-auto" src="/images/ProductKrafftbook.svg" width="550" alt="Image" /> */}
                        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
                            <h1 class="display-2 text-uppercase pb-3 pb-lg-4">THE KRAFFT BOOK
                            </h1>
                            <p class="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: "530px" }}>"The Krafft Book" is an exquisite line of photobooks designed and crafted by Photokrafft, renowned for its elegance, quality, and innovation. Here's a description of "The Krafft Book".</p>
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
                            <h3 class="h3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2"> Introducing The Krafft Book: Where Elegance Meets Innovation
                            </h3>
                            <p class="fs-lg">
                                Step into a world of timeless beauty and unparalleled craftsmanship with The Krafft Book by Photokrafft. Designed to capture and showcase your most cherished memories in stunning detail, The Krafft Book is more than just a photobook – it's a work of art, meticulously crafted to preserve your memories for generations to come.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Innovative Design
                            </h3>
                            <p class="fs-lg">At the heart of The Krafft Book lies a commitment to innovation and design excellence. Each photobook is handcrafted with precision and care, featuring a unique binding system that allows pages to lay flat, ensuring that every image is displayed in all its glory without interruption. The result is a seamless and elegant presentation that showcases your photos like never before.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Luxurious Materials
                            </h3>
                            <p class="fs-lg mb-0">The Krafft Book is a celebration of luxury and sophistication. From the finest leathers and fabrics to the highest quality paper and printing materials, every element of The Krafft Book exudes elegance and refinement. Choose from a wide range of cover materials, colors, and finishes to create a photobook that is as unique and beautiful as your memories.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Endless Customization
                            </h3>
                            <p class="fs-lg mb-0">With The Krafft Book, the possibilities are endless. Customize every aspect of your photobook, from the layout and design to the cover material and embellishments. Whether you prefer a classic and timeless look or a modern and contemporary aesthetic, The Krafft Book gives you the flexibility to create a photobook that perfectly reflects your style and personality.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">A Legacy of Memories
                            </h3>
                            <p class="fs-lg mb-0">More than just a collection of photographs, The Krafft Book is a legacy of memories, a testament to the moments that matter most. Whether it's a wedding, a family vacation, or a milestone celebration, The Krafft Book preserves your memories with grace and elegance, ensuring that they will be cherished for generations to come.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Experience The Krafft Book Difference
                            </h3>
                            <p class="fs-lg mb-0">Elevate your memories to new heights with The Krafft Book by Photokrafft. Experience the beauty, quality, and innovation that have made The Krafft Book a favorite among photographers and clients worldwide. Because when it comes to preserving your memories, nothing compares to The Krafft Book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page