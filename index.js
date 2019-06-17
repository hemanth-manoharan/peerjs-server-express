const express = require('express');
const app = express();
const ExpressPeerServer = require('peer').ExpressPeerServer;
const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => { res.send('Hello world!'); });

const options = {
  debug: true
}

const server = require('http').createServer(app);
const peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(PORT);
