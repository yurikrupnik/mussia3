import path from 'path';
import cors from 'cors';
import os from 'os';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
// import cors from 'cors';
// import axios from 'axios';
// import render from '@krupnik/render';
import proxy from 'express-http-proxy';
import render from './services/render';
import {
    port, isProd, host, destPort, destHost
} from './config';
import App from './components/App';
import routes from './components/routes';
// import axios from 'axios';
//
// const key = '2fbeed25338c7978968f34f367d1ca1b';

// const api = () => {
//     return axios.get('https://api.getblueshift.com/api/v1/campaigns.json?end_time=2019-10-31T18:29:59.999Z&start_time=2019-09-02T18:30:00.000Z', {
//         headers: {
//             Authorization: `Bearer ${key}`,
//             'Access-Control-Allow-Origin': '*'
//         }
//     })
//         .then((res) => {
//             console.log(res.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
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
// const route1 = express.Router();
// route1.get('/', (request, response) => {
//     api
//         .then((res) => {
//             response.json(res.data);
//         })
//         .catch((error) => {
//             response.json(error);
//         });
// });
route.all('/api/users', proxy(`${destHost}:${destPort}`));

webServer.use(route);
// webServer.use('/buc', route1);
webServer.use((req, res, next) => {
    console.log('host', host); // eslint-disable-line no-console
    console.log('host', os.hostname()); // eslint-disable-line no-console
    if (req.url.includes('info')) {
        console.log('os.hostname()', os.hostname()); // eslint-disable-line no-console
        console.log('os.type()', os.type()); // eslint-disable-line no-console
        console.log('os.platform()', os.platform()); // eslint-disable-line no-console
        console.log('os.cpus()', os.cpus()); // eslint-disable-line no-console
    }
    return next();
});

if (isProd) {
    webServer.use(render(App, routes));
} else {
    webServer.use(render());
}

webServer.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
