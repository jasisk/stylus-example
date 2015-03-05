var express = require('express');
var kraken = require('kraken-js');
var app = express();

var PORT = 8000;

app.use(kraken());

app.on('start', function () {
  console.log('app listening on ' + PORT + ' ...');
});

app.listen(PORT);
