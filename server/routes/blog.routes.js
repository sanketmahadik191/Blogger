const express = require("express");
const {
    createBlog,
    updateBlog,
    deleteBlog,
    viewBlog,
    viewBlogById,
    viewBlogByCategory,
    viewBlogByUser,
} = require("../controllers/blog.controller");
const { protect } = require("../middleware/authetication");

const router = express.Router();

// Public Routes
router.get("/", viewBlog);
router.get("/:id", viewBlogById);
router.get("/category/:category", viewBlogByCategory);
router.get("/user/:userId", viewBlogByUser);

// Protected Routes (Require Authentication)
router.post("/",protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
