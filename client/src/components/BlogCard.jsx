import React from "react";
import { Link, useNavigate } from "react-router-dom";
import placeholderImg from '../assets/login.jpg'

const BlogCard = ({ blog,user }) => {
  const navigate = useNavigate();
  // console.log(blog,user);
  
  const handleClick = (e) => {
    if (!user) {
      e.preventDefault(); 
      navigate("/login");
    }
  };

  return (
    <Link to={`/blog/${blog._id}`} onClick={handleClick} className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg">
        <img
          src={ placeholderImg}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-500">
            {blog.author?.name || "Unknown Author"} •{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <h3 className="text-lg font-semibold mt-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 mt-1 text-sm line-clamp-3">
            {blog.content?.length > 100
              ? blog.content.substring(0, 100) + "..."
              : blog.content}
          </p>
          <p className="mt-2 text-blue-500 font-medium text-sm">
            {blog.category_name || "Uncategorized"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
