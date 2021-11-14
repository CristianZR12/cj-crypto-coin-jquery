"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controllers
const index_controllers_1 = __importDefault(require("../controllers/index.controllers"));
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    init() {
        this.routesIndex(this.router);
        return this.router;
    }
    routesIndex(router) {
        router.get('/', index_controllers_1.default.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes;
