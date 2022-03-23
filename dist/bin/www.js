#!/usr/bin/env node
/**
 * Module dependencies.
 */"use strict";var _app=_interopRequireDefault(require("../app")),_debug=_interopRequireDefault(require("debug")),_http=_interopRequireDefault(require("http"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}//Modernizando el script
//var debug = require('debug')('projnotes:server');
//var http = require('http');
//Creando una instancia de degger
const debug=(0,_debug.default)("PROJNOTES:sever");/**
 * Get port from environment and store in Express.
 */var port=normalizePort(process.env.PORT||"3000");_app.default.set("port",port);/**
 * Create HTTP server.
 */const server=_http.default.createServer(_app.default);//(req, res, next, err)=>
/**
 * Listen on provided port, on all network interfaces.
 */server.listen(port),server.on("error",onError),server.on("listening",onListening);/**
 * Normalize a port into a number, string, or false.
 */function normalizePort(a){const b=parseInt(a,10);return isNaN(b)?a:!!(0<=b)&&b}/**
 * Event listener for HTTP server "error" event.
 */function onError(a){if("listen"!==a.syscall)throw a;var b="string"==typeof port?"Pipe "+port:"Port "+port;// handle specific listen errors with friendly messages
switch(a.code){case"EACCES":console.error(`${b} requires elevated privileges`),process.exit(1);break;case"EADDRINUSE":console.error(`${b}  is already in use`),process.exit(1);break;default:throw a;}}/**
 * Event listener for HTTP server "listening" event.
 */function onListening(){const a=server.address(),b="string"==typeof a?`pipe ${a}`:`port ${a.port}`;debug("Listening on "+b),console.log(`✍ Servidor escuchando 🤖👂...en ${_app.default.get("port")}`)}