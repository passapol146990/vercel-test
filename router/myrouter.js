const express = require('express')
const { route, router } = require('..')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = 'passapol';
    const age = 18
    const address = "<h2>กาฬสินธุ์</h2>"
    res.render('index.ejs',{name:name,age:age,address:address});
})

module.exports = router
