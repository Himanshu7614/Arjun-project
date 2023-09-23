"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../../common/Button/Textlink"


function analiyst() {
  return (
    <div>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12 gap-3">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
            Transforming Raw Data into Actionable Reports
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Analytical reports are not just data summaries, theyre your compass in the data-driven world. They illuminate your path, helping you navigate the complexities of business with clarity and confidence.
            </p>
            <Textlink text={"Learn more"} href={"/"} className={"font-bold"} />

          </div>
        </div>
        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <img
                className="lg:w-[35rem] mx-auto hover:scale-105 transition-all cursor-pointer-all duration-500"
                src="/services/analytics-one.png"
                alt="About Image"
              />
            </motion.div>
      </section>


        {/* last section */}
        <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  uppercase">
              let’s understand your customer better with analytics
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
              <p>Gain insights into user behavior and learn how to better the user experience and attract potential customers.
              </p>

            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
                <p class="leading-relaxed mb-4">Use analytics to group customers based on demographics, behaviors, and preferences.
                </p>
                <p class="leading-relaxed mb-4">Analyze how customers interact with your website, products, or services to identify patterns and preferences. 

                </p>
                <p class="leading-relaxed mb-4">Conduct A/B tests on website elements, emails, or ads to understand what resonates best with your audience.
                </p>
                <p class="leading-relaxed mb-4">Monitor customer feedback and reviews to gain insights into their satisfaction, pain points, and expectations.
                </p>
                <p class="leading-relaxed mb-4">Calculate CLV to understand the long-term value of each customer and prioritize retention efforts.

                </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/analytics-two.png"
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
              <p> With us, theyre a thrilling journey through the world of data, where insights are brought to life, decisions are made with confidence, and the possibilities are endless.
              </p>
            </div>
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <p className="text-sm uppercase">WORK WITH US</p>
              <h2 class="text-4xl font-bold  uppercase">
              reports were boring until you meet us
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
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center pt-4"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
                src="/services/analytics-three.png"
                alt="About Image"
              />
            </motion.div>
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
                <p class="leading-relaxed mb-4">Our reports come with a narrative, a storyline that guides you through the data, making it relatable and meaningful.  
                </p>
                <p class="leading-relaxed mb-4">
Our reports are designed to provide actionable insights that drive decision-making. We dont just tell you whats happening; we tell you what you can do about it.

                </p>
                <p class="leading-relaxed mb-4">
Numbers on a page used to be a blur, but our experts turn them into a roadmap for decision-making. We dont just deliver data; we deliver understanding.
                </p>
                <p class="leading-relaxed mb-4">Our experts infuse life into analytical reports through data visualization. We transform data into dynamic charts and graphs that tell a story, making insights leap off the page.
                </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default analiyst;
