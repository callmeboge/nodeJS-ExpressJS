//build http-server for more feature and resources
//import modulel http module create simplel server
const http = require("http");
const { readFileSync } = require("fs")

//read File
const homePageContent = readFileSync('./1-html-template/index.html')
const logoContent = readFileSync('./1-html-template/alfa-romeo-4.svg')
const styleContent = readFileSync('./1-html-template/style.css')
const jsContent = readFileSync('./1-html-template/logic.js')

//create server
const server = http.createServer();

//using Event Emit API
server.on("request", (req, res) => {
    //homepage
    const url = req.url;
    if (url === "/") {
        res.writeHeader(200, { "content-type": "text/html" });
        res.write(homePageContent);
        res.end();
    }
    //about page resource
    else if (url === "/about") {
        res.writeHeader(200, { "content-type": "text/html" });
        res.statusMessage()
        res.write(`<h1>Hi, I am About</h1>`);
        res.end();
    }
    //load style file (style.css)
    else if (url === "/style.css") {
        res.writeHeader(200, { "content-type": "text/css" });
        res.write(styleContent);
        res.end();
    }
    //load logo file
    else if (url === "/alfa-romeo-4.svg") {
        res.writeHeader(200, { "content-type": "image/svg+xml" });
        res.write(logoContent);
        res.end();
    }
    //load javascript file
    else if (url === "/logic.js") {
        res.writeHeader(200, { "content-type": "text/javascript" });
        res.write(jsContent);
        res.end();
    }
    // 404 not found
    else {
        res.writeHeader(404, { "content-type": "text/plain" });
        res.write(`Oops! 404 Dead End`);
        res.end();
    }
});

//listen server on port 9999
server.listen(9999);
