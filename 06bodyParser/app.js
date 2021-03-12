var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
        res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res){
        res.write('Nome informado: ' + req.body.nome);
        res.end();
});

app.listen(3333);