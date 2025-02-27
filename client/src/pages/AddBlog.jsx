import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../store/blogSlice";
import { useNavigate } from "react-router-dom";

const categories = ["Technology", "Travel", "Health", "Food", "Lifestyle", "Education", "Entertainment","Others"];

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [blogData, setBlogData] = useState({ 
    title: "", 
    content: "", 
    category_name: categories[7], 
    blogImg: "temp.jpg" 
  });

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(blogData));
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          maxLength={20}
          className="w-full p-2 border rounded" 
          required 
        />
        
        <textarea 
          name="content" 
          placeholder="Content" 
          onChange={handleChange} 
          maxLength={250}
          className="w-full p-2 border rounded" 
          required 
        />

        <select 
          name="category_name" 
          value={blogData.category_name} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input 
          type="text" 
          name="blogImg" 
          placeholder="Image url (currently static image loading)" 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
