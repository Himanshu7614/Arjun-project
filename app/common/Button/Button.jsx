import Link from "next/link";
import React from "react";

export default function Button({ text, className, href }) {
  return (
    <div className={` px-6 py-2 bg-[#0000004f] transition-all duration-500 rounded-full hover:scale-105 flex items-center gap-2 hover:gap-3 ${className}`}>
      <Link href={`${href}`} >
        {text}
      </Link>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="white" />
      </svg>
    </div>
  );
}

