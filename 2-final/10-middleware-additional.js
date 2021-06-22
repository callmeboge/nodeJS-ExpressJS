const express = require("express");
const morgan = require("morgan"); 
const app = express();

// use() vs route()
// use() digunakan untuk menggunakan middleware secara global dan menyeluruh
// route() untuk menggunakan middleware hanya pada route masing-masing

// Option: - Own Middleware, Built-in Middleware, Third-party middleware
// Own Middleware : logger
// Built-in middleware: express.static('./path/to/static_assets_folger')
// Third-party middleware : morgan

// app.use("/api", logger); //ini untuk menggunakan middleware hanya untuk path yang mengandung '/api/;
app.use(morgan("tiny"));

//home route
app.get("/", (req, res) => {
    res.send("ini adalah halaman depan");
});

//about
app.get("/about", (req, res) => {
    res.send("ini adalah halaman about");
});

app.get("/api/items", (req, res) => {
    res.send("ini adalah halaman Items");
});

app.get("/api/spec", (req, res) => {
    res.send("ini adalah halaman Spec");
});

app.listen(9999, () => {
    console.log("Server Express LIsten to 9999....");
});
