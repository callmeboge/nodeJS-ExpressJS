//ExpressJS
//import module expressJS
const express = require("express");

//assing super function of express
const app = express();

//import resource dengan destruktur objek
const { products } = require("../data");

//basic route
app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

// best practice:
// url/:parameter digunankan digunakan untuk mengakses resource tertentu dan umum
// contoh:
//  /api/v1/product/:idParam                    - get all product by id Param
//  /api/v1/product/:idParam/review/:idReview   - get all product by id and review product by idReview

// /url?query-string digunakan proses filterisasi resource yang ada, untuk implementasi lainnya biasa diterapkan untuk query database
// contoh: /api/v1/products?query=foo&page=21           - filter resource pada route product yang cocok     dengan query string & page limit tiap halaman

// get all products and do filterisasi
app.get("/api/v1/products", (req, res) => {
    let productsNew = [...products]
    const { search, limit } = req.query;

    if (search) {
        productsNew = productsNew.filter((item) => {
            return item.name.includes(search);
        });
    }

    if (limit) {
        productsNew.splice(0, limit);
    }
    
    res.json({success: true, search: search, limit: limit,  length: productsNew.length, product: productsNew})
});

// get all products by idparam
app.get("/api/v1/products/:idProduct", (req, res) => {
    const { idProduct } = req.params;

    // kembalikan element pertama yang lolos uji dari function yang ditentukan.
    productById = products.find((product) => {
        return idProduct == product.id;
    });

    res.json(productById);
});

// get all product with many param
// semua entitas pada url harus ada, inputkan :idProduct & :idReview.
// Apabila entitas diubah selain parameter maka resource tidak valid
app.get("/api/v1/products/:idProduct/review/:idReview", (req, res) => {
    res.send("<p>Halaman untuk multi parameter data</p>");
});

//listen server
app.listen(8000, () => {
    console.log("Listen on port: 8000");
});
