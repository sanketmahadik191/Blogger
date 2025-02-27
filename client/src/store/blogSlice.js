import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//some apis not implemented ( for future scope only)

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get("/api/blogs/");
  return response.data.blogs;
});

export const fetchBlogById = createAsyncThunk("blogs/fetchBlogById", async (id) => {
  const response = await axios.get(`/api/blogs/${id}`);
  return response.data.blog;
});

export const fetchBlogsByCategory = createAsyncThunk("blogs/fetchBlogsByCategory", async (category) => {
  const response = await axios.get(`/api/blogs/category/${category}`);
  return response.data.blogs;
});

export const fetchBlogsByUser = createAsyncThunk("blogs/fetchBlogsByUser", async (userId) => {
  const response = await axios.get(`/api/blogs/user/${userId}`);
  return response.data.blogs;
});

export const createBlog = createAsyncThunk("blogs/createBlog", async (blogData, { rejectWithValue }) => {
    try{
  const token = sessionStorage.getItem("token");
  console.log(token);
  const response = await axios.post("/api/blogs/", blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.blog;
} catch (error) {
    return rejectWithValue(error.response?.data || "Failed to create blog");
  }
});

export const updateBlog = createAsyncThunk("blogs/updateBlog", async ({ id, blogData }, { getState }) => {
  const token = getState().auth.token;
  const response = await axios.put(`/api/blogs/${id}`, blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.blog;
});

export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id, { getState }) => {
  const token = getState().auth.token;
  await axios.delete(`/api/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: { blogs: [], blog: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog));
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
      });
  },
});

export default blogSlice.reducer;
