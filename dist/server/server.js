"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
//Settings File
const settings_1 = require("../settings");
//Routes
const index_routes_1 = __importDefault(require("../routes/index.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
    }
    init() {
        this.settingServer(this.app);
        this.middleware(this.app);
        this.settingRoutes(this.app);
        this.publicServer(this.app);
        return this.app;
    }
    settingServer(app) {
        app.set('Port', settings_1.settingsServer.port);
    }
    middleware(app) {
        app.use((0, morgan_1.default)('dev'));
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
    }
    settingRoutes(app) {
        app.use(index_routes_1.default.init());
    }
    publicServer(app) {
        app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    }
}
const server = new Server();
exports.default = server;
