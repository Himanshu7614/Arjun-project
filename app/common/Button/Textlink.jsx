import Link from 'next/link'
import React from 'react'

function Textlink({ text, className, href }) {
  return (
    <div>
        <div className={`flex items-center gap-2 hover:gap-3 trasi duration-500 py-2 ${className}`}>
      <Link href={`${href}`} >
        {text}
      </Link>
      <svg width="34px" height="24px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    </div>
  )
}

export default Textlink