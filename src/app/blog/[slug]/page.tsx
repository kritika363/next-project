import React from 'react';
import Image from 'next/image';

const singleBlog = () => {


  return (
    <div className='container'>
       <Image src='/building.jpg' alt='post' fill></Image>
       <div className='content-blog'>
       <h3>Bulding</h3>
        <h6>20/03/02024</h6>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
       </div>
    </div>
  )
}

export default singleBlog