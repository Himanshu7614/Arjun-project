"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink"



function about() {
  return (
    <>
      <section className="text-white body-font relative">
        <div className="lg:pr-10 pt-36 mb-6 lg:mb-5 flex flex-col gap-3 text-center  mx-auto">
          <h2 className="text-4xl font-bold  tracking-widest">
            CONTACT US
          </h2>
          <p className="leading-relaxed mb-4 text-lg md:w-[60%] mx-auto">
            Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
            magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
            incididunt ut labore et.
          </p>
        </div>
        <div className="container px-5  flex sm:flex-nowrap flex-wrap lg:w-[80%] mx-auto items-center">
          <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 flex items-end justify-start relative">
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
                className="lg:w-[30rem] mt-[2rem] lg:mt-0"
                src="/About/contact-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 sm:mt-[2rem] mt-0  md:mt-0 rounded-lg ">
            <p className="leading-relaxed mb-5 text-white font-lg">
              Do you have any questions, suggestions or feedbacks? Wed love to
              hear from you
            </p>
            <div className="relative mb-4">
              <label
                for="name"
                className="leading-7 text-sm text-white font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
                 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="email"
                className="leading-7 text-sm text-white font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="leading-7 text-sm text-white font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
           <Button text={"Submit"} href={"c"} className={"text-bold w-[50%] flex justify-center"} ></Button>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
          <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-5 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
            <h2 className="text-4xl font-bold  tracking-widest">
              GET IN TOUCH WITH US
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
                  className="flex-shrink-0 rounded-full w-[100px] h-[100px] object-cover object-center mb-4"
                  src="/About/Instagram.svg"
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
                  className="flex-shrink-0 rounded-full w-[100px] h-[100px] object-cover object-center mb-4"
                  src="/About/Linkedin.svg"
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
                  className="flex-shrink-0 rounded-full w-[100px] h-[100px] object-cover object-center mb-4"
                  src="/About/Twitter.svg"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section class="text-white body-font overflow-hidden">
        <div class="container py-24 mx-auto ">
          <div class="mx-auto flex flex-wrap items-start sm:justify-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-0 mb-2 lg:mb-0 flex flex-col gap-3">
              <h2 class="lg:text-4xl text-3xl font-bold  tracking-widest">
                WANTS TO DISCUSS IN PERSON CHECK OUT OUR SPACE
              </h2>
              <p class="leading-relaxed mb-4 text-lg">Looking to boost your online presence and drive targeted traffic to your business? We offer a comprehensive digital marketing solutions designed to elevate your brand.
              </p>
              <p class="leading-relaxed mb-4 text-lg">Have a question for us or a feedback? Please click on the most appropriate category and fill out the form and well get back to you as soon as possible.
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
                className="lg:w-[25rem] lg:ml-[-2rem]"
                src="/About/map.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 items-center mx-auto">
          <svg
            width="60"
            height="49"
            viewBox="0 0 60 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0C14.8902 0 0 5.91187 0 12.7002C0 18.5293 0 19.0675 0 19.1038C0 20.6469 1.25039 21.8973 2.79352 21.8973H13.4109C14.9541 21.8973 16.2043 20.6469 16.2043 19.1038V14.2855C16.2043 12.8793 17.2508 11.6919 18.6454 11.5144C18.6454 11.5144 22.4679 10.7292 30 10.7292C37.5321 10.7292 41.3545 11.5144 41.3545 11.5144C42.7492 11.6918 43.7955 12.8793 43.7955 14.2855V19.1039C43.7955 20.647 45.0459 21.8974 46.5889 21.8974H57.2064C58.7495 21.8974 59.9999 20.647 59.9999 19.1039C59.9999 19.0675 59.9999 18.5293 59.9999 12.7003C60 5.91188 45.1099 0 30 0Z"
              fill="#9A9A9A"
            />
            <path
              d="M40.8399 19.1039V14.4266L40.7594 14.41C40.7305 14.4042 37.0622 13.6853 30.0002 13.6853C22.9382 13.6853 19.27 14.4041 19.2335 14.4116L19.1606 14.4265V19.1039C19.1606 22.2747 16.5811 24.8534 13.4111 24.8534H6.02246V41.4931C6.02246 45.6074 9.35738 48.9422 13.4709 48.9422H46.5295C50.643 48.9422 53.9779 45.6073 53.9779 41.4931V24.8534H46.5893C43.4193 24.8534 40.8399 22.2747 40.8399 19.1039ZM38.7959 37.6084V41.5834H34.8218V37.6084H38.7959ZM38.7959 31.3225V35.2976H34.8218V31.3225H38.7959ZM38.7959 25.0375V29.0117H34.8218V25.0375H38.7959ZM31.9877 37.6084V41.5834H28.0135V37.6084H31.9877ZM31.9877 31.3225V35.2976H28.0135V31.3225H31.9877ZM28.0135 29.0117V25.0375H31.9877V29.0117H28.0135ZM25.1795 37.6084V41.5834H21.2053V37.6084H25.1795ZM25.1795 31.3225V35.2976H21.2053V31.3225H25.1795ZM25.1795 25.0375V29.0117H21.2053V25.0375H25.1795Z"
              fill="#9A9A9A"
            />
          </svg>
          <h1 className="text-lg font-bold">CHAT WITH CUSTOMER SERVICE</h1>
          <p className="text-sm">Call 1-800-992-3774</p>
          <p className="text-sm">Monday-Friday: 9am-6pm EST</p>
        </div>
      </section>
    </>
  );
}

export default about;
