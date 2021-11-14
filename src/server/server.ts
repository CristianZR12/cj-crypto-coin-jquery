import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//Settings File
import { settingsServer } from '../settings';

//Routes
import IndexRoutes from '../routes/index.routes';

class Server {

    private app: Application;

    constructor() {
        this.app = express();
    }

    public init(): Application {
        this.settingServer(this.app);
        this.middleware(this.app);
        this.settingRoutes(this.app);
        this.publicServer(this.app);

        return this.app;
    }

    private settingServer(app: Application): void {
        app.set('Port', settingsServer.port);
    }

    private middleware(app:Application): void {
        app.use(morgan('dev'));
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
    }

    private settingRoutes(app:Application):void {
        app.use(IndexRoutes.init()); 
    }

    private publicServer(app:Application): void {
        app.use(express.static(path.join(__dirname, '../public')));
    }
}

const server = new Server();

export default server;