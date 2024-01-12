require('dotenv').config;

import ServerSetup from "./server";
var http = require('http')
// It is a Node.js built-in http module,http.createServer() method to create an HTTP server that 
//listens for incoming HTTP requests and responds to them.

import connectionDatabase from "./config/dbConnection";

let port = normalizePort(process.env.SERVERPORT)

let expressInstance = new ServerSetup().expressInstance;

let server = http.createServer(expressInstance);
server.listen(port, () => {
    console.log(`Server is listening on the port ${port}`)
})
// Set the name for a value ??
expressInstance.set('port', port)

// Database Connection 

connectionDatabase().then((result) => {
    console.log("Connection established succesfully");  
}).catch((err) => {
    console.log("Connection Failed", err);
    
})

// function normalizePort (portVal) {
//     const port = portVal === 'string' ? parseInt(portVal) : portVal;
//     if(isNaN(portVal)){ // isnan > is not a no 
//         return portVal; // return the string
//     }
//     else if(portVal >= 0){
//         return port; // return the port
//     }
//     else{
//         return false;
//     }
// }
function normalizePort(portVal:any) {
    const port = typeof portVal === 'string' ? parseInt(portVal, 10) : portVal;
      if (isNaN(port)) {
        return portVal; // return the string
    } else if (port >= 0) {
        return port; // return the port
    } else {
        return false;
    }
}
// this function is used to convert string port no to int type :
