"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Textlink from "../../common/Button/Textlink"


function Seoservices() {
  return (
    <div>
      {/* first sction */}
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
              Achieve top search rankings with our seo services
              </h2>
              <p class="leading-relaxed mb-4">
              Boost your online visibility and drive organic traffic with our top-notch SEO service. Our experts will optimize your website for search engines, ensuring you reach your target audience and outshine the competition. Take your digital presence to new heights today!
              </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

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
              className="flex items-center"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/services/seoone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 py-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase font-semibold">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
                DRIVE TARGETED TRAFFIC AND BOOST CONVERSIONS
              </h2>
              <p class="leading-relaxed mb-4">
              With Elevate Clicks cutting-edge SEO techniques and industry knowledge, businesses can expect to climb the search engine rankings and attract targeted organic traffic. Our team of experienced professionals understands the ever-evolving algorithms and trends, ensuring that your website remains optimized for maximum visibility.
              </p>
              <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

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
              className="flex items-center px-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="lg:w-[200px] w-[170px] h-[170px] rounded-lg shadow-2xl bg-white hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">INCREASE TRAFFIC</h2>
                    <p className="text-sm">
                    CUSTOMIZED SOLUTIONS TO YOUR BUSINESS GOALS
                    </p>
                  </div>
                </div>
                <div className="lg:w-[200px] w-[170px] h-[170px] rounded-lg shadow-2xl bg-white mt-3 hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">IMPROVED RANKINGS</h2>
                    <p className="text-sm">Our expertise will help you to improve visibility  in search engine results.
                    </p>
                  </div>
                </div>
                <div className="lg:w-[200px] w-[170px] h-[170px] rounded-lg shadow-2xl bg-white hover:scale-105 transition-all duration-500 ">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">SUSTAINABLE GROWTH</h2>
                    <p className="text-sm">Our SEO strategies focus on sustainable  with search engine guidelines.
                    </p>
                  </div>
                </div>
                <div className="lg:w-[200px] w-[170px] h-[170px] rounded-lg shadow-2xl bg-white mt-3 hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">TARGETED AUDIENCE</h2>
                    <p className="text-sm">we focus on targeting specific keywords  to attract  your ideal audience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section class="text-white body-font overflow-hidden px-2">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
              CUSTOMIZED SOLUTIONS TO YOUR BUSINESS GOALS
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
              <p>
              From keyword research and on-page optimization to link building and content creation, our comprehensive approach guarantees long-term success and lasting impact with proven SEO techniques
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden px-2">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <div className="flex flex-col gap-3 p-4 bg-white text-black rounded-lg">
                <p className="text-sm uppercase">WORK WITH US</p>
                <h2 class="text-xl font-bold  tracking-widest">
                Off-Page Optimization
                </h2>
                <p class="leading-relaxed mb-4">
                Building high quality backlinks from reputable websites with influencer outreach to enhance your rankings.
                </p>
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <p className="text-lg font-bold">On-Page Optimization</p>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <p className="text-lg font-bold">KEYWORD RESERACH</p>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <p className="text-lg font-bold">SEO AUDITS AND REPORTING</p>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

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
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/services/seotwo.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <Testimonials />
    </div>
  );
}

export default Seoservices;
