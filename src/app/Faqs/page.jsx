import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <>
        <div class="container d-flex flex-column justify-content-center align-items-center h-100 text-center pb-2 py-sm-3 py-md-4 py-lg-5">

        {/* <!-- Logo --> */}
        <a class="navbar-brand text-dark p-0 m-0 mb-5" href="index.html">
         <Image src={'/assets/img/logo.png'} width={380} height={150} />
        </a>

        <h1 class="display-3 text-primary">Whipping up this page</h1>
        <p class="fs-xl mx-auto mb-5" style={{maxWidth: "680px"}}>We can't wait to unveil what we've been working on, and we appreciate your patience. Thanks for being a part of our journey!</p>
         </div>
        </>
    )
}

export default page