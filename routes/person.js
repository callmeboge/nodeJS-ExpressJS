const express = require("express");
const router = express.Router();

const {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
} = require("../controllers/person")

//style 1
// router.get("/", getPerson);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson)

//style 2 //lebih pendek
router.route("/").get(getPerson).post(createPerson)
router.route("/:id").put(updatePerson).delete(deletePerson)

//export
module.exports = router