const express = require('express');

const app=express();


app.listen(3000);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.status(200).json({message:"everything is working fine"});

    // res.send("hello world,i am aaryan dubey");

   res.render('index',{test:"sending data from server"});
})

