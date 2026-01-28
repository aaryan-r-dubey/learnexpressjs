const express = require('express');

const app=express();

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    // res.status(200).json({message:"everything is working fine"});

    // res.send("hello world,i am aaryan dubey");

    res.render('index',{test:"this is sending data from server"});
})


const userroutes=require('./routes/user');
const posts=require('./routes/posts');


app.use('/user',userroutes);
app.use('/posts',posts);



