const express = require("express");
const app = express();

const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const date = new Date().getFullYear();
    console.log(method, url, date);

    // res.send('Middleware dapat mengatur respon yang akan dikirim kembali ke clients') saat menggunakannya,
    // next()
}


//home route
app.get("/", logger, (req, res) => {
    // const url = req.url;
    // const method = req.method;
    // const date = new Date().getFullYear();
    // console.log(method, url, date);

    res.send("ini adalah halaman depan");
});

//about
app.get("/about", logger, (req, res) => {
    res.send("ini adalah halaman about");
});

app.listen(9999, () => {
    console.log("Server Express LIsten to 9999....");
});
