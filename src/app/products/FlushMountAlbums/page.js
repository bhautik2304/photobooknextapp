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
                <div class="bg-secondary container position-relative z-2 py-5 pb-lg-0">

                    <nav aria-label="breadcrumb">
                        <ol class="pt-lg-2 pb-1 breadcrumb">
                            <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link href={appRoutes.Products}>Products</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Flush Mount Albums</li>
                        </ol>
                    </nav>

                    <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">
                        <div class="d-block order-lg-2 me-auto me-lg-0 ms-auto" style={{ width: 550, height: "100%" }}>
                            <Slider />
                        </div>
                        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
                            <h1 class="display-2 text-uppercase pb-3 pb-lg-4">Flush Mount Albums</h1>
                            <p class="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: "530px" }}>Flush mount albums are a beautiful way to preserve and showcase your cherished memories. Unlike traditional photo albums, flush mount albums feature pages that are thick and rigid, creating a seamless and elegant presentation of your photos. Here's some content about flush mount albums.</p>
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
            {/* <Slider /> */}
            <section class="container pt-lg-2 pt-xl-4 pt-xxl-5">
                <div class="row py-sm-3 py-md-4 py-lg-5">
                    <div class="col-md-9 offset-lg-1">
                        <div class="ps-md-4 ps-lg-0">
                            <div class="border-bottom pb-3 pb-sm-4 pb-lg-5 mb-4">

                            </div>
                            <h3 class="h3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2"> Preserving Memories in Style: The Beauty of Flush Mount Albums</h3>
                            <p class="fs-lg">Every milestone, every moment captured through the lens tells a story. Whether it's your wedding day, a family reunion, or a special anniversary, these memories deserve more than just a digital existence. Enter flush mount albums – a timeless way to turn your photographs into a tangible work of art.

                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">What are Flush Mount Albums?</h3>
                            <p class="fs-lg">Flush mount albums are a premium option for preserving your most treasured memories. Unlike traditional photo albums where pictures are attached to the pages, flush mount albums feature thick, rigid pages onto which photos are directly printed. This creates a seamless, professional look with photos that span across the entire spread, uninterrupted by borders or gutters.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Craftsmanship and Quality</h3>
                            <p class="fs-lg mb-0">The craftsmanship of flush mount albums is unparalleled. Each album is meticulously handcrafted with attention to detail, ensuring that every aspect, from the cover material to the printing quality, is of the highest standard. The pages are durable and resistant to wear and tear, ensuring that your memories remain pristine for generations to come.
                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Customization Options
                            </h3>
                            <p class="fs-lg mb-0">One of the key benefits of flush mount albums is the ability to customize every aspect to suit your preferences. From selecting the cover material and color to choosing the layout and design of each page, you have full creative control over how your album looks. Whether you prefer a classic leather cover or a modern acrylic finish, there are endless options to make your album truly unique.

                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Elegance and Timelessness
                            </h3>
                            <p class="fs-lg mb-0">Flush mount albums exude elegance and timelessness. The seamless design and high-quality materials elevate your photographs, transforming them into a work of art worthy of display in your home. Whether showcased on a coffee table or tucked away on a bookshelf, a flush mount album is sure to become a cherished heirloom that tells the story of your most precious moments.

                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Perfect for Every Occasion

                            </h3>
                            <p class="fs-lg mb-0">From weddings and graduations to family vacations and milestone birthdays, flush mount albums are perfect for capturing and preserving memories from any occasion. Whether you're commemorating a special event or simply celebrating everyday moments, a flush mount album allows you to relive those memories time and time again.

                            </p>
                            <h3 class="h3 pt-3 pt-sm-4 pt-xl-5 pb-2">Conclusion
                            </h3>
                            <p class="fs-lg mb-0">In a digital age where photos often remain trapped on smartphones and computers, flush mount albums offer a tangible way to preserve and celebrate your most cherished memories. With their exquisite craftsmanship, customizable options, and timeless appeal, flush mount albums are more than just photo albums – they're a testament to the beauty of storytelling through photography.
                            </p>
                            <p class="fs-lg mb-0">Invest in a flush mount album today and turn your memories into a masterpiece that will be treasured for years to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page