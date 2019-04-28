const server = require('http').createServer()
const io = require('socket.io')(server)
import {Manager} from './clientManager';
const clientManager = Manager();
io.on('connect', function(client) {
    console.log('client connected...', client.id)
    clientManager.addClient(client);
})

server.listen(4000, function(){
  console.log('listening on *:4000');
});