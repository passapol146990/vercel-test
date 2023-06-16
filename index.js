const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/myrouter')

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(router)

app.listen(4000,()=>{
    console.log('listening on')
})

module.exports = app