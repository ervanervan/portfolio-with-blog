import React from "react";
import BlogContent1 from "./BlogContent1";
import DashLeft from "../components/DashLeft";
import DashRight from "../components/DashRight";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col md:flex-row md:my-5">
        <DashLeft />
        <BlogContent1 />
        <DashRight />
      </div>
    </div>
  );
};

export default BlogPage;
