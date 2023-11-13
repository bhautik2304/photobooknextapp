import { appRoutes } from '@/constants'
import React from 'react'

function Footer() {
  return (
    <>
      <footer class="footer bg-secondary py-5">
        <div class="container pt-md-2 pt-lg-3 pt-xl-4">
          <div class="row pb-4 pb-md-5 pt-sm-2 mb-lg-2">
            <div class="col-md-4 col-lg-3 pb-2 pb-md-0 mb-4 mb-md-0">
              <a class="navbar-brand text-nav py-0 mb-3 mb-md-4" href="/">
                <img src='/assets/img/logo.png'/>
              </a>
              <p class="fs-sm pb-2 pb-md-3 mb-3">Tellus non diam morbi quam vel venenatis proin sed. Dolor elementum nunc dictum.</p>
              <div class="d-flex"><a class="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#"><i class="ai-facebook"></i></a><a class="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#"><i class="ai-instagram"></i></a><a class="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="#"><i class="ai-linkedin"></i></a></div>
            </div>
            <div class="col-md-8 col-lg-7 col-xl-6 offset-lg-2 offset-xl-3">
              <div class="row row-cols-1 row-cols-sm-3">
                <div class="col mb-3 mb-md-0">
                  <ul class="nav flex-column">
                    <li><a class="nav-link fw-normal py-1 px-0" href={appRoutes.Home}>Home</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href={appRoutes.Products}>Products</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href={appRoutes.AboutUS}>About US</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href={appRoutes.Support}>Support</a></li>
                  </ul>
                </div>
                <div class="col mb-4 mb-md-0">
                  <ul class="nav flex-column">
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Help center</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Terms of service</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Legal</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div class="col mb-4 mb-md-0">
                  <ul class="nav flex-column">
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Help center</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Terms of service</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Legal</a></li>
                    <li><a class="nav-link fw-normal py-1 px-0" href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div class="col">
                </div>
              </div>
            </div>
          </div>
          <p class="fs-sm mb-0"><span class="opacity-70">&copy; All rights reserved. by </span><a class="nav-link d-inline fw-normal p-0" href="/" target="_blank" rel="noopener">Photokrafft</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer

/*
 <footer class="footer bg-secondary py-5">
      <div class="container pt-md-2 pt-lg-3 pt-xl-4">
        <div class="row pb-4 pb-md-5 pt-sm-2 mb-lg-2">
          <div class="col-md-4 col-lg-3 pb-2 pb-md-0 mb-4 mb-md-0"><a class="navbar-brand text-nav py-0 mb-3 mb-md-4" href="index.html"><span class="text-primary flex-shrink-0 me-2">
                <svg version="1.1" width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
                </svg></span><span>Around</span></a>
            <p class="fs-sm pb-2 pb-md-3 mb-3">Tellus non diam morbi quam vel venenatis proin sed. Dolor elementum nunc dictum.</p>
            <div class="d-flex"><a class="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#"><i class="ai-facebook"></i></a><a class="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#"><i class="ai-instagram"></i></a><a class="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="#"><i class="ai-linkedin"></i></a></div>
          </div>
          <div class="col-md-8 col-lg-7 col-xl-6 offset-lg-2 offset-xl-3">
            <div class="row row-cols-1 row-cols-sm-3">
              <div class="col mb-3 mb-md-0">
                <ul class="nav flex-column">
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Features</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">How it works</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Reviews</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">FAQ</a></li>
                </ul>
              </div>
              <div class="col mb-4 mb-md-0">
                <ul class="nav flex-column">
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Help center</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Terms of service</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Legal</a></li>
                  <li><a class="nav-link fw-normal py-1 px-0" href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div class="col"><a class="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="#"><img class="mx-1 d-dark-mode-none" src="assets/img/market/appstore-dark.svg" width="120" alt="App Store"><img class="mx-1 d-none d-dark-mode-block" src="assets/img/market/appstore-light.svg" width="120" alt="App Store"></a><a class="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="#"><img class="mx-1 d-dark-mode-none" src="assets/img/market/googleplay-dark.svg" width="119" alt="Google Play"><img class="mx-1 d-none d-dark-mode-block" src="assets/img/market/googleplay-light.svg" width="119" alt="Google Play"></a></div>
            </div>
          </div>
        </div>
        <p class="fs-sm mb-0"><span class="opacity-70">&copy; All rights reserved. Made by </span><a class="nav-link d-inline fw-normal p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p>
      </div>
    </footer>
*/