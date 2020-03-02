import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import React from 'react';

const render = (App, routes) => {
    const route = express.Router();
    route.get('/*', (req, response, next) => {
        console.log('At render req.url', req.url); // eslint-disable-line
        if (!App) {
            return response.render('index.ejs', { title: '', html: '', appData: {} });
        }
        const activeRoute = routes.find((r) => matchPath(req.url, r)) || {};
        const promise = activeRoute.fetchInitialData
            ? activeRoute.fetchInitialData(req.url)
            : Promise.resolve([]);

        return promise
            .then((res) => {
                let appData = {};
                if (res.length && Array.isArray(activeRoute.providers)) {
                    appData = activeRoute.providers.reduce((acc, nextProvider, i) => {
                        acc[nextProvider] = Array.isArray(res[0]) ? res[i] : res;
                        return acc;
                    }, appData);
                }
                const context = {};
                const title = 'my title';
                const html = renderToString(
                    <StaticRouter location={req.url} context={appData}>
                        <App userAgent={req.headers['user-agent']} routes={routes} />
                    </StaticRouter>
                );
                console.log('html', html); // eslint-disable-line

                response.set('Cache-Control', 'public, max-age:600, s-maxage=1200');
                const state = { title, html, appData };
                return context.url
                    ? response.redirect(301, context.url)
                    : response.render('index.ejs', state);
            })
            .catch((err) => {
                console.log('err', err.stack); // eslint-disable-line no-console
                return next(err);
            });
    });
    return route;
};

export default render;
