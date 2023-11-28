"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var app = (0, express_1.default)();
var route = (0, express_2.Router)();
var port = 8080;
app.use(express_1.default.json());
route.get('/', function (req, res) {
    res.json({ message: 'hello world with Typescript' });
});
app.use(route);
app.listen(port, function () { return console.log("Express.js Server - user registration - ".concat(port)); });
