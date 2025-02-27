const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'Title is required'],
    trim: true,
  },
  blogImg:{
    type:String,
  },
  category_name:{
    type: String,
    required: true,
    enum: ["Technology", "Travel", "Health", "Food", "Lifestyle", "Education", "Entertainment","Others"],
  },
  content:{
    type:String,
    required:[true,'Content is required'],
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
},{timestamps:true}
);


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;