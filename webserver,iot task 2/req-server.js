const http = require('http');
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
//const formidable = require("formidable");

//create server will send a http request and a response object
const server = http.createServer(function(req, res){

    //req.method.toLowerCase() //convert to lowercase
    //console.log(http.METHODS); //to find https methods
    //console.log(http.STATUS_CODES);// to get the status code
    console.log(req.url) //get the url of the request

});

server.listen(1234,function(){
    console.log("Listening to port 1234");
})
