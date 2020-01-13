import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import { Provider } from './services/users/context';
import config from './config';
import './styles/_index.scss';

const renderMethod = config.isProd ? hydrate : render;

renderMethod(
    <BrowserRouter>
        <App
            userAgent={global.navigator.userAgent}
            routes={routes}
            providers={[Provider]}
        />
    </BrowserRouter>,
    global.document.getElementById('root')
);
