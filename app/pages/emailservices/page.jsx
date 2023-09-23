"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink";

function Emailservices() {
  return (
    <div>
      {/* first section */}
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%]  mb-6">
              Boost your ROI with the industry-leading email marketing platform
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
              Are you ready to take your email marketing efforts to the next
              level? Look no further! Elevate Clicks is here to transform the
              way you engage with your audience, boost your brands visibility,
              and drive remarkable results.
            </p>
            <Textlink
              text={"Get in touch"}
              href={"/pages/contact"}
              className={"font-bold"}
            />
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
                src="/services/email-one.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase font-semibold">WORK WITH US</p>

              <h2 className="text-4xl font-bold ">
                Email marketing like never before
              </h2>
              <p className="leading-relaxed mb-4">
                Email marketing isnt just about sending messages; its about
                connecting with your audience, driving conversions, and
                achieving your business goals.
              </p>
              <p className="leading-relaxed mb-4">
                Thats where our Email Marketing Service shines. Were not just
                another agency; were your trusted partner in this digital
                journey.
              </p>
              <p className="leading-relaxed mb-4">
                With personalized, data-driven strategies, we craft compelling
                campaigns that captivate your audience.
              </p>
              <p className="leading-relaxed mb-4">
                Our automation expertise saves your time and boosts results. We
                understand that one size doesnt fit all, so we segment your
                audience strategically.
              </p>
              <p className="leading-relaxed mb-4">
                Trust is paramount, and we ensure strict compliance with privacy
                standards.
              </p>
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* section */}
      <section className="text-black w-[80%] mx-auto bg-white rounded-lg">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-between">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/services/emailone.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" text-3xl mb-4 font-bold ">
              leading email marketing platform services
            </h1>
            <p class="mb-8">
              When you choose Elevate Clicks as your email marketing partner,
              youre not just hiring a service; youre gaining a dedicated team
              invested in your success. Were with you every step of the way,
              from strategy development to campaign execution and beyond.
            </p>
            <div class="flex justify-center">
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="text-black w-[80%] mx-auto bg-white rounded-lg mt-[2rem]">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-between">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" text-3xl mb-4 font-bold ">Email Campaign Creation</h1>
            <p class="mb-8">- Designing and sending newsletters, product updates, or
              promotions.
            </p>
            <p class="mb-8">- Segmenting email lists for personalized content.
            </p>

            <div class="flex justify-center">
              <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
              />
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/services/emailtwo.png"
            />
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%]  mb-6">
            what makes us Expert ?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
            What sets us apart as email marketing experts? Its our commitment to excellence in every aspect. <br />
            Our team combines a mastery of design, crafting visually stunning templates, with a dedication to personalized content that resonates with your audience. Were subject line connoisseurs, curating the perfect hook for each campaign. And we believe in the power of automation, streamlining processes to save your time while delivering outstanding results. 

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
                    <h1 className="text-4xl font-bold mx-auto">67 %</h1>
                    <h1 className="text-lg mx-auto">
                    Average open rate
                    </h1>
                  </div>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="h-[200px] w-[300px] bg-white relative rounded-lg flex flex-col justify-center items-center">
                    <div className=" absolute h-[75px] w-[100px] top-[-30px] bg-orange-500 left-[31%] rounded-lg"></div>
                    <h1 className="text-4xl font-bold mx-auto">2.35 %</h1>
                    <h1 className="text-lg mx-auto">
                    Average meetings booked
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Emailservices;
