// express
var express = require('express')
var cors = require('cors')
// start the server
var app = express();

// start the listener

app.use(cors())
app.listen(7070, startup);
function startup() {
    console.log("Server started at port no: 7070");
}

app.use(express.static(__dirname));


// socket.io
var http = require("http");
// create the server
var server = http.createServer();
// start the listener
server.listen(9090);
// create socket.io based on http
var socketio = require("socket.io")
// connection b/w console.log("connected");w socketio & http server
var io = socketio(server);
// const socket = io(url,{transports: ['websocket']});
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/index.html");
});
io.on("connect", function(client) {
    console.log("New Client is Connected");
    client.on("registername", function (data) {
        var s = data2.nameofuser
        var msg = s + "Connected";
        console.log(msg);
        // client.emit("printname", Json.stringify({ message: msg }));
// send "printname" event to only current client

io.sockets.emit("printname", JSON.stringify({message: msg}));
// send "printname" event to all connected clients
    }); 
    client.on("clientmessage",function(data) {
        // JSON to object
        var d2 = JSON.parse(data);
        var s = d2.messagetoprint;
        io.sockets.emit("printname",JSON.stringify({ message:s }));
    });
});
