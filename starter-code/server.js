'use strict';

//Initialize your project using NPM to create and populate a package.json file
//Require the Express package that you installed via NPM, and instantiate the app
//Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Include all of the static resources as an argument to app.use()
app.use(express.static(__dirname + '/public'));
//Write a new route that will handle a request and send the new.html file back to the user
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  //Using the response object, send the index.html file back to the user
});
app.listen(PORT, function() {
  //Log to the console a message that lets you know which port your server has started on
  console.log('server running on port: ' + PORT);
});
