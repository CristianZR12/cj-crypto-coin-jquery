import { Router } from 'express';

//Controllers
import IndexController from '../controllers/index.controllers';

class IndexRoutes {

    private router:Router;

    constructor() {
        this.router = Router();
    }

    public init(): Router {
        
        this.routesIndex(this.router);

        return this.router;
    }

    private routesIndex(router: Router) {
        router.get('/', IndexController.index);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes;