import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import React from 'react';
import path from 'path';

const render = (App, routes, fileLocation) => {
    const statsFile = path.join(fileLocation, 'loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });
    const route = express.Router();
    route.get('/*', (req, response, next) => {
        console.log('At render req.url', req.url); // eslint-disable-line
        if (!App) {
            return response.render('index.ejs', {
                title: '', html: '', appData: {}, tags: '', links: ''
            });
        }
        const activeRoute = routes
            .find((r) => matchPath(req.url, r)) || {};
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
                // const html = renderToString((
                //     <StaticRouter
                //         location={req.url}
                //         context={appData}
                //     >
                //         <App userAgent={req.headers['user-agent']} routes={routes} />
                //     </StaticRouter>
                // ));
                const html = renderToString(extractor.collectChunks(
                    <StaticRouter
                        location={req.url}
                        context={appData}
                    >
                        <App userAgent={req.headers['user-agent']} routes={routes} />
                    </StaticRouter>
                ));
                const tags = extractor.getScriptTags();
                // const links = extractor.getLinkTags();
                const state = {
                    title,
                    html,
                    appData,
                    tags,
                    links: ''
                };
                console.log('state', state); // eslint-disable-line
                return context.url ? response.redirect(301, context.url) : response.render('index.ejs', state);
            })
            .catch((err) => {
                console.log('err', err.stack); // eslint-disable-line no-console
                return next(err);
            });
    });
    return route;
};

export default render;
