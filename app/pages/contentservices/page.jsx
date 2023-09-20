"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink"


function Contentservices() {
  return (
    <div>
   {/* first sction */}
   <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold  tracking-widest">
              content : the heart of digital communication
              </h2>
              <p className="leading-relaxed mb-4">
                Whether you’re a startup looking for that extra kick or an
                established retailer in need of a fresh perspective, we are here
                to take your digital commerce to the next level.
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
                src="/services/content-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

        {/* last section */}
        <section class="text-white body-font overflow-hidden">
        <div class="container pb-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
                Achieve top search rankings with our seo services
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <div className="flex flex-col gap-3 p-4 bg-white text-black rounded-lg">
                <p className="text-sm uppercase">WORK WITH US</p>
                <h2 class="text-xl font-bold  tracking-widest">
                  Achieve top search rankings with our seo services
                </h2>
                <p class="leading-relaxed mb-4">
                  Whether you’re a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                  <p className="text-lg font-bold">On-Page Optimization</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="20"
                    viewBox="0 0 41 24"
                    fill="none"
                  >
                    <path
                      d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                  <p className="text-lg font-bold">On-Page Optimization</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="20"
                    viewBox="0 0 41 24"
                    fill="none"
                  >
                    <path
                      d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                  <p className="text-lg font-bold">On-Page Optimization</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="20"
                    viewBox="0 0 41 24"
                    fill="none"
                  >
                    <path
                      d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <hr className="py-[2px] w-[90%]" />
              </div>
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
                src="/services/content-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>


        {/* team */}
        <section className="body-font">
        <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
          <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
            <p className="text-sm uppercase">WORK WITH US</p>
            <h2 className="text-4xl font-bold  tracking-widest">
              Achieve top search rankings with our seo services
            </h2>
            <p className="leading-relaxed mb-4">
              Whether you’re a startup looking for that extra kick or an
              established retailer in need of a fresh perspective, we are here
              to take your digital commerce to the next level.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 w-[70%] mx-auto">
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-one.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-three.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-two.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-6.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-five.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/c-four.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section */}
      <section class="text-white body-font overflow-hidden">
        <div class="container py-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            
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
                src="/services/content-two.png"
                alt="About Image"
              />
            </motion.div>
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
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contentservices