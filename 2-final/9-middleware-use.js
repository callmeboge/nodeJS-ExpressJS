const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize")
const app = express();

// Middleware secara literal merupakan fungsi yang selalu tersedia pada lingkungan NodeJS.
//1 Middleware merupakan function yang dieksekusi saat proses request berlangsung ke server,
//2 Setiap middleware function memiliki akses ke req dan res objeck
// req => middleware => res => middleware => req

// Implementasi Middleware
// 1. Membuat fungsi middleware internal / external (as module)
// 2. Menambahkan middleware sebagai argument pada route,
// 3. Menggunakan banyak middleware pada route yang sama
// 4. middleware yang sama berkali-kali
// 5. middleware dengan express().use() order menentukan penggunaan
// additional: Middleware useful for create authentication mechanism

// ADDITIONAL INFO:
// express().use over route(express().get(),.post(),.put() & .patch(), .delete(), .all())
// options - owned middleware (own) / express middleware (built-in)/ third-party (middleware library/package/dependency/module)

//menggunakan salah fitur express().use()
// app.use("/api", logger); //ini untuk menggunakan middleware hanya untuk path yang mengandung '/api/;

//this middleware berlaku untuk semua route
app.use(authorize, logger);

//home route
app.get("/", (req, res) => {
    res.send(req.username.name + "ini adalah halaman depan");
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

app.listen(5000, () => {
    console.log("Server Express LIsten to 5000....");
});
