var fs = require('fs');

var express = require('express');

var app = express();

app.get('/', function(request, response) {
    fs.createReadStream(__dirname + '/index.html')
        .once('open', function() {
            response.writeHead(200, {'Content-type': 'text/plain'});
            this.pipe(response);
        })
        .once('error', function() {
            console.log(e);
            response.writeHead(500);
            response.end('Server Error');
        });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});