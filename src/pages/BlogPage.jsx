import React from "react";
import BlogContent1 from "./BlogContent1";
import BlogContent2 from "./BlogContent2";

const BlogPage = ({ content }) => {
  let ContentComponent;

  switch (content) {
    case "blog1":
      ContentComponent = BlogContent1;
      break;
    case "blog2":
      ContentComponent = BlogContent2;
      break;
    default:
      ContentComponent = () => <div>Invalid content</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col md:flex-row md:my-5">
        <ContentComponent />
      </div>
    </div>
  );
};

export default BlogPage;
