"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsServer = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const settingsServer = {
    port: process.env.PORT || 3500
};
exports.settingsServer = settingsServer;
