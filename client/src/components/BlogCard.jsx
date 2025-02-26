import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{blog.author} • {blog.date}</p>
        <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{blog.description}</p>
        <p className="mt-2 text-blue-500 font-medium text-sm">{blog.category}</p>
      </div>
    </div>
  );
};

export default BlogCard;
