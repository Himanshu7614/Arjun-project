"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";

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
                Whether you’re a startup looking for that extra kick or an
                established retailer in need of a fresh perspective, we are here
                to take your digital commerce to the next level.
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
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  tracking-widest">
                DRIVE TARGETED TRAFFIC AND BOOST CONVERSIONS
              </h2>
              <p class="leading-relaxed mb-4">
                We create website that clearly reflects your expertise, story,
                and values — so you can spend less time having sales
                conversations and more time helping people live happier,
                healthier, and more fulfilling lives.
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
              <div className="grid grid-cols-2 gap-4">
                <div className="w-[200px] h-[170px] rounded-lg shadow-2xl bg-white ">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">INCREASE TRAFFIC</h2>
                    <p className="text-sm">
                      We create website that clearly reflects your expertise,
                      story, and values
                    </p>
                  </div>
                </div>
                <div className="w-[200px] h-[170px] rounded-lg shadow-2xl bg-white mt-3 ">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">INCREASE TRAFFIC</h2>
                    <p className="text-sm">
                      We create website that clearly reflects your expertise,
                      story, and values
                    </p>
                  </div>
                </div>
                <div className="w-[200px] h-[170px] rounded-lg shadow-2xl bg-white ">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">INCREASE TRAFFIC</h2>
                    <p className="text-sm">
                      We create website that clearly reflects your expertise,
                      story, and values
                    </p>
                  </div>
                </div>
                <div className="w-[200px] h-[170px] rounded-lg shadow-2xl bg-white mt-3 ">
                  <div className="flex flex-col gap-2 justify-center text-black p-4">
                    <img
                      className="w-10"
                      src="/services/icone-one.png"
                      alt=""
                    />
                    <h2 className="font-bold">INCREASE TRAFFIC</h2>
                    <p className="text-sm">
                      We create website that clearly reflects your expertise,
                      story, and values
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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


      <Testimonials />
    </div>
  );
}

export default Seoservices;
