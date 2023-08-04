const express = require ('express')
const app = express()

//setting up ejs 
app.set('view engine','ejs' )



app.get('/',(req,res)=>{
    res.render('home',{name:"Rabin"})
    res.render('home',{name:"Rabin",age:22})
   
});

app.get('/about',(req,res)=>{
    res.render('about.ejs')
   
});

app.get('/contact',(req,res)=>{
    res.send("<h2>hello nodejs i want</h2>");
   
   
});


//4000 is a port number as user defined
app.listen(4000, function(){
    console.log("Node js project has been stared")
});