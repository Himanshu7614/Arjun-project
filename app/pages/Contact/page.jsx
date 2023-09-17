"use client";
import React from "react";
import { motion } from "framer-motion";

function about() {
  return (
    <>
  <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24  flex sm:flex-nowrap flex-wrap lg:w-[80%] mx-auto items-center">
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
    <div className="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8  md:mt-0 rounded-lg ">
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>


    <section className='flex  '>

    <div className=' flex mx-auto gap-12 items-center w-[10]  text-center mt-[6rem] '>
      <img src="/About/Instagram.svg" alt="" />
      <img src="/About/Linkedin.svg" alt="" />
      <img src="/About/Twitter.svg" alt="" />
    </div>



    </section>


    </>
  )
}

export default about