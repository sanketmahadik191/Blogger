import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById } from "../store/blogSlice";
import { useParams} from "react-router-dom";
import imgD from "../assets/login.jpg"

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch, id]);

  if (!blog) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10">

      {/* Future ref suppport for image uplode on cloud */}
      {/* {blog.blogImg && <img src={blog.blogImg} alt={blog.title} className="w-full h-80 object-cover rounded-md" />} */}
      <img className="w-full h-80 object-cover rounded-md" src={imgD} />
      <h2 className="text-3xl font-bold mt-4">{blog.title}</h2>
      <p className="text-gray-600 mt-2">{blog.content}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {blog.category_name}</p>
    </div>
  );
};

export default BlogDetail;
