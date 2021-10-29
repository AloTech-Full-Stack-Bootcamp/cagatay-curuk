const express = require('express');

const app = express()
app.set("view engine", "pug");

const PORT = 5000


app.use((req, res, next) => {
    console.log("Current Path: " + req.url);
    next();
})

app.get('/', (req, res) => {
    res.render("master", { page_name: "Home"});
})

app.get('/about', (req, res) => {
    res.render("master", { page_name: "About"});
})

app.get('/contact', (req, res) => {
    res.render("master", { page_name: "Contact"});
})


app.listen(PORT, () => {
    console.log(`listened at http://localhost:${PORT}`)
})