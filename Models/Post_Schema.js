const mongoose=require('mongoose');

const Post = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    category_id: String,
  });

  module.exports = mongoose.model("PostData", Post);