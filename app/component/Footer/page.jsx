import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <div>
      <footer className="z-[-100]  py-8 sm:py-12 text-white mt-[5rem]">
        <div className="container mx-auto px-4 lg:px-0 w-full xl:max-w-[1110px] 2xl:max-w-[1200px] 3xl:max-w-[1360px] z-[50]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            <div className="px-4 flex flex-col gap-5">
              <div className="mb-2 sm:mb-0">
                <a
                  href="/"
                  className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
                >
                  <img
                    className="md:w-20 lg:w-24 block xl:w-[130px]"
                    src="/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h1 className="text-[10px]">
                We create website that clearly reflects your expertise, story, and values — so you can spend less time having sales conversations and more time helping people live happier, healthier, and more fulfilling lives

                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M13 22.0041C8.02733 22.0041 3.99622 17.973 3.99622 13.0003C3.99622 8.0277 8.02733 3.99658 13 3.99658C17.9726 3.99658 22.0037 8.0277 22.0037 13.0003"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5094 9.99874H21.4906"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5105 16.0012H13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.0017 13.0001C17.0092 10.2052 16.2601 7.46033 14.8337 5.05677C14.4563 4.40087 13.7572 3.99658 13.0004 3.99658C12.2437 3.99658 11.5446 4.40087 11.1672 5.05677C8.27598 9.95804 8.27598 16.0431 11.1672 20.9444C11.5463 21.5989 12.2446 22.0027 13.0009 22.0048"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.0024 15.001C21.2125 15.001 23.0041 16.7926 23.0041 19.0026C23.0041 21.2127 21.2125 23.0043 19.0024 23.0043C16.7923 23.0043 15.0007 21.2127 15.0007 19.0026C15.0007 16.7926 16.7923 15.001 19.0024 15.001"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.0888 18.9586C20.0645 18.9586 20.0448 18.9782 20.0447 19.0026C20.0447 19.0269 20.0643 19.0466 20.0887 19.0467H20.0888C20.1046 19.0467 20.1191 19.0383 20.127 19.0247C20.1349 19.0111 20.1349 18.9944 20.1271 18.9807C20.1193 18.9671 20.1047 18.9587 20.089 18.9586H20.0888"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.915 18.9586C17.8907 18.9586 17.871 18.9783 17.871 19.0026V19.0026C17.8704 19.0275 17.8901 19.0481 17.915 19.0486C17.9398 19.0492 17.9604 19.0295 17.961 19.0046C17.9615 18.9798 17.9418 18.9592 17.917 18.9586H17.916"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <Link href="https://www.expelee.com/">Visit expelee Website</Link> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.3657 14.8557C14.0942 14.8557 13.8478 14.7457 13.6696 14.5675C13.4914 14.3893 13.3814 14.1429 13.3814 13.8714L13.3814 6.50328L4.7106 15.1741C4.32639 15.5583 3.70344 15.559 3.31853 15.1741C2.93362 14.7892 2.93432 14.1663 3.31853 13.782L11.9894 5.11121L4.62119 5.11121C4.0769 5.11121 3.63696 4.67128 3.63696 4.12698C3.63696 3.58268 4.0769 3.14274 4.6212 3.14274L14.3643 3.14274C14.4938 3.14274 14.6211 3.16842 14.7422 3.21853C14.9824 3.31806 15.1746 3.51028 15.2741 3.75041C15.3242 3.87152 15.3499 3.99887 15.3499 4.12834L15.3499 13.8714C15.3499 14.4157 14.91 14.8557 14.3657 14.8557Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="px-4 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Projects</h5>
              <ul className="list-none footer-links flex flex-col gap-2">
              <li>
                                <Link href="/pages/webdevservices" 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Webdevelopment</Link>
                                
                                  
                              </li>
                              <li>
                                <Link href="/pages/contentservices
                                "
                                className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                >Content Management</Link>

                              </li>
                              <li>
                              <Link href="/pages/emailservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Email services</Link>
                              
                              </li>
                              <li>
                                <Link
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  href="/pages/paidads"
                                >
                                  {" "}
                                  Paid Ads
                                </Link>
                              </li>
                              <li>
                                <Link href="/pages/secservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > Seo services</Link>
                              </li>
                              <li>
                                <Link href="/pages/socialservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > Social services</Link>
                              </li>
                              <li>
                                <Link href={"/pages/analyst"}
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Analyst</Link>
                              </li>
              </ul>
            </div>
            <div className="px-4 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links flex flex-col gap-2">
              <Link
              href="/"
              className="font-semibold flex gap-1 items-center group/Home"
            >
              Portfolio
            </Link>
            <Link
              href="/pages/about"
              className="font-semibold flex gap-1 items-center group/Home"
            >
              About-us
            </Link>
            <Link
              href="/pages/contact"
              className="font-semibold flex gap-1 items-center group/Home"
            >
              Contact
            </Link>
              </ul>
            </div>
            <div className="px-4 mt-4 xl:mt-0 flex flex-col">
              <h5 className="text-xl font-bold mb-5 sm:text-center xl:text-left">
                Follow
              </h5>
              <div className="flex sm:justify-center xl:justify-start mb-6 gap-2">
                <a
                  href=""
                  className="w-8 h-8 border-gray-400 rounded-full text-center py-1 flex-shrink-0"
                >
                  <img src="/social/li.svg" alt="" />
                </a>
                <a
                  href=""
                  className="w-8 h-8 border-gray-400 rounded-full text-center py-1 ml-2 flex-shrink-0"
                >
                  <img src="/social/x.svg" alt="" />
                </a>
                <a
                  href=""
                  className="w-8 h-8 border-gray-400 rounded-full text-center py-1 ml-2 flex-shrink-0"
                >
                  <img src="/social/ig.svg" alt="" />
                </a>
              </div>
              <h5 className="text-[1.3] font-bold mb-6 sm:text-center xl:text-left">
                Get in touch
              </h5>
              <div className="flex sm:justify-center xl:justify-start items-center gap-3">
                <a
                  href=""
                  className="w-10 h-10 rounded-full text-center py-1 flex-shrink-0"
                >
                  <img src="/social/mail.png" alt="" />
                </a>
                <div className="flex flex-col">
                  <p>Send us an email</p>
                  <p>contact@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px bg-white w-full max-w-[1000px] mx-auto block my-10" />
        <div className="flex flex-col md:flex-row gap-2 lg:gap-4 justify-center px-4 text-xs text-center lg">
          <p>© Copyright 2023 company</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
