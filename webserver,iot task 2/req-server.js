const http = require('http');
const url = require("url");
const util = require('util')
const StringDecoder = require("string_decoder").StringDecoder;
//const formidable = require("formidable");

//create server will send a http request and a response object
const server = http.createServer(function(req, res){

    //req.method.toLowerCase() //convert to lowercase
    //console.log(http.METHODS); //to find https methods
    //console.log(http.STATUS_CODES);// to get the status code
    //console.log(req.url) //get the url of the request
    let path = url.parse(req.url, true);
    //path.pathname path.search  path.query querystring as object
    let decoder = new StringDecoder('utf-8');
    let buffer = " ";
    //fire every time we have data
    req.on('data', function(chunk){
        buffer +=decoder.write(chunk)
    }) 
    req.on('end',function(){
        buffer +=decoder.end()
        res.writeHead(200, "OK", {"Content-Type": "text/plain"});
        res.write("The response \n\n");
        res.write(util.inspect(path.query) + "\n\n");
        res.write(buffer + "\n\n")
        res.end("End of message to browser");
    });
});

server.listen(1234,function(){
    console.log("Listening to port 1234");
})
