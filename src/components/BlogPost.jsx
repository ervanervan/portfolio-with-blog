import React from "react";
import { ArrowLeftCircle } from "iconoir-react";
import { Link } from "react-router-dom";

const BlogPost = ({ title, description, content, imageUrl }) => {
  const paragraphs = content.split("\n");
  return (
    <>
      <div className="max-w-xl mx-auto bg-[#1C1C1C] rounded-t-lg text-neutral-400">
        <div className="p-6">
          <Link
            to={"/dashboard"}
            className="flex items-center gap-x-2 py-2 mb-2 w-fit rounded-lg"
          >
            <ArrowLeftCircle width={20} height={20} />
            <span className="text-sm">back to dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-neutral-400 mb-4">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
