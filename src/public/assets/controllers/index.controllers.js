import Home from './home.controllers';
import Coins from './coins.controllers';
import Error404 from './error404.controllers'

const pages = {
    home: Home,
    coins: Coins,
    error404: Error404
};

export { pages };