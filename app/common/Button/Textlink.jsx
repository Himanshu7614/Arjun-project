import Link from "next/link";
import React from "react";

function Textlink({ text, className, href }) {
  return (
    <div>
      <div
        className={`flex items-center gap-2 hover:gap-3 trasi duration-500  rounded-full my-4 text-lg ${className}`}
      >
        <Link href={`${href}`} className="  text-transparent  bg-clip-text bg-gradient-to-r from-[#5E58E7] to-pink-400">
          {text}
        </Link>
        <svg
          width="34px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L16 8M20 12L16 16"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Textlink;
