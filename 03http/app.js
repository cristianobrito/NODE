var http = require('http');

http.createServer(function(req, res){
    res.write('Aprendendo Node.js com o Nano instalando nodemon');
    res.end();
}).listen(3333);