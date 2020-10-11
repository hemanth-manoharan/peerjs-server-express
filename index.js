const express = require('express');
const app = express();
const ExpressPeerServer = require('peer-vpa-mod').ExpressPeerServer;
const PORT = process.env.PORT || 9000;

app.get('/', (req, res, next) => { res.send('Hello world from VPA mod!'); });
app.get('/version', (req, res, next) => { res.send('0.5.3'); });

const options = {
  debug: true
}

const server = require('http').createServer(app);
const peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

app.use(function(req, res, next) {
  // TODO Not the most secure way though
  // Refer: https://fosterelli.co/developers-dont-understand-cors
  //res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Origin", "https://webrtc-serverless.herokuapp.com"); 
  //res.setHeader("Access-Control-Request-Method", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.listen(PORT);
