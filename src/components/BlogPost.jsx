import React from "react";

const BlogPost = ({ title, description, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="prose">{content}</div>
      </div>
    </div>
  );
};

export default BlogPost;
