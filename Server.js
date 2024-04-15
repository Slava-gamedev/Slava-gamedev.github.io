const http = require("http");
const port = 5500;

const server = http.createServer(function(req,res){
    res.write("Go kill yourself! NOW!!!");
    res.end();
});

server.listen(port,function(error){
    if(error){
        console.log("there was an error");
    }
    else 
        console.log("server is listhening on port " + port);
})