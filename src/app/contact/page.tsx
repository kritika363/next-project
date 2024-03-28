"use client";
import React from 'react';
import Image from 'next/image';
import style from './contact.module.css'

const contact = () => {
  return (
    <div className='container flex items-center justify-between pt-8 mt-5'>
    <div  className="imgContainer pt-6" >
     <Image src="/contactimg.jpg" alt='about image' fill></Image>
   </div>
   <div className={style.content}>
   <h2 className={style.headingInner}>Contact Us</h2>
   <form action="">
    <div className='formGroup'>
    <input type='text' className='formControl' placeholder='Name'></input>
    </div>
    <div className='formGroup'>
     <input type='email' className='formControl' placeholder='Email '></input>
     </div>
     <div className='formGroup'>
     <input type='text' className='formControl' placeholder='Location'></input>
     </div>
     <div className='formGroup'>
     <textarea className='formControl' rows={3} placeholder='Message'></textarea>
     </div>
     <button type='submit' className='submit-btn' onClick={() => console.log("submitted form")}>Submit</button>
   </form>
   </div>
   
   </div>
  )
}

export default contact