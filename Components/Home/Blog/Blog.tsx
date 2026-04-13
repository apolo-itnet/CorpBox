import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <h2 className="text-orange-500 text-lg text-center font-medium tracking-widest">
        Blog
      </h2>
      <h1 className="text-3xl md:text-5xl text-center font-bold mt-6 mb-16">
        Our Latest News & <br /> Articles From Our Blog
      </h1>
      <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div>
          <BlogCard
            image="/images/b1.png"
            title="Standard chunk of Lorem Ipsum Our Company"
          />
        </div>
        <div>
          <BlogCard
            image="/images/b2.png"
            title="These cases are many simple and easy"
          />
        </div>
        <div>
          <BlogCard
            image="/images/b3.png"
            title="Standard chunk of Lorem Ipsum Our Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
