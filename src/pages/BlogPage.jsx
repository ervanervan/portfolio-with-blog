import React from "react";
import BlogContent1 from "./BlogContent1";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col md:flex-row md:my-5">
        <BlogContent1 />
      </div>
    </div>
  );
};

export default BlogPage;
