import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import ejs from 'ejs';
import proxy from 'express-http-proxy';
// import render from '@krupnik/render';
import render from './services/render';
import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';
import {
    port, isProd, destPort, destHost
} from './config';

const webServer = express();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

webServer.use(helmet());
webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

const route = express.Router();
webServer.use('/report', (req, res) => {
    webServer.engine('html', ejs.renderFile);
    webServer.set('view engine', 'html');
    return res.render('report.html');
});

route.all('/api/*', proxy(`${destHost}:${destPort}`));

webServer.use(route);
webServer.use(render(isProd ? App : null, routes, assets));

server(webServer, destHost, destPort).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
