const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Raptor roooooooooooar')
})

app.listen(3000)