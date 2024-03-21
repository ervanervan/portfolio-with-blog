import React from "react";
import BlogPost from "../components/BlogPost";

const BlogContent2 = () => {
  return (
    <div className="container mx-auto">
      <BlogPost
        title="Getting to Know 30+ Useful Command Terminal Commands for Beginners"
        description="Hello everyone! Welcome back to our blog where we'll explore 30+ useful command terminal commands that are essential for beginners. Whether you're just starting out with the terminal or looking to expand your knowledge of available commands, you've come to the right place! Let's dive into the most basic commands and gradually move on to more advanced ones."
        date={"March 21, 2024"}
        time={"09:41 PM"}
      />
      <div className="max-w-xl mx-auto bg-[#1C1C1C] rounded-b-lg text-neutral-400">
        <div className="px-6 pb-6">
          <div className="border border-neutral-700 mb-10" />
          <div className="flex flex-col gap-y-3">
            <p>
              Hey, fellow developers! Pushing projects to GitHub can often be
              confusing. But don't worry, because you're in the right place to
              get help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent2;
