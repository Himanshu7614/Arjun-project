"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Brands from "../component/Brand/pages"
import Testimonials from "../component/Testimonials/page"

function Homepage() {
  return (
    <>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We turn ideas into extraordinary digital products & experiences
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
              Elevate Clicks is a Digital Marketing agency We at Elevate Clicks,
              we're not just about boosting your online presence; we're about
              giving your brand a rocket-powered boost into the digital cosmos.
              Let's embark on this cosmic journey together!
            </p>
          </div>
        </div>
      </section>
      {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold  tracking-widest">
                So what do we do exactly?
              </h2>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? It's
                our people. We're not your typical 9-to-5 crew; we're a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className="leading-relaxed mb-4">
                What sets us apart? It's our commitment to tailored strategies.
                We understand that your business is as unique as a fingerprint,
                and your digital journey should reflect that. That's why we take
                the time to get to know you, your industry, and your
                aspirations. We craft personalized strategies that align
                perfectly with your identity and goals. But we're not just
                strategists. We're your digital partners. Our services go beyond
                the norm, covering everything from SEO and content marketing to
                social media management. We provide a comprehensive, cohesive
                approach to elevate your brand online.
              </p>
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/Homepage/imgone.png"
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

            <p className="text-sm uppercase">Our services </p>
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 ">
              We provide wide range of digital services
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whether you’re a startup looking for that extra kick or an
              established retailer in need of a fresh perspective, we are here
              to take your digital commerce to the next level.
            </p>
          </div>
          <div className="flex flex-wrap -m-2 text-center md:w-[80%] mx-auto ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p className="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p className="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p className="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p className="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p class="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[200px] flex flex-col justify-center gap-3">
                <h2 class="title-font font-bold text-2xl ">
                  Website Development
                </h2>
                <p class="leading-relaxed">
                  We create website that clearly reflects your expertise, story,
                  and values
                </p>
                <p className="font-bold">Book a demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we work with */}
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/Homepage/imgtwo.png"
                alt="About Image"
              />
            </motion.div>
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>

              <h2 class="text-4xl font-bold  tracking-widest">
                So what do we do exactly?
              </h2>
              <p class="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? It's
                our people. We're not your typical 9-to-5 crew; we're a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p class="leading-relaxed mb-4">
                What sets us apart? It's our commitment to tailored strategies.
                We understand that your business is as unique as a fingerprint,
                and your digital journey should reflect that. That's why we take
                the time to get to know you, your industry, and your
                aspirations. We craft personalized strategies that align
                perfectly with your identity and goals. But we're not just
                strategists. We're your digital partners. Our services go beyond
                the norm, covering everything from SEO and content marketing to
                social media management. We provide a comprehensive, cohesive
                approach to elevate your brand online.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Brands />

      {/* Projcts */}
      <section class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <p className="text-sm uppercase">WORK WITH US</p>
            <h2 class="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
              Check our best clients & partners
            </h2>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
              magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
              incididunt ut labore et.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 sm:w-[80%] mx-auto w-[90%]">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex flex-col items-center justify-start ">
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
                    src="/Homepage/content.png"
                    alt="About Image"
                  />
                </motion.div>
                <div class="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 class=" font-bold text-xl">CONTENT STRATEGY</h2>
                  <h3 class="mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2">
              <div class="h-full flex flex-col items-center justify-start ">
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
                    src="/Homepage/graphic.png"
                    alt="About Image"
                  />
                </motion.div>
                <div class="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 class=" font-bold text-xl">CONTENT STRATEGY</h2>
                  <h3 class="mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex flex-col items-center justify-start ">
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
                    src="/Homepage/webdev.png"
                    alt="About Image"
                  />
                </motion.div>
                <div class="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 class=" font-bold text-xl">CONTENT STRATEGY</h2>
                  <h3 class="mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex flex-col items-center justify-start ">
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
                    src="/Homepage/marketing.png"
                    alt="About Image"
                  />
                </motion.div>
                <div class="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 class=" font-bold text-xl">CONTENT STRATEGY</h2>
                  <h3 class="mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
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

export default Homepage;
