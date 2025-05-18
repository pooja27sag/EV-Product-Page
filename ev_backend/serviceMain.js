"use strict";
require("events").EventEmitter.defaultMaxListeners = Infinity;
var apiServerModule = require("./apiServer.js");
var apiServerInstance = new apiServerModule.apiServer();
// apiServerInstance();