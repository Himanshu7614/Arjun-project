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
        <div className="container py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase font-semibold">Who we work with ?</p>

              <h2 className="text-4xl font-bold  tracking-widest">
              WHO ARE WE ?
              </h2>
              <p className="leading-relaxed mb-4">At Elevate Clicks, our purpose is crystal clear : we exist to be your guiding light in the ever-shifting digital landscape.
              </p>
              <p className="leading-relaxed mb-4">Our team comprises experienced professionals with a deep understanding of all facets of digital marketing, from SEO and SEM to social media, content marketing, and beyond. We stay ahead of industry trends to keep your business at the forefront.
              </p>
              <p className="leading-relaxed mb-4">We dont believe in one-size-fits-all strategies. Every business is unique, and so are its goals. We craft custom-tailored marketing solutions to address your specific needs and objectives.
              </p>
              <p className="leading-relaxed mb-4">Our decisions are fueled by data. We utilize advanced analytics and tracking tools to monitor performance, identify opportunities, and optimize campaigns for maximum ROI.
              </p>
              <p className="leading-relaxed mb-4">We believe in open and honest communication. Youll have full visibility into our processes and results, ensuring youre always informed about the progress of your digital marketing initiatives.
              </p>
              <p className="leading-relaxed mb-4">Your success is at the heart of everything we do. We are dedicated to building lasting relationships with our clients, ensuring your satisfaction is our ultimate priority.
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
                src="/services/about.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container py-24 mx-auto bg-white bg-opacity-10">
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
