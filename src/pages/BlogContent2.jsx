import React from "react";
import BlogPost from "../components/BlogPost";

const BlogContent2 = () => {
  return (
    <div className="container mx-auto">
      <BlogPost
        title="Getting to Know 30+ Useful Command Terminal Commands for Beginners"
        description="Let's learn the simple way to push your project to GitHub! In this blog, we'll discuss the steps in a relaxed and understandable style. No need to worry about technicalities anymore because we'll be there to guide you from start to finish. Ready to embark on your journey towards smoother and more productive collaboration?"
        date={"March 19, 2024"}
        time={"09:08 AM"}
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
            <p>
              In this blog, we'll dive deep into how to push projects using Git.
              We'll discuss it in simple and friendly language, so no need to
              fret about technical jargon!
            </p>
            <p>
              From setting up repositories, adding changes, to resolving merge
              conflicts, we'll cover it all directly and enjoyably. So, get
              ready to gain newfound confidence in managing your projects on
              GitHub!
            </p>
            <p>
              Come on, let's explore a more enjoyable and productive world of
              collaboration together. We can't wait to share this knowledge with
              you and see how your projects flourish rapidly!
            </p>
            <p>
              Here are the steps to download and install Git on various
              platforms:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent2;
