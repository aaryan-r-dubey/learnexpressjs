
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('User route is working fine');
});

router.get('/new',(req,res)=>{
    res.send('New User route is working fine');
})

module.exports = router;

