let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);  /// client in on connect from node.js
  return stdin;
}
const { connect } = require("./client");

// import{conn} = require('./client')
const handleUserInput = (key) => { //will be used as CB
  if (key === 'w') {
    connection.write("Move: up");
    console.log('Up');
  }
  if (key === 'a') {
    connection.write("Move: left");
    console.log('Left');
  }
  if (key === 's') {
    connection.write("Move: down");
    console.log('Down');
  }
  if (key === 'd') {
    connection.write("Move: right");
    console.log('Right');
  }
  if (key === 'y') {
    console.log("Why would you do that?")
  }
  if(key === '\u0003') { 
    console.log('You Lose.');
    process.exit() 
    
  }
  // console.log(key);

}

module.exports = {setupInput};