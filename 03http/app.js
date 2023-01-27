// IMPORTAR O MODULO HTTP
var http = require("http");

//  CRIAR SERVIDOR
http.createServer(function(req, res){
    res.write("Aprendendo node que perigo porra");
    res.end();
}).listen(8080);
