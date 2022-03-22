"use strict"; // excute code in strict mode
              //helps to write cleaner code

const express = require("express"); //express object
const app = express();


//read some data 
app.get("/data/:id",(req, res) =>{
    console.log(req.url);
    res.send("test data", {output: req.params.id});
});

app.post()


app.listen(3000, (err) => {
    if(err){
        console.log("there was a problem", err);
        return;
    }
    console.log('listening to port 3000');
});