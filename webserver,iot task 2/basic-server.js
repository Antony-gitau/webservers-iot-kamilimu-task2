
const http = require('http'); //this will build the web server

//we create a server
//the server will require a request object
//and a response object
const server = http.createServer(function(req,res){
    //handling the response
    res.setHeader('Content-type','application/json');//content type is json
    res.setHeader('Access-Control-Allow-Origin',"*");//content can come from any browser
    res.writeHead(200);//status code HTTP 200 to say stuff is okay

    let dataObj = {"id":123,"name":"Antony","email":"antony.gitau@ieee.org"};
    let data = JSON.stringify(dataObj); //we have to send string data
    res.end(data);//we are sending some data to the requests object
});

//create a port number that we shall use
server.listen(1234, function(){
    console.log("listening on port 1234");
})

