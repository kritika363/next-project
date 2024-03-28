"use client";
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const navigationpage = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchquery = useSearchParams()
    const q = searchquery.get("q")
    console.log(searchquery)

   const submitclick = () => {
    console.log("clicked")
    router.push("/")
   }
  return (
    <div className='pt-40'>
        <Link href="/">Go to home</Link>
        <button onClick={submitclick}>Submit</button>
    </div>
  )
}

export default navigationpage