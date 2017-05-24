'use strict';

//Initialize your project using NPM to create and populate a package.json file
//Require the Express package that you installed via NPM, and instantiate the app
//Remember to install express, and be sure that it's been added to your package.json as a dependency
// const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const constring = process.env.PORT;
//Include all of the static resources as an argument to app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

function proxyGitHub(req, res) {
  console.log('Routing GitHub request for', req.params[0]);
console.log(process.env.GITHUB_TOKEN);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(req, res);
}

app.get('/github/*', proxyGitHub);
//Write a new route that will handle a request and send the new.html file back to the user
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
//   //Using the response object, send the index.html file back to the user
// });
app.listen(PORT, function() {
  //Log to the console a message that lets you know which port your server has started on
  console.log('server running on port: ' + PORT);
});
