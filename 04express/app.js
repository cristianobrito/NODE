var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.write('ultilizando o Express');
    res.end();
})

app.listen(3333);