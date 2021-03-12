var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    let pessoas = [
        {"nome":"Nanu",      "idade":39},
        {"nome":"Akilles",   "idade":9},
        {"nome":"Joyce", "idade":32}
    ] 

    res.render('inicio', {gostodenode: false, dados:pessoas});
});

app.get('/sobre', function(req, res){
    res.render('sobre');
});

app.listen(3333);