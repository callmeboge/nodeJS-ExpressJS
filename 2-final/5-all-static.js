const express = require('express')
const app = express()
// const path = require('path')

// setup middleware with app.use and static assets
// static asset merupakan assets yang tidak butuh diubah oleh server
// javascritp is stattic assets? Padahal js biasa digunakan untuk membuat web jadi dinamis
// benar jika js mampu membuat website menjadi dinamis, namun itu di sisi browser (client)
// bagaimana?
//jika, itu di server maka server akan menganggapnya sebagai file static assets biasa.
app.use(express.static('./public')) 

// app.get("/", (req, res) => {    
//     res.sendFile(path.resolve(__dirname, './1-html-template/index.html'))
// 
// Semua file template html kita dijadikan Static: index.html sending to static folder.
// Hasil yang sama ditunjukkan saat menggunakan method sendFile(), namun ini lebih sederhana karena kita hanya 
// Hanya perlu membuat middleware untuk static assets dan kemudian kita sudah dapat membuka website kita
//     
// Note:
//-> Static File ^-^
//-> SSR (Server Side Rendering)
//      
// })
// API                          |      SSR
// API - JSON                   | SSR - Template   
// Send Data                    | Send Template <html>
// res.JSON() // => data send   | res.Render() => template send

//set 404 page
app.all("*", (req, res) => {
    res.status(404).send('Resource are not found')
    // res.send(404, 'Resource are not found') // DEPRECATED
})

app.listen(9999, () => {
    console.log('Server express listen on port 9999')
})