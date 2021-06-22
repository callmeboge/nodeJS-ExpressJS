//Build express server basick

const express = require("express");

//create server express proses is instace of method
const app = express();

// server method
// app.get
// app.post
// app.delete
// app.put
// app.all
// app.use
// app.listen

//app.get :default: :get: from browser request, Setiap kali user mengakses resource (/url...) tertentu maka callback function akan dieksekusi
app.get("/", (req, res) => {
    // res.status(200).send('Hi iam Laboge Run on ExpressJS Minimalist & Flexibel web framework for nodeJS, di design untuk memudahkan membangun web/webapp serta powerful API, REsT API')
    res.status(200).send('Hi, i am Lallana')
    console.log('Success');
}); //

//about page/resource
app.get("/about", (req, res) => {
    res.status(200).send('Ini halaman About')
})

//not found
app.all("*", (req, res) => { 
    res.status(404).send('<h1>Resource NOt Found</h1>') // Sebelum response write output kita akan menentukan status kode yang akan direspon oleh express server. //standar to build web app / complex api : rest in nodeJS
})

//app.listen port
app.listen(9999, () => {
    console.log("This Express Server listen port on 9999....");
});
