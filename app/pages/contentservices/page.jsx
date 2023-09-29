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
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-4">
              <h2 className="text-4xl font-bold ">Content is the heart of digital communication
              </h2>
              <p className="leading-relaxed mb-4 text-xl">Were not just creating content were crafting conversations. Dive into our world of words, where stories resonate, and connections flourish. Unleash the power of meaningful content.
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
              <h2 class="text-4xl font-bold ">How content marketing can be a game changer
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-4">
                <p className="text-sm uppercase">WORK WITH US</p>
                <p class="leading-relaxed mb-4 text-lg">We create website that clearly reflects your expertise, story, and values — so you can spend less time having sales conversations and more time helping people live happier, healthier, and more fulfilling lives..
                </p>
                <p class="leading-relaxed mb-4 text-lg">We create website that clearly reflects your expertise, story, and values — so you can spend less time having sales conversations and more time helping people live happier, healthier, and more fulfilling lives..
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
            <h2 className="text-4xl font-bold ">
            Types of content marketing we provide
            </h2>
            <p className="leading-relaxed mb-4 text-lg">
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
                  <h2 className="text-lg font-bold">Blog</h2>
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
                  <h2 className="text-lg font-bold">Social media</h2>
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
                  <h2 className="text-lg font-bold">Podcasts</h2>
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
                  <h2 className="text-lg font-bold">EMAIL NEWSLETTERS</h2>
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
                  <h2 className="text-lg font-bold">INFOGRAPHICS</h2>
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
                  <h2 className="text-lg font-bold">VIDEO PRODUCTION</h2>
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

              <h2 className="text-4xl font-bold ">
              Benefits to start you’re content journey now
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                Were not just another digital marketing agency. Were a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? Its
                our people. Were not your typical 9-to-5 crew; were a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
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