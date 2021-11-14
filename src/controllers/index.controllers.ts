import { Request, Response } from 'express';
import path from 'path';

class IndexController {

    public index(req:Request, resp:Response) {
        resp.sendFile(path.join(__dirname, '../public/index.html'));
    }
}

const indexController = new IndexController();

export default indexController;