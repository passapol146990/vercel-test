const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log('listening on')
})

app.get('/',(req,res)=>{
    res.send('Hello, world')
})

app.get('/about',(req,res)=>{
    res.send('about')
});

module.exports = app