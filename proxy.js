 var proxy = require('http-proxy').createProxyServer({});
 var hostconfig = require('./hostconfig.json');
 proxy.on(function(err, req, res) {

     res.writeHead(500, {

         'Content-Type': 'text/plain'

     });

 });

 var server = require('http').createServer(function(req, res) {

     var host = req.headers.host;
     var hostaddr = 'http://localhost:' + hostconfig.hostport

     switch (host) {

         case 'www.yourdomain.com':

             proxy.web(req, res, { target: hostaddr });

             break;

         case 'yourdomain.com':

             proxy.web(req, res, { target: hostaddr });

             break;

         default:

             res.writeHead(200, {

                 'Content-Type': 'text/plain'

             });

             res.end('Welcome to my server!');

     }

 });

 console.log("listening on port 80")

 server.listen(80);