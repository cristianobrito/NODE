var express = require('express');

var app = express();

app.use(express.static(__dirname + '/publico'));

app.get('/', function(req, res){
        res.sendFile(__dirname + '/pagina.html');
});

app.listen(3333);