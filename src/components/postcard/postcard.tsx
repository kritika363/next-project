import React from 'react';
import Image from 'next/image';
import style from './post.module.css'

const postCard = ({post}) => {
  return (
    <div className='inner-card'>
        <div className={style.postimage}>
        <Image src='/building.jpg' alt='post' fill></Image>
        </div>
      
        <h3>{post.title}</h3>
        {/* <h6>20/03/02024</h6> */}
        <p>{post.description} </p>
    </div>
  )
}

export default postCard