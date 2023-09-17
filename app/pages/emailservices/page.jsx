"use client";
import React from "react";
import { motion } from "framer-motion";

function Emailservices() {
  return (
    <div>
        {/* first section */}
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
      {/* second section */}
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
              <p className="text-sm uppercase">WORK WITH US</p>

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


    {/* section */}
    <section class="text-black w-[80%] mx-auto bg-white rounded-lg">
    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-between">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class=" text-3xl mb-4 font-bold ">Before they sold out readymade gluten
        </h1>
        <p class="mb-8">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
        </div>
    </div>
    </section>
    <section class="text-black w-[80%] mx-auto bg-white rounded-lg mt-[2rem]">
    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-between">
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class=" text-3xl mb-4 font-bold ">Before they sold out readymade gluten
        </h1>
        <p class="mb-8">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
        </div>        
        <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
    </div>
    </section>

    </div>
  )
}

export default Emailservices