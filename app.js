const express = require("express");
const app = express();

const person = require("./routes/person")
const auth = require("./routes/auth")
//use middleware
app.use(express.static("./3-public-method"));
//access form data
//jika saya tidak menggunakan middleware express.urlencoded maka req.body (http message - body) tidak akan memiliki nilai, atau default undefined.
//Berlaku untuk form yang dikirim dengan element form method post
app.use(express.urlencoded());
//enable json() middleware to read http message body from request obj
app.use(express.json());

// router
app.use("/api/v1/persons", person)
app.use("/login", auth)

app.post("/api/v1/peoples", (req, res) => {
    const { username } = req.body;

    console.log(username);
    //check username exist
    if (!username) {
        return res
            .status(401)
            .json({ success: false, msg: "Username Tidak boleh kosong coy" });
    }

    res.status(201).json({ success: true, person: username });
});


app.listen(5000, () => {
    console.log("Server Listen on Port 5000");
});
