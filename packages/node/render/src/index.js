import express from 'express';
import handleRender from './handleRender';

const render = (App, routes, fileLocation) => {
    const route = express.Router();
    route.get('/*', handleRender(App, routes, fileLocation));
    return route;
};

export default render;
