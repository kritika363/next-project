import React from "react";
import PostCard from "../../components/postcard/postcard"; // Correct path and case sensitivity
import { getPost } from "@/lib/data";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

  // const getdata = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   if (!res.ok) {
  //     throw new Error("something went wrong");
  //   }
  //   return res.json();
  // };
const blogs = async () => {
  const posts = await getPost;

  return (
    <div className="container gap-x-8 gap-y-4 grid gap-4 grid-cols-3 mt-20 pt-10">
      {posts.map((item: Post) => (
        <PostCard kv={item} />
      ))}
    </div>
  );
};

export default blogs;
