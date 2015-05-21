var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

io.on('connection', function(socket){
  console.log('A user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
