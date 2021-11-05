const Post = require("../model/Post");
const moment = require('moment') // import moment for datetime beautify
const fs = require('fs')

// get index page with all post - method=READ
exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort("-dateCreated"); // sort post by create date
    res.render("index", { posts,
        moment: moment // send moment libary as context
     });
};


// show post on single page - method=READ
exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", { post , moment: moment});
};

// create the post on db - method=POST
exports.createPost = async (req, res) => {
    const uploadDir = './public/uploads';

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    let uploadeImage = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;

    uploadeImage.mv(uploadPath, async () => {
        await Post.create({
            ...req.body,
            image: '/uploads/' + uploadeImage.name,
        });
        res.redirect('/');
    });
};

// get edit post page - method=READ
exports.editPost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }); // get url.parameters.id == post.id
    res.render('edit', {
      post,
    });
  };

// update post on db - method=PUT
exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
};

// delete post on db - method=DELETE
exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
};