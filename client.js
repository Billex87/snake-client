const net = require('net');
const { HOST, PORT, NAME } = require('./constants')
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Intruder Alert: You Are Connected');
    conn.write(`${NAME}`);
  });

  return conn;
}
module.exports = { connect };