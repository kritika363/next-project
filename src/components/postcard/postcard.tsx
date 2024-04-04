import React from 'react';
import Image from 'next/image';
import style from './post.module.css';
import Link from 'next/link';
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
    <div className='inner-card rounded-md overflow-hidden bg-slate-300 p-2'>
        <div className={style.postimage}>
        <Image src='/building.jpg' alt='post' fill className='rounded-md'></Image>
        </div>
      
        <h3 className='font-bold  capitalize mb-3 bold'>{data.kv.title}</h3>
        {/* <h6>20/03/02024</h6> */}
        <p>{data.kv.body} </p>
        <Link href={`/blog/${data.kv.id}`} className='bg-black text-white px-5 py-2 rounded-md mt-4 inline-block'>Read More</Link>
    </div>
  )
}

export default postCard