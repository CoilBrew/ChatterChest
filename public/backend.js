var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var getTimestamp = require('../src/utility.js');
var path = require('path');

var messages = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/react-jsx', (req, res) => {
  var build = path.resolve(__dirname + '/../build');
  res.sendFile(build + "/src/index.js");
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
           messages.push({
      content: msg,
      timestamp: getTimestamp(new Date())
    });
      io.emit('messages', messages);
  });
  socket.on('request messages', () => {
      io.emit('messages', (messages));
  })
});

http.listen(3000, () => {
var test = path.resolve(__dirname + '/../build');
  console.log('listening on *:3000');
})
