const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("posts are working just fine ")
    
})

router.route("/:id").get((req,res)=>{

    console.log(req.user);
    res.send(`post of this person ${req.params.id} is working fine`);
}).post((req,res)=>{
    res.send(`post of this person ${req.params.id} is working fine`);
}).put((req,res)=>{
    res.send(`post of this person ${req.params.id} is working fine`);
}).delete((req,res)=>{
    res.send(`post of this person ${req.params.id} is working fine`);
});

const user=[
    {name:'aaryan'},
    {name:'john'},
    {name:'doe'}
];


router.param('id',(req,res,next,id)=>{
    req.user=user[id];
    next();
});






module.exports=router;
