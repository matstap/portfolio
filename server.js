'use strict'

const bodyParser = require('body-parser').urlencoded({extended: true});
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('*', function(req, res) {
  res.sendFile('./index.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log(`Currently listening istening on port: ${PORT}`);
});
