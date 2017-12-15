var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Because these URLS are subject to change (anytime you run npm run build)
// we are using a regex to match them and find the corresponding file to serve
app.get(/static\/(css|js)\/.*/, (req, res) => {
  res.sendFile(__dirname + req.url);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
})
