const express = require("express");
const router = express.Router();
const getLogin = require("../controllers/auth");

router.route("/").post(getLogin);

module.exports = router;