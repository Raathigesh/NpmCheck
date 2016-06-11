var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var npmName = require('npm-name');
var port = 80;

app.get('/status', function internalStaus(req, res){
	res.send('API server running.');
});

app.get('/check_name', function(req, res){
      var name = req.param('name');
      npmName(name).then(available => {
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Content-Type', 'application/json');
            res.status(200);
            res.send({
                  available: available
            });
      });
     
});
app.get('/save_name', function(req, res){
      res.set('cross-origin', '*');
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send('{}');
});
app.get('/check_names', function(req, res){
      res.set('cross-origin', '*');
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send('{}');
});


server.listen(port, function () {
    console.log('API is available at: http://localhost:' + port);
});

