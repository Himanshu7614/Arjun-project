"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Textlink from "../../common/Button/Textlink"


function paidads() {
  return (
    <div>
      {/* first sction */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold  tracking-widest">
                Achieve top search rankings with our seo services
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/paidads-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="text-white body-font overflow-hidden">
        <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[70%] mx-auto">
          <p className="text-sm uppercase">WORK WITH US</p>
          <h2 className="text-4xl font-bold  tracking-widest">
            Achieve top search rankings with our seo services
          </h2>
          <p className="leading-relaxed mb-4">
            Whether you’re a startup looking for that extra kick or an
            established retailer in need of a fresh perspective, we are here to
            take your digital commerce to the next level.
          </p>

        </div>
        <div className="container px-5 pb-12 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold  tracking-widest">
                Achieve top search rankings with our seo services
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/paid-one.png"
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
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/paidads-one.png"
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
                  className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/paidads-one.png"
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
                  className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/paidads-one.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex -m-4 w-[70%] mx-auto">
            <div className="p-4 lg:w-1/2 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/paidads-one.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                  src="/services/paidads-one.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-bold">Alper Kamu</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
                Achieve top search rankings with our seo services
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ab
                suscipit nobis, est ex dolorum eveniet impedit totam temporibus
                assumenda quas optio hic commodi eaque. Optio quisquam
                reiciendis dicta quod!
              </p>

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
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/seotwo.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-start ">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ab
                suscipit nobis, est ex dolorum eveniet impedit totam temporibus
                assumenda quas optio hic commodi eaque. Optio quisquam
                reiciendis dicta quod!
              </p>
            </div>
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/paid-one.png"
                alt="About Image"
              />
            </motion.div>
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
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

              </div>
            </div>
          </div>
        </div>
      </section>



      <Testimonials />
    </div>
  );
}

export default paidads;
