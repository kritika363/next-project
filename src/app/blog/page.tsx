import React from 'react';
import PostCard from '../../components/postcard/postcard'; // Correct path and case sensitivity
const getdat = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json();
}
const blogs=async() => { 
  const posts = await getdat()
  return (
   <div className='container gap-x-8 gap-y-4 grid gap-4 grid-cols-3 '>
    {posts.map((post) => {
      <div className='inner-post' key={post.id}>
     
     <PostCard post={post}/>
     </div>
    }
    )}
    
   

   </div>
  )
}

export default blogs;
