const express = require ('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("<h2>hello nodejs i want</h2>");
});

app.get('/about',(req,res)=>{
    res.send("this is about");
});

app.get('/contact',(req,res)=>{
    res.send("this is from the contact page");
});



app.listen(4000, function(){
    console.log("Node js project has been stared")
});