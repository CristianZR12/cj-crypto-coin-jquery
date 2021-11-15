import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss';

import Navbar from './assets/helpers/navbar';
import { indexRouter } from './assets/routes/index.rouer';

$(() => {
    Navbar();

    //SPA ROUTES SETTINGS

    function init() {

        if (window.location.hash == '') {
            window.history.pushState(null, '', '#/');
        }

        indexRouter(window.location.hash);

        $(window).on('hashchange', function() {
            indexRouter(window.location.hash);
        });
    }

    $(window).on('load', init());

});