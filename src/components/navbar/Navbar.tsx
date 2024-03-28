import React from 'react';
import Link from 'next/link';
import Links from './links/Links';
import Image from 'next/image';



const Navbar = () => {
  return (
    <div className='nav py-4'>
      <div className='container  mx-auto flex justify-between items-center'>
      <Link href="/"><Image src="/logo.png" alt='logo' width={200} height={50}></Image></Link>
    
        <Links/>
      </div>      
    </div>
  )
}

export default Navbar