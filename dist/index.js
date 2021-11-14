"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
class Index {
    constructor() {
        this.app = server_1.default.init();
        this.startServer();
    }
    startServer() {
        this.app.listen(this.app.get('Port'), () => {
            console.log(`Server on Port ${this.app.get('Port')}`);
        });
    }
}
new Index();
