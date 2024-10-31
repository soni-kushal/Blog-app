import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="relative text-slate-200 m-0 bg-slate-600 p-2 font-semibold ">
    <div className="relative flex gap-4 items-center place-content-end text-2xl px-2">
     <Link href="/" >Home</Link>
     <Link href="/blogs" >Blogs</Link>
     <Link href="/research" >Research</Link>
    </div>
   </header>
  )
}

export default Header