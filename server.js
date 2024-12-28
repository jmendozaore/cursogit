const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bienvenido a nuestro primer Servidor con Express')
})

app.listen(3000)