const express = require("express");
const app = express();
const { person } = require("./data");

//use middleware
app.use(express.static("./3-public-method"));

//access form data
//jika saya tidak menggunakan middleware express.urlencoded maka req.body (http message - body) tidak akan memiliki nilai, atau default undefined.
//Berlaku untuk form yang dikirim dengan element form method post
app.use(express.urlencoded());

//enable json() middleware to read http message body from request obj
app.use(express.json());

//Post method menggunakan Form Element
app.post("/login", (req, res) => {
    console.log(req.body);
    const { username } = req.body;

    if (username) {
        return res.status(301).send(`<h1>Username is ${username}</h1>`);
    }

    return res.status(401).send("Provide valid username credential");
});

app.get("/api/v1/peoples", (req, res) => {
    res.status(200).json({ success: true, person: person });
});

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

app.post("/api/v1/persons", (req, res) => {
    const { username } = req.body;
    // const [a, b]  = req.body;
    // console.log( req.body, a, b )
    if (!username) {
        return res
            .status(403)
            .json({ success: false, message: "cant insert empty value" });
    }

    res.status(200).json({
        success: true,
        persons: [...person, { name: username, type: "single" }],
    });
});

app.put("/api/v1/persons/:id", (req, res) => {
    const { id } = req.params;
    const { username } = req.body;

    getByID = person.find((item) => {
        return item.id === Number(id);
    });

    if (!getByID) {
        return res.status(404).send({
            success: false,
            message: `User dengan id : ${id} tidak dapat ditemukan`,
        });
    }

    person.map((item) => {
        return item.id === Number(id) && (item.name = username)
    });

    res.status(200).send({
        success: true,
        person: [...person],
    });
});

app.delete("/api/v1/persons/:id", (req, res) => {
    const { id } = req.params

    getByID = person.find( item => {
        return item.id === Number(id)
    })

    if(! getByID) {
        res.status(404).json({success: false, message: `Tidak dapat menumukan data dengan id : ${id}`})
    }

    const filterPerson = person.filter( item => {
        return item.id !== Number(id)
    }) 

    res.status(200).json({success: true, person: filterPerson})
})

app.listen(5000, () => {
    console.log("Server Listen on Port 5000");
});
