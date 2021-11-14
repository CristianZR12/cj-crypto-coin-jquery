const indexRouter = (routes) => {

    const content = $('#root');

    content.html('');

    switch (routes) {
        case '#/':
            {
                return console.log('Menú Principal');
            }

        default:
            {
                return console.log('Error 404');
            }
    }
}

export { indexRouter }