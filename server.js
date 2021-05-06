const http = require("http");
const fs = require("fs");

const server = http.createServer();
html = fs.readFileSync("index.html","UTF-8");
// console.log(html);
server.on("request",(req,res) => {
    if(req.url == "/"){
        html = html.replace("{%user%}","Vipin");
        res.end(html);
        // console.log(html);
    }
    else{
        res.writeHead(404);
        res.end("<h1>404 Page Note Found</h1>")
    }
});

server.listen(8000,"127.0.0.1"); 