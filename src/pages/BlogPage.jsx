import React from "react";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <BlogPost
        title="Easy Steps to Push Your Project to GitHub with Git: Guide for Developers"
        description="Let's learn the simple way to push your project to GitHub! In this blog, we'll discuss the steps in a relaxed and understandable style. No need to worry about technicalities anymore because we'll be there to guide you from start to finish. Ready to embark on your journey towards smoother and more productive collaboration?"
        content={`Hey, fellow developers! Pushing projects to GitHub can often be confusing. But don't worry, because you're in the right place to get help!

        In this blog, we'll dive deep into how to push projects using Git. We'll discuss it in simple and friendly language, so no need to fret about technical jargon!
        
        From setting up repositories, adding changes, to resolving merge conflicts, we'll cover it all directly and enjoyably. So, get ready to gain newfound confidence in managing your projects on GitHub!
        
        Come on, let's explore a more enjoyable and productive world of collaboration together. We can't wait to share this knowledge with you and see how your projects flourish rapidly!

        `}
      />
    </div>
  );
};

export default BlogPage;
