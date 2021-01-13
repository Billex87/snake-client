const net = require('net');
const {HOST, PORT, NAME} = require('./constants')

const handleUserInput = (key) => {
  if(key === '\u0003') {
    process.exit
  }

}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}




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
let conn = connect();
setupInput(conn);
