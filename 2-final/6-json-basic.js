const express = require('express')
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(9999, () => {
    console.log('Server Express LIsten to 9999....')
})
