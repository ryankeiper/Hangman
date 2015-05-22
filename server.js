var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("view engine", "hbs");


app.use(express.static(__dirname + '/public'))

app.get("/", function( req, res ){
  res.render("index", {message: "hello world"});
})

app.get("/guesses", function( req, res ){
  res.render("index", {message: "hello world"});
})

io.on('connection', function(socket){
  console.log('A user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
