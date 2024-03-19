import React from "react";

const BlogPost = ({ title, description, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="mb-4 rounded-lg" />
        )}
        <div className="prose">{content}</div>
      </div>
    </div>
  );
};

export default BlogPost;
