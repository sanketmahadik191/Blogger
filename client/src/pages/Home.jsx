import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../store/blogSlice";
import { logout } from "../store/authSlice"; 
import homeImg from "../assets/home.jpg"
import BlogCard from "../components/BlogCard";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs, status } = useSelector((state) => state.blogs);

  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const blogsPerPage = 9;

  useEffect(() => {
    dispatch(fetchBlogs());
    const storedUser = sessionStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [dispatch]);

  // filtered blogs with user auth
  const filteredBlogs = blogs.filter((blog) => {
    return (
      (!user || blog.authorId === user._id) && 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const offset = currentPage * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="z-10 absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-white shadow-md">
        <div className="text-black font-bold text-xl">LOGO</div>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-800 font-medium">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md">
              Sign In
            </button>
          </Link>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <img
          src={homeImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">
          <p className="uppercase tracking-wider text-sm">Adventure</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Explore the World Through Blogs
          </h1>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Blogs</h2>

          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 pr-10"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {user && (
              <Link to="/add-blog">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md">
                  + Add
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Blogs*/}
        {status === "loading" ? (
          <p className="text-center mt-6">Loading...</p>
        ) : status === "failed" ? (
          <p className="text-center mt-6 text-red-500">Failed to load blogs</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center mt-6 text-gray-500">No blogs found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} user={user} />
            ))}
          </div>
        )}

        {/* Pagination Setup with react pagination  */}
        {filteredBlogs.length > blogsPerPage && (
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
        )}
      </div>
    </div>
  );
};

export default Home;
