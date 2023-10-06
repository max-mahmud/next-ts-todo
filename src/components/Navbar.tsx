"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const searchParams = useSearchParams()
    const data = searchParams.get("todos")
  return (
    <div className='flex gap-4 justify-between my-4 border-b text-center text-slate-500 font-medium'>
      <Link href="/" className={`${data==null ? "border-b-2 border-green-500  " : ""} w-[33%] `}>All</Link>
      <Link href="/?todos=active" className={`${data=="active" ? "border-b-2 border-green-500  " : ""} w-[33%] `} >Active</Link>
      <Link href="/?todos=completed"  className={`${data=="completed" ? "border-b-2 border-green-500  " : ""} w-[33%] `}>Completed</Link>
    </div>
  )
}

export default Navbar
