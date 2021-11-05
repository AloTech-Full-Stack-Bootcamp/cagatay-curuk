// import model schema
const Post = require('../model/Post');

// about page
exports.getAboutPage = (req, res) => {
  res.render('about');
};

// get add post page
exports.getAddPage = (req, res) => {
  res.render('add_post');
};