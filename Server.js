const http = require("http");
const fs = require("fs");
const port = 5500;

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile("Index.html", function(error,data){
        if(error){
            res.writeHead(404);
            res.write("Error: File not found");
        }
        else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port,function(error){
    if(error){
        console.log("there was an error");
    }
    else 
        console.log("server is listhening on port " + port);
})