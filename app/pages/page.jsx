"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../common/Button/Textlink"
import Image from "next/image";
import Brands from "../component/Brand/pages"
import Testimonials from "../component/Testimonials/page"

function homepage() {
  return (
    <>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We turn ideas into extraordinary digital products & experiences
            </h1>
            <p className=" text-lg lg:w-2/3 mx-auto leading-relaxed">
              Elevate Clicks is a Digital Marketing agency We at Elevate Clicks,
              were not just about boosting your online presence; were about
              giving your brand a rocket-powered boost into the digital cosmos.
              Lets embark on this cosmic journey together!
            </p>
            <Textlink text={"Get in touch"} href={"/pages/contact"} className={"font-bold text-gray-500"} />
          </div>
        </div>
      </section>
      {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5  mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className=" text-lg uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold  ">
                So what do we do exactly?
              </h2>
              <p className=" text-lg leading-relaxed mb-4">
                Were not just another digital marketing agency. Were a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? Its
                our people. Were not your typical 9-to-5 crew; were a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className=" text-lg leading-relaxed mb-4">
                What sets us apart? Its our commitment to tailored strategies.
                We understand that your business is as unique as a fingerprint,
                and your digital journey should reflect that. Thats why we take
                the time to get to know you, your industry, and your
                aspirations. We craft personalized strategies that align
                perfectly with your identity and goals. But were not just
                strategists. Were your digital partners. Our services go beyond
                the norm, covering everything from SEO and content marketing to
                social media management. We provide a comprehensive, cohesive
                approach to elevate your brand online.
              </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center justify-center mx-auto "
            >
              <img
                className="w-[30rem] lg:ml-[-2rem] mt-[2rem] lg:mt-0 hover:scale-105 transition-all duration-500 mx-auto"
                src="/homepage/imgone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            <p className=" text-lg uppercase">Our services </p>
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 ">
              We provide wide range of digital services
            </h2>
            <p className=" text-lg lg:w-2/3 mx-auto leading-relaxed">
              Whether you’re a startup looking for that extra kick or an
              established retailer in need of a fresh perspective, we are here
              to take your digital commerce to the next level.
            </p>
          </div>
          <div className="flex flex-wrap  text-center md:w-[90%] mx-auto ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/webdevservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p className=" text-lg leading-relaxed">
                Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design.
                </p>
                            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/emailservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Email Marketing
                </h2>
                <p className=" text-lg leading-relaxed">
                Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services.
                </p>
                  <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/secservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Seo Marketing
                </h2>
                <p className=" text-lg leading-relaxed">
                Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.
                </p>
                            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/socialservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Social Media Marketing
                </h2>
                <p className=" text-lg leading-relaxed">
                Social media marketing is the use of social media platforms and websites to promote a product or service
                </p>
                            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/contentservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Content Marketing
                </h2>
                <p className="leading-relaxed">
                Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media. 
                </p>
                            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/paidads" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Paid Ads Services
                </h2>
                <p className="leading-relaxed">
                Paid advertising is an online advertising model where advertisers bid to participate in real-time auctions in order to show their ads
                </p>
                            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

              </a>
            </div>
          </div>
        </div>
      </section>
      {/* we work with */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center mx-auto "
            >
              <img
                className="w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/homepage/imgtwo.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className=" text-lg uppercase">WORK WITH US</p>

              <h2 className="text-4xl font-bold  ">
                So what do we do exactly?
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                Were not just another digital marketing agency. Were a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? Its
                our people. Were not your typical 9-to-5 crew; were a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                What sets us apart? Its our commitment to tailored strategies.
                We understand that your business is as unique as a fingerprint,
                and your digital journey should reflect that. Thats why we take
                the time to get to know you, your industry, and your
                aspirations. We craft personalized strategies that align
                perfectly with your identity and goals. But were not just
                strategists. Were your digital partners. Our services go beyond
                the norm, covering everything from SEO and content marketing to
                social media management. We provide a comprehensive, cohesive
                approach to elevate your brand online.
              </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

            </div>
          </div>
        </div>
      </section>
      
      <Brands />

      {/* Projcts */}
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className=" text-lg uppercase">WORK WITH US</p>
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
              Check our best clients & partners
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
              magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
              incididunt ut labore et.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 sm:w-[80%] mx-auto w-[90%]">
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="flex items-center"
                >
                  <img
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/content.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3"> Website Development</h2>
                  <p className="mb-4">
                  Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures
                  </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="flex items-center"
                >
                  <img
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/graphic.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">CONTENT STRATEGY</h2>
                  <p className="mb-4">
                   
                Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media. 
                  </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="flex items-center"
                >
                  <img
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/webdev.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">Web design</h2>
                  <p className="mb-4">
                  Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.
                  </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="flex items-center"
                >
                  <img
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] mb-3"
                    src="/homepage/marketing.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">Social media strategy</h2>
                  <p className="mb-4"> Although the terms e-marketing and digital marketing are still dominant in academia, social media marketing is becoming more popular for both practitioners and researchers.
                  </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </>
  );
}

export default homepage;
