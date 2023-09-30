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
              <p className="text-sm uppercase font-semibold">
                Who we work with ?
              </p>

              <h2 className="text-4xl font-bold  tracking-widest">
                WHO ARE WE ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, our purpose is crystal clear : we exist to be
                your guiding light in the ever-shifting digital landscape.
              </p>
              <p className="leading-relaxed mb-4">
                Our team comprises experienced professionals with a deep
                understanding of all facets of digital marketing, from SEO and
                SEM to social media, content marketing, and beyond. We stay
                ahead of industry trends to keep your business at the forefront.
              </p>
              <p className="leading-relaxed mb-4">
                We dont believe in one-size-fits-all strategies. Every business
                is unique, and so are its goals. We craft custom-tailored
                marketing solutions to address your specific needs and
                objectives.
              </p>
              <p className="leading-relaxed mb-4">
                Our decisions are fueled by data. We utilize advanced analytics
                and tracking tools to monitor performance, identify
                opportunities, and optimize campaigns for maximum ROI.
              </p>
              <p className="leading-relaxed mb-4">
                We believe in open and honest communication. Youll have full
                visibility into our processes and results, ensuring youre always
                informed about the progress of your digital marketing
                initiatives.
              </p>
              <p className="leading-relaxed mb-4">
                Your success is at the heart of everything we do. We are
                dedicated to building lasting relationships with our clients,
                ensuring your satisfaction is our ultimate priority.
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-5xl title-font font-bold text-white mb-4">
            Our value/moral/mission
            </h1>
            <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white text-lg">
            A technology company is a business that focuses on the development and implementation of technology-based products and services. These companies often employ engineers, scientists, and other specialists dedicated to researching, designing, and creating new technologies.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full  inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src="/services/mission.png" alt="" />

              </div>
              <div className="flex-grow">
                <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Mission
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                These companies often employ engineers, scientists, and other specialists dedicated to researching, designing, and creating new technologies. They may also specialize in software development, data storage and processing, networking, or other highly advanced technology-related fields. 
                </p>
              </div>
              
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src="/services/idea.png" alt="" />

              </div>
              <div className="flex-grow flex-col items-center">
              <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Vision
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                A good vision paints a picture of a desired future state. It appeals to the heart inspiring employees, customers, and other stakeholders to do their best. A good vision rarely changes, remaining constant through different leaders, economic circumstances, and challenges.
                </p>
               
              </div>
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 p-3  bg-white flex-shrink-0">
                <img src="/services/vission.png" alt="" />
              </div>
              <div className="flex-grow">
              <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Moral
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                We believe in quality craftsmanship without the gimmicks. We work with the best to get the best. And then we sell the best, for exactly the price it should cost. It’s the very simple system at the heart of everything we make.
                </p>
              </div>
              
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default page;
