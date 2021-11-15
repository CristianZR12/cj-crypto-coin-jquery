import Home from '../view/home.html';

export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'container';

    $(divElement).html(Home);

    return divElement;
};