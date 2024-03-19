import React from "react";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <BlogPost
        title="Easy Steps to Push Your Project to GitHub with Git: Guide for Developers"
        description="Let's learn the simple way to push your project to GitHub! In this blog, we'll discuss the steps in a relaxed and understandable style. No need to worry about technicalities anymore because we'll be there to guide you from start to finish. Ready to embark on your journey towards smoother and more productive collaboration?"
        content="Konten blog pertama Anda di sini. Anda dapat menambahkan teks, gambar, video, dll."
        imageUrl="https://example.com/image1.jpg"
      />
    </div>
  );
};

export default BlogPage;
