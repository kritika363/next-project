import React from 'react';
import Image from 'next/image';
import style from './post.module.css'
interface postData{

  kv: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
}

const postCard = (data: postData) => {
  return (
    <div className='inner-card'>
        <div className={style.postimage}>
        <Image src='/building.jpg' alt='post' fill></Image>
        </div>
      
        <h3 className='font-bold text-cyan-600'>{data.kv.title}</h3>
        {/* <h6>20/03/02024</h6> */}
        <p>{data.kv.body} </p>
    </div>
  )
}

export default postCard