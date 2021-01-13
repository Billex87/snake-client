const net = require('net');
const {HOST, PORT, NAME} = require('./constants')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: HOST,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Connected');
    conn.write(`${NAME}`);
  });

  return conn;
}

console.log('Connecting ...');
connect();
