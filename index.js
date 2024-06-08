const jsonServer = require("json-server"); // to import json-server library
const server = jsonServer.create(); // returns an express server
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults(); // return the default middlewares used nby jsonServer
const port = process.env.PORT || 3001; // Port number

server.use(middlewares);
server.use(router);

server.listen(port);
