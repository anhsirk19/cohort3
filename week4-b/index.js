const express = require('express')
const app = express()
//route handlers

// / route , get methid
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)