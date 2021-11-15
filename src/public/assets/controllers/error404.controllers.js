import Error404 from '../view/error404.html';

export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'container';

    $(divElement).html(Error404);

    return divElement;
};