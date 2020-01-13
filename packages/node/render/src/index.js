import express from 'express';
import handleRender from './handleRender';

const render = (App, routes) => {
    const route = express.Router();
    route.get('/*', handleRender(App, routes));
    return route;
};

export default render;
