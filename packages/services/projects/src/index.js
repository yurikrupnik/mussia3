import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import statusMonitor from 'express-status-monitor';
import swaggerUi from 'swagger-ui-express';
import {
    isProd, port, databaseUrl, host
} from './config';
import api from './api';
import db from './services/db';
import server from './services/socket/server';

const assets = path.join(process.cwd(), !isProd ? 'dist' : '');
const app = express();

const route = express.Router();
route.get('/', (req, res) => {
    res.json(['service1 root url']);
});

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(assets));
app.set('view engine', 'ejs');
app.set('views', assets);
app.use(statusMonitor());
app.use(express.json(), express.urlencoded({ extended: false }));
app.use(db(databaseUrl));

function swaggerUI(url) { // todo module
    const r = express.Router();
    r.get('/swagger', (req, res) => {
        res.header('Content-Type', 'application/json');
        res.sendFile(path.join(process.cwd(), !isProd ? 'dist' : '', 'swagger.json'));
    });
    r.use('/doc', swaggerUi.serve);
    r.get('/doc', swaggerUi.setup(null, {
        swaggerOptions: {
            url: `${url}/swagger`
        }
    }));
    return r;
}

app.use(swaggerUI(`${host}:${port}`));
app.use(api);
app.use(route);

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
