'use client'

import { posts } from "./constants";


const Simmilar = () => {

const date = Number(new Date().getTime);
  return <section className="flex flex-wrap gap-2">
{posts.map((content, index) => {
return (
  <div
    key={index}
    className="rounded-lg flex items-center justify-center  bg-dark-40 w-[300px]  h-[50px]"
  >
    <div className="flex justify-between w-full p-2">
      {" "}
      <h3 className="text-[13px]  text-center text-redish-50">
        {content.title}
      </h3>
      <p className="text-[10px] text-orange-400">100V</p>
    </div>
    <p>{date}</p>
  </div>
);
})}
  </section>;
};
export default Simmilar;