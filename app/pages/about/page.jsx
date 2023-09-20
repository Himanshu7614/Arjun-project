"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink";
import Testimonials from "@/app/component/Testimonials/page";


function page() {
  return (
    <>
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>

              <h2 className="text-4xl font-bold  tracking-widest">
                So what do we do exactly?
              </h2>
              <p className="leading-relaxed mb-4">
                Were not just another digital marketing agency. Were a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? Its
                our people. Were not your typical 9-to-5 crew; were a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className="leading-relaxed mb-4">
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
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
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
                src="/homepage/imgtwo.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
          <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-5 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
            <h2 className="text-4xl font-bold  tracking-widest">
              OUR value/moral/mission
            </h2>
            <p className="leading-relaxed mb-4">
              Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
              magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
              incididunt ut labore et.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 w-[70%] mx-auto justify-center">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0  w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/About/contact.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0  w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/About/contact.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0  w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/About/contact.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
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

export default page;
