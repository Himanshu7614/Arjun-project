import React from 'react'
import Image from "next/image";


function Brands() {
  return (
    <div>
        {/* brand section */}
      <section className=" body-font">
        <hr className="w-[90%] mx-auto" />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="text-sm uppercase">WORK WITH US</p>
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
              Check our best clients & partners
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
              magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
              incididunt ut labore et.
            </p>
          </div>
          <div className="container mx-auto my-10">
            <div className="flex gap-8 py-1.5 justify-start md:justify-between overflow-x-auto         whitespace-nowrap">
              <Image
                src="/homepage/brand.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/homepage/brand.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/homepage/brand.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/homepage/brand.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/homepage/brand.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto" />
      </section>
    </div>
  )
}

export default Brands