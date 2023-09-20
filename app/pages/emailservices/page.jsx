"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink"

function Emailservices() {
  return (
    <div>
        {/* first section */}
    <section className="text-white body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We turn ideas into extraordinary digital products & experiences
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
              Elevate Clicks is a Digital Marketing agency We at Elevate Clicks,
              we're not just about boosting your online presence; we're about
              giving your brand a rocket-powered boost into the digital cosmos.
              Let's embark on this cosmic journey together!
            </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

          </div>
        </div>
      </section>
      {/* second section */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
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
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>

              <h2 className="text-4xl font-bold  tracking-widest">
                So what do we do exactly?
              </h2>
              <p className="leading-relaxed mb-4">
                We're not just another digital marketing agency. We're a
                passionate team of experts driven by a deep love for helping
                businesses thrive in the online realm. Our secret sauce? It's
                our people. We're not your typical 9-to-5 crew; we're a group of
                enthusiastic individuals who eat, sleep, and breathe digital.
                Our collective expertise is our superpower, and we channel it to
                transform your online presence.
              </p>
              <p className="leading-relaxed mb-4">
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
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

            </div>
          </div>
        </div>
      </section>


    {/* section */}
    <section className="text-black w-[80%] mx-auto bg-white rounded-lg">
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-between">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="/services/emailone.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className=" text-3xl mb-4 font-bold ">Before they sold out readymade gluten
        </h1>
        <p class="mb-8">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
                        <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

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
                        <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

        </div>
        </div>        
        <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="/services/emailtwo.png" />
        </div>
    </div>
    </section>

    {/* last section */}
    <section className="text-white body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We turn ideas into extraordinary digital products & experiences
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
              Elevate Clicks is a Digital Marketing agency We at Elevate Clicks,
              we're not just about boosting your online presence; we're about
              giving your brand a rocket-powered boost into the digital cosmos.
              Let's embark on this cosmic journey together!
            </p>
          </div>
        </div>

        <section>
        <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -mb-10 text-center justify-center items-center md:w-[70%] mx-auto ">
            <div className="sm:w-1/2 mb-10 px-4">
                <div className="h-[200px] w-[300px] bg-white relative rounded-lg flex flex-col justify-center items-center">
                      <div className=" absolute h-[75px] w-[100px] top-[-30px] bg-orange-500 left-[31%] rounded-lg"></div>
                      <h1 className="text-lg mx-auto">20%</h1>
                      <h1 className="text-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
            <div className="h-[200px] w-[300px] bg-white relative rounded-lg flex flex-col justify-center items-center">
                      <div className=" absolute h-[75px] w-[100px] top-[-30px] bg-orange-500 left-[31%] rounded-lg"></div>
                      <h1 className="text-lg mx-auto">20%</h1>
                      <h1 className="text-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>


                </div>
              </div>
          </div>
        </div>
      </section>
        </section>

      </section>


    </div>
  )
}

export default Emailservices