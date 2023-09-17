"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";

function Socialmedia() {
  return (
    <div>
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
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/socialone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="md:w-[80%] mx-auto body-font">
  <div className="container px-5 py-24 mx-auto">
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

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2  p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">Chichen Itza</h2>
          <p className="text-sm">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">Chichen Itza</h2>
          <p className="text-sm">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2  p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">Chichen Itza</h2>
          <p className="text-sm">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2  p-2">
        <div className="border p-4 rounded-lg">
          <img className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">Chichen Itza</h2>
          <p className="text-sm">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
        </section>

        {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 className="text-4xl font-bold my-4">
                So what do we do exactly?
              </h2>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm.
              </p>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm.
              </p>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm.
              </p>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm.
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
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/social-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <Testimonials />
    </div>
  )
}

export default Socialmedia