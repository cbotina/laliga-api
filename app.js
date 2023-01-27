const express = require('express')
const app = express()

app.route('/').get((req,res)=>res.end("Hello World"))

app.listen(8000, ()=>console.log('Server is listening'))