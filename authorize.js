//authorize
const authorize = (req, res, next) => {
    const { user } = req.query

    if (!user) {
        return res.status(403).send('You dont have credention to access this server')
    }
    
    req.username = { name: 'Laboge' }


    next()
}

module.exports = authorize
