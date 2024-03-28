import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div  className='p-8 text-center'>
     <Link href="/">
     <Image src="/not-found.gif" alt='not found' width={1200} height={680}></Image>
      </Link> 
       {/* <h3>PAGE IS NOT FOUND</h3>
       <Link href="/">Return Home</Link> */}
    </div>
  )
}

export default NotFound