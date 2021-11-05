const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const methodOverride = require("method-override");
const ejs = require("ejs");

const Post = require("./model/Post");

const postController = require("./controller/postController");
const pageController = require("./controller/pageController");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs"); // define template engine

// mongodb connection
mongoose
    .connect(
        'mongodb+srv://cagatay:Denemeveritabani@cluster0.1g8zr.mongodb.net/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

app.use(function (req, res, next) {
    console.log('Request:', req.path);
    next();
});

// get pages
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);

// CRUD operations
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.get("/posts/edit/:id", postController.editPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

app.listen(PORT, () => {
    console.log(`listened at http://localhost:${PORT}`)
});