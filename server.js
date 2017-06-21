'use strict'

const bodyParser = require('body-parser').urlencoded({extended: true});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

app.post('/articles', bodyParser, function(req, res) {
  console.log(req.body);
  res.send('record posted');
});

app.listen(PORT, function() {
  console.log(`Currently listening istening on port: ${PORT}`);
});
