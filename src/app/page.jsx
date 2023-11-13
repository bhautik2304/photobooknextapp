import Link from "next/link";
import { appRoutes } from '@/constants'
import { AnimateText, ProductScroll, Testymonial } from "@/components";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiSafe2Fill } from "react-icons/ri";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";
// Import Swiper styles

export default function Home() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 center-all-text order-2 order-sm-1" style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <div className="p-2" >
              <AnimateText />
              <p style={{ fontSize: '18px' }} className=" mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore.</p>
              <Link href={appRoutes.CreateAccount} className="btn btn-primary btn-sm fs-sm mb-4">
                Start Printings
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 order-1 order-sm-2 heroimgparrent m-0 p-0">
            <img src="./assets/img/graphics/heroimage.png" className="heroimg" />
          </div>
        </div>
      </div>
      <div className="p-5 mt-5">
          <div className="row">
            <center><h2>Some of our artistic projects</h2></center>
            <div className="d-flex justify-content-center">
             <ProductScroll />
            </div>
            <center>
              <div className="d-flex justify-content-center">
                <Link href={appRoutes.CreateAccount} className="btn btn-primary btn-sm fs-sm mb-4 m-3 mt-5">
                  Open Account
                </Link>
                <Link href={appRoutes.Login} className="nav-link text-success mb-4 m-3 mt-5 d-flex align-center" style={{ fontSize: 18 }} >
                  Start Printings <FaArrowRightLong size={20} style={{ marginLeft: 10 }} />
                </Link>
              </div>
            </center>
          </div>
        </div>
      <div className="container-fluid my-10" style={{ backgroundColor: '#5bb5a2' }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 my-3">
              <div className="card my-sm-5" style={{ height: 284, width: 280 }} >
                <div className="p-5">
                  <div className="mb-4" >
                    <RiSafe2Fill size={40} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                  </div>
                  <h6 className="my-1" >Lorem </h6>
                  <h6 className="my-1">Ispum Lorem </h6>
                  <p className="my-1" >Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 my-3">
              <div className="card my-sm-5" style={{ height: 284, width: 280 }} >
                <div className="p-5">
                  <div className="mb-4" >
                    <RiSafe2Fill size={40} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                  </div>
                  <h6 className="my-1" >Lorem </h6>
                  <h6 className="my-1">Ispum Lorem </h6>
                  <p className="my-1" >Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 my-3">
              <div className="card my-sm-5" style={{ height: 284, width: 280 }} >
                <div className="p-5">
                  <div className="mb-4" >
                    <RiSafe2Fill size={40} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                  </div>
                  <h6 className="my-1" >Lorem </h6>
                  <h6 className="my-1">Ispum Lorem </h6>
                  <p className="my-1" >Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 my-3">
              <div className="card my-sm-5" style={{ height: 284, width: 280 }} >
                <div className="p-5">
                  <div className="mb-4" >
                    <RiSafe2Fill size={40} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                  </div>
                  <h6 className="my-1" >Lorem </h6>
                  <h6 className="my-1">Ispum Lorem </h6>
                  <p className="my-1" >Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center aligns-item-center">
          <div className="p-5">
            <p>What Photokraft provides you ?</p>
            <h2>Happiness, Which Comes In All Shapes And Size,<br /> So Do Our Books.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row my-5">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                  <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                  <h6 className="my-3" >Flushmount</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                  <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                  <h6 className="my-3" >Photobooks</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link href={appRoutes.Login} style={{ textDecoration: 'none' }} >
                  <img src="./assets/img/graphics/card-green.svg" alt="" srcset="" />
                  <h6 className="my-3" >Photo Frames</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>

            <Link href={appRoutes.Login} className="nav-link text-success mb-4 mt-5 d-flex align-center" style={{ fontSize: 18 }} >
              Sart your printing journey with us  <FaArrowRightLong size={20} style={{ marginLeft: 10 }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <section class="overflow-hidden">
          <div class="container pb-5 pt-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
            <div class="row pb-md-3 pb-lg-4 mb-2 mb-lg-3">
              {/* <!-- CEO quote--> */}
              <div class="col-md-5 d-flex align-items-center mb-md-0">
                <div>
                  <div class="position-relative" style={{ maxWidth: '416px' }}>
                    <img class="d-block position-relative zindex-2" src="/assets/img/logo.png" alt="Nicolas Black" />
                    <div class="bg-primary position-absolute start-0 bottom-0 w-100" style={{ height: '85.4%', borderRadius: '2.25rem 8rem 2.25rem 2.25rem' }}></div>
                  </div>
                  <div class="text-center text-md-start pt-3 mt-3">
                    <h2 class="mb-2">Parth Shah</h2>
                    <p class="fs-xl text-muted mb-2">CEO Photokrafft.com</p>
                    <div class="position-relative pt-4" style={{ maxWidth: '500px' }}>
                      <div class="position-absolute top-0 start-0 w-100 text-center text-md-start ms-md-1">
                        <svg class="text-border" width="155" height="111" viewBox="0 0 155 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M125.969 38.7937C129.372 30.2345 134.734 21.7781 141.902 13.6311C144.17 11.053 144.48 7.34066 142.623 4.45316C141.18 2.18441 138.808 0.94696 136.23 0.94696C135.508 0.94696 134.786 0.99826 134.064 1.25633C118.905 5.69065 83.4811 21.4171 82.5014 71.8454C82.1407 91.2842 96.3717 107.99 114.883 109.898C125.144 110.93 135.353 107.578 142.933 100.772C150.512 93.914 154.844 84.117 154.844 73.9077C154.844 56.8922 142.778 41.9905 125.969 38.7937Z"></path>
                          <path d="M32.5904 109.898C42.7999 110.93 53.0092 107.578 60.5888 100.772C68.1686 93.914 72.5 84.117 72.5 73.9077C72.5 56.8922 60.4342 41.9905 43.6248 38.7937C47.0281 30.2345 52.3905 21.7781 59.5578 13.6312C61.8265 11.0531 62.1359 7.34071 60.2794 4.45321C58.8358 2.18446 56.4638 0.947006 53.8857 0.947006C53.1641 0.947006 52.4421 0.998306 51.7202 1.25638C36.5608 5.6907 1.13734 21.4172 0.157654 71.8454V72.5671C0.157654 91.6968 14.2341 107.99 32.5904 109.898Z"></path>
                        </svg>
                      </div>
                      <p class="fs-xl position-relative zindex-2 mb-0">The main task of our organization is <strong>to assess the state of your enterprise now and how you can achieve your goals.</strong> Self-assessment of current activities and review of processes formulate decisions to achieve the desired outcome.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Steps--> */}
              <div class="col-md-7 col-lg-6 col-xxl-5 offset-lg-1 offset-xxl-2">
                <div class="ps-md-4 ps-lg-0">
                  <div class="position-relative d-flex justify-content-end" data-aos="fade-left" data-aos-easing="ease-out-back">
                    <div class="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">01</div>
                    <div class="card border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <div class="card-body ps-4">
                        <h3 class="h5 card-title pb-2 mb-1">Create an account with us</h3>
                        <p class="card-text">Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.</p>
                      </div>
                    </div>
                  </div>
                  <div class="position-relative d-flex justify-content-end" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="250">
                    <div class="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">02</div>
                    <div class="card border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <div class="card-body ps-4">
                        <h3 class="h5 card-title pb-2 mb-1">Login to your dashboard</h3>
                        <p class="card-text">Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.</p>
                      </div>
                    </div>
                  </div>
                  <div class="position-relative d-flex justify-content-end" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="500">
                    <div class="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">03</div>
                    <div class="card border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <div class="card-body ps-4">
                        <h3 class="h5 card-title pb-2 mb-1">Select product and start order journey</h3>
                        <p class="card-text">A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.</p>
                      </div>
                    </div>
                  </div>
                  <div class="position-relative d-flex justify-content-end my-3" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="700">
                    <div class="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">04</div>
                    <div class="card border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <div class="card-body ps-4">
                        <h3 class="h5 card-title pb-2 mb-1">Upload your memories and just click send to print</h3>
                        <p class="card-text">Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc  vel nec risus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Testymonial />

      {/* <!-- FAQ (Accordion)--> */}
      <section class="bg-body py-5">
        <div class="container py-md-2 py-lg-3 py-xl-5 my-2 my-sm-3 my-md-4 my-xxl-5">
          <div class="row">
            <div class="col-md-4 col-sm-12 text-center text-md-start">
              <h2 class="h1">Need help?</h2>
              {/* <p class="pb-3 pb-sm-4">Et felis vitae ac venenatis lacus cras etiam risus scelerisque auctor adipiscing in a porta</p> */}
              <div className="row col-12">
                <div className="col-2">
                  <IoIosCall size={50} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                </div>
                <div className="col-10">
                  <div>
                    <h6 className="m-0" >+49 176 123 456</h6>
                    <p className="text-muted" >Support Hotline</p>
                  </div>
                </div>
              </div>
              <div className="row col-12">
                <div className="col-2">
                  <IoMdMailUnread size={50} color="#5BB5A2" style={{ backgroundColor: '#E8F2EE', padding: 10, borderRadius: 50 }} />
                </div>
                <div className="col-10">
                  <div>
                    <h6 className="m-0" >help@banquee.com</h6>
                    <p className="text-muted" >Support Email</p>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-flex justify-content-center">
                <svg class="text-warning ms-n4" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div class="col-md-8 col-lg-7 col-sm-12 offset-lg-1">
              <div class="accordion" id="faq">
                <div class="accordion-item bg-secondary">
                  <h3 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#questionOne" aria-expanded="true" aria-controls="questionOne">Q. How do I order an album online?</button>
                  </h3>
                  <div class="accordion-collapse collapse show" id="questionOne" aria-labelledby="headingOne" data-bs-parent="#faq">
                    <div class="accordion-body fs-sm">Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.</div>
                  </div>
                </div>
                <div class="accordion-item bg-secondary">
                  <h3 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">Q. What paper surfaces are available at the lab?</button>
                  </h3>
                  <div class="accordion-collapse collapse" id="questionTwo" aria-labelledby="headingTwo" data-bs-parent="#faq">
                    <div class="accordion-body fs-sm">Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.</div>
                  </div>
                </div>
                <div class="accordion-item bg-secondary">
                  <h3 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionThree" aria-expanded="false" aria-controls="questionThree">Q. What is the turn around time for an album?</button>
                  </h3>
                  <div class="accordion-collapse collapse" id="questionThree" aria-labelledby="headingThree" data-bs-parent="#faq">
                    <div class="accordion-body fs-sm">Proin ac quam eget velit luctus tincidunt vel in nunc. Maecenas cursus erat lacus, id interdum elit accumsan in. Mauris placerat dapibus sem, condimentum interdum nulla varius ac. Mauris quam mauris, rhoncus et tortor vel, tempus dignissim libero. Curabitur sed odio in odio elementum cursus.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
