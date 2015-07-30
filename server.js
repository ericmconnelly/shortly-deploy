var app = require('./server-config.js');

// var port = process.env.PORT;
var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
