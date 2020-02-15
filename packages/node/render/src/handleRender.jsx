import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';
import React from 'react';
import path from 'path';

const handleRender = (App, routes = [], fileLocation) => (req, response, next) => {
    const statsFile = path.join(fileLocation, 'loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });
    if (!App) {
        return response.render('index.ejs', { title: '', html: '', appData: {} });
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
            const html = renderToNodeStream(extractor.collectChunks(
                <StaticRouter
                    location={req.url}
                    context={appData}
                >
                    <App userAgent={req.headers['user-agent']} routes={routes} />
                </StaticRouter>
            ));
            const tags = extractor.getScriptTags();
            const links = extractor.getLinkTags();
            const state = {
                title,
                html,
                appData,
                tags,
                links
            };
            return context.url ? response.redirect(301, context.url) : response.render('index.ejs', state);
        })
        .catch((err) => {
            console.log('err', err.stack); // eslint-disable-line no-console
            return next(err);
        });
};

export default handleRender;
