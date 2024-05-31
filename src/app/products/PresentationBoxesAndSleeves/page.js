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
                            <li class="breadcrumb-item active" aria-current="page">Presentation Boxes & Sleeves
                            </li>
                        </ol>
                    </nav>

                    <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">

                        <div class="d-block order-lg-2 me-auto me-lg-0 ms-auto" style={{ width: 550, height: "100%" }}>
                            <Slider />
                        </div>
                        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
                            <h1 class="display-2 text-uppercase pb-3 pb-lg-4">Presentation Boxes & Sleeves

                            </h1>
                            <p class="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: "530px" }}>We offer beautifully designed presentation boxes and sleeves to complement and protect your
                                cherished photobooks, albums, and other keepsakes. Our premium packaging solutions are
                                crafted to add a touch of elegance and sophistication, making them perfect for
                                gifting and
                                preserving your memories.</p>
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
                            <h3 class="h3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2"> Superior
                                Quality
                                Materials
                            </h3>
                            <p class="fs-lg">We use high
                                -
                                quality materials to ensure durability and a luxurious feel. Our boxes and
                                sleeves are designed to protect your photobooks and albums
                                while adding an extra
                                layer of elegance.</p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Elegant
                                Designs
                            </h3>
                            <p class="fs-lg mb-0">Choose from a variety of stylish designs and finishes, including classic linen, sleek
                                leatherette, and vibrant colors. Each design is crafted to enhance the beauty of your
                                keepsake.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Customizable
                                Options</h3>
                            <p class="fs-lg">Personalize your presentation boxes and sleeves with custom text, logos, or designs.
                                Make your packaging as unique as the memories it holds.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Ideal Occasions for Presentation Boxes & Sleeves
                            </h3>
                            <p class="fs-lg mb-0"><b>Weddings</b>
                                : Present your wedding album in a luxurious box or
                                sleeve to keep your
                                memories safe and stylish
                            </p>
                            <p class="fs-lg mb-0"><b>Baby
                                Showers</b>
                                : Gift a baby photobook in a charming presentation box for an extra
                                special touch.
                            </p>
                            <p class="fs-lg mb-0"><b>Anniversaries</b>
                                : Celebrate milestones with beautifully packaged photo albums.
                            </p>
                            <p class="fs-lg mb-0">
                                <b> Holidays </b>: Give the gift of memories wi
                                th photobooks or albums presented in elegant
                                packaging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page