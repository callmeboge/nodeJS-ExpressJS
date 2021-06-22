//build http-server basic
//import modulel http module create simplel server
const http = require("http");

//create server
const server = http.createServer();

//using Event Emit API
server.on("request", (req, res) => {
    res.writeHeader(404, { "content-type": "text/html" });
    res.write(`<h1>Hai, World`);
    res.end();
});

//listen server on port 9999
server.listen(9999);
