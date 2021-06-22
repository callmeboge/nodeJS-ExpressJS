const express = require('express')
const path = require('path')
const app = express()

// setup middleware with app.use and static assets
// static asset merupakan assets yang tidak butuh diubah oleh server
// javascritp is stattic assets? Padahal js biasa digunakan untuk membuat web jadi dinamis

// benar jika js mampu membuat website menjadi dinamis, namun itu di sisi browser (client) bagaimana jika
// itu di server maka server akan menganggapnya sebagai file static assets biasa.
app.use(express.static('./public')) 

app.get("/", (req, res) => {    
    res.sendFile(path.resolve(__dirname, './1-html-template/index.html'))
})

//set 404 page
app.all("*", (req, res) => {
    res.status(404).send('Resource are not found')
})

app.listen(9999, () => {
    console.log('Server express listen on port 9999')
})