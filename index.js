'use strict';

var subapp = require('sub-kraken');
var kraken = require('kraken-js');
var express = require('express');
var app = express();

app.use(kraken()); 
app.use('/sub', subapp()); 

app.on('start', function () {
  console.log('main app started');
});

app.listen(8000, function () {
  console.log('bound to 8000 ...');
});
