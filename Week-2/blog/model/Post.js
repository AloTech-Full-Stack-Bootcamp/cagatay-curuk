const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema
const PostSchema = new Schema({
  title: String,
  message: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
