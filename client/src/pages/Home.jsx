import React, { useState } from "react";
import BlogCard from "../components/BlogCard"
import blogData from "../assets/blogData";
import ReactPaginate from "react-paginate";


const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 9;
  
    // Get the blogs for the current page
    const offset = currentPage * blogsPerPage;
    const currentBlogs = blogData.slice(offset, offset + blogsPerPage);
    const pageCount = Math.ceil(blogData.length / blogsPerPage);
  
    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">LOGO</div>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-md">Sign In</button>
        </nav>
  
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <img
            src="https://source.unsplash.com/1600x900/?ocean,beach"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">
            <p className="uppercase tracking-wider text-sm">Adventure</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Richird Norton photorealistic rendering as real photos
            </h1>
            <p className="mt-2 text-sm">
              1 Jan 2023 — Progressively innovate cooperative systems through technically sound functionalities.
            </p>
          </div>
        </div>
  
        {/* Blog Section */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blogs</h2>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md">
                + Add
              </button>
            </div>
          </div>
  
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
  
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <ReactPaginate
              previousLabel={"← Prev"}
              nextLabel={"Next →"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"flex space-x-3"}
              pageClassName={"px-3 py-2 border rounded-md cursor-pointer"}
              activeClassName={"bg-purple-600 text-white"}
              previousClassName={"px-3 py-2 border rounded-md cursor-pointer"}
              nextClassName={"px-3 py-2 border rounded-md cursor-pointer"}
              disabledClassName={"opacity-50 cursor-not-allowed"}
            />
          </div>
        </div>
      </div>
    );
  };

export default Home;
