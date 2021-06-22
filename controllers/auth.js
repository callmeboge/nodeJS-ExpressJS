const getLogin = (req, res) => {
    const { username } = req.body;

    if (username) {
        return res.status(301).send(`<h1>Username is ${username}</h1>`);
    }

    return res.status(401).send("Provide valid username credential");
}

module.exports = getLogin