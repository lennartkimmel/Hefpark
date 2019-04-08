// NODE SERVER 
var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/client'));
console.log('Listening on 8888');
app.listen(8888);