var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Because these URLS are subject to change (anytime you run npm run build)
// we are using a regex to match them and find the corresponding file to serve
app.get(/static\/js\/.*/, function(req, res){
  res.sendFile(__dirname + req.url);
});
app.get(/static\/css\/.*/, function(req, res){
  res.sendFile(__dirname + req.url);
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
