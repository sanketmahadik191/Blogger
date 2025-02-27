const Blog = require("../models/Blog");
const Category = require("../models/Category");

// only createBlog , viewBlog , viewBlogbyId are in use others are for future improvements

const createBlog = async (req, res) => {
    try {
        const { title, content, category_name, blogImg } = req.body;

        // console.log(req.body);
        
        if (!title || !content || !category_name) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        
        // console.log(req.user);
        
        const newBlog = await Blog.create({
            title,
            content,
            category_name,
            blogImg,
            author: req.user._id,
        });

        res.status(201).json({ success: true, message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.error("Create Blog Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category_name, blogImg } = req.body;

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: "Unauthorized action" });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.category_name = category_name || blog.category_name;
        blog.blogImg = blogImg || blog.blogImg;

        await blog.save();
        res.status(200).json({ success: true, message: "Blog updated successfully", blog });
    } catch (error) {
        console.error("Update Blog Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: "Unauthorized action" });
        }

        await blog.deleteOne();
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        console.error("Delete Blog Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const viewBlog = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "name email").populate("category_name", "name");
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error("View Blogs Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const viewBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id).populate("author", "name email").populate("category_name", "name");

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.status(200).json({ success: true, blog });
    } catch (error) {
        console.error("View Blog By ID Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const viewBlogByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const blogs = await Blog.find({ category_name: category }).populate("author", "name email");

        if (!blogs.length) {
            return res.status(404).json({ success: false, message: "No blogs found in this category" });
        }

        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error("View Blogs By Category Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const viewBlogByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const blogs = await Blog.find({ author: userId }).populate("category_name", "name");

        if (!blogs.length) {
            return res.status(404).json({ success: false, message: "No blogs found for this user" });
        }

        res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error("View Blogs By User Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    viewBlog,
    viewBlogById,
    viewBlogByCategory,
    viewBlogByUser,
};
