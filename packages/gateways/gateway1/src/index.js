import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '.'; // todo create auto
import {
    port, usersHost, projectsHost
} from './config';
import proxy from './services/proxy';
import server from './services/socket/server';

// console.log('swaggerDocument', swaggerDocument);

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

const services = {
    users: usersHost,
    projects: projectsHost,
};

const route = express.Router();

route.use('/', (req, res) => {
    res.status(200).json({
        status: 'ok'
    });
});
// route.use('/', swaggerUi.serve);
// route.get('/', swaggerUi.setup(swaggerDocument));

app.use('/doc', route);
app.use('/api', helmet(), proxy(services));

server(app, usersHost, projectsHost).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
