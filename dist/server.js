"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = process.env.PORT || 9000;
var server = express_1.default();
server.get('/ping', function (req, res) {
    res.send('pong');
});
server.listen(PORT);
