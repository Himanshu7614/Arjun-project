"use client";
import React from "react";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <>
      <section class="text-white body-font my-[3rem]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col items-center text-center w-full mb-12">
            <h1 class="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We turn ideas into extraordinary digital products & experiences
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-sm">
              Elevate Clicks is a Digital Marketing agency We at Elevate Clicks,
              we're not just about boosting your online presence; we're about
              giving your brand a rocket-powered boost into the digital cosmos.
              Let's embark on this cosmic journey together!
            </p>
          </div>
        </div>
      </section>

      {/* //about */}
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
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
      <section class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <p className="text-sm uppercase">Our services </p>
            <h2 class="sm:text-3xl text-4xl  font-bold title-font mb-4 ">
              We provide wide range of digital services
            </h2>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whether you’re a startup looking for that extra kick or an
              established retailer in need of a fresh perspective, we are here
              to take your digital commerce to the next level.
            </p>
          </div>
          <div class="flex flex-wrap -m-2 text-center md:w-[80%] mx-auto ">
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

      {/* brand section */}
      <section class=" body-font">
        <hr className="w-[90%] mx-auto" />
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <p className="text-sm uppercase">WORK WITH US</p>
            <h2 class="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
            Check our best clients & partners
            </h2>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <img src="/homepage/brand.png" alt="" />
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <img src="/homepage/brand.png" alt="" />
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <img src="/homepage/brand.png" alt="" />
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <img src="/homepage/brand.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto" />

      </section>

      {/* Projcts */}
    </>
  );
}

export default Homepage;
