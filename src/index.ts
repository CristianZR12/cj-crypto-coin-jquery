import { Application } from 'express';

import Server from './server/server';

class Index {

    private app:Application;

    constructor() {
        this.app = Server.init();

        this.startServer();
    }

    private startServer(): void {
        this.app.listen(this.app.get('Port'), () => {
            console.log(`Server on Port ${this.app.get('Port')}`);
        });
    }
}

new Index();