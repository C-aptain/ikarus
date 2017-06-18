var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/items', function(req, res) {
  res.json([
    {name: 'itemName'}
  ]);
});

app.get('/companies', function(req, res) {
  res.json([
    {name: 'companyName'}
  ]);
});

app.listen(3000);
