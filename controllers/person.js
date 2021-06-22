const { person } = require("../data")

const getPerson = (req, res) => {
    res.status(200).json({ success: true, person: person });
}

const createPerson = (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res
            .status(403)
            .json({ success: false, message: "cant insert empty value" });
    }

    res.status(200).json({
        success: true,
        persons: [...person, { name: username, type: "single" }],
    });
}

const updatePerson =  (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPerson,
    createPerson, 
    updatePerson,
    deletePerson
}