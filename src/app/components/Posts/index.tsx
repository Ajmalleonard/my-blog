import React from "react";
import { posts } from "../constants";

function Posts() {
  return (
    <div className="flex gap-10 flex-col  my-10  rounded-3xl  p-5   bg-dark-50 w-[60%] h-full">
      <h3 className="subheading">RECENTLY PUBLISHED</h3>
      <div className="flex gap-1 space-y-1 flex-wrap w-full">
        {posts.map((post, index) => {
          return (
            <div className="flex flex-col gap-3 rounded-lg w- p-5">
              <h3 className="heading">{post.title}</h3>
              <p className="">{post.description.substring(0, 427)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
