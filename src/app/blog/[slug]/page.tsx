import React from "react";
import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const singleBlog = () => {
  return (
    <div className="pt-20 bg-sky-500 blog-inner">
      <div className="container mt-20 flex-row">
        <Image src="/building.jpg" alt="post" width={450} height={640}></Image>
        <div className="content-blog">
          <h1>Bulding</h1>
          <h6>20/03/02024</h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default singleBlog;
