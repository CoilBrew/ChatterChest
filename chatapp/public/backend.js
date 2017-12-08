var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/static/js/main.d7948d81.js', function(req, res){
  res.sendFile(__dirname + '/static/js/main.d7948d81.js');
});

app.get('/static/css/main.562ff172.css', function(req, res){
  res.sendFile(__dirname + '/static/css/main.562ff172.css');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      console.log('message: ' + msg);
});
});


http.listen(3000, function(){
  console.log('listening on *:3000');
})
