import { pages } from '../controllers/index.controllers';

const indexRouter = (routes) => {

    const content = $('#root');

    $(content).html('');

    switch (routes) {
        case '#/':
            {
                return content.append(pages.home());
            }

        case '#/coins':
            {
                return content.append(pages.coins());
            }

        default:
            {
                return content.append(pages.error404());
            }
    }
}

export { indexRouter };