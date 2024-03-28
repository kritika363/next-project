import React from 'react';
import Image from 'next/image';
import style from './about.module.css'

const aboutPage = () => {
  return (
    <div className='container flex items-center justify-between pt-8'>
     <div  className="imgContainer pt-6" >
      <Image src="/aboutimg.jpg" alt='about image' fill></Image>
    </div>
    <div className={style.content}>
    <h6>About Agency</h6>
    <h2 className={style.headingInner}>We Create digital ideas that are bigger,  bolder, braver and better</h2>
    <p>But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p>
    </div>
    
    </div>
   
  )
}

export default aboutPage