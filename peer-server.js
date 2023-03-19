var fs = require('fs');
var uuid = require("uuid/v4");
var PeerServer = require('peer').PeerServer;


var server = PeerServer({
    port: process.env.PORT || 9000,
    path: '/peerjs',
    generateClientId: () => uuid().substr(0, 8)
   // ssl: {
   //     key: fs.readFileSync('./key.pem', 'utf8'),
   //     cert: fs.readFileSync('./cert.pem', 'utf8')
   // }
});
