import path from 'path';
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';

// todo check Error: Cannot find module 'react-router-dom'

import swaggerUi from 'swagger-ui-express';

// import render from '@krupnik/render';
import render from './services/render';

// import App from './components/App';
// import routes from './components/routes';
import {
    port, isProd
} from './config';

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

const app = express();
app.use(morgan('dev'));
app.use(express.static(assets));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);
const routeSwagger = express.Router();

routeSwagger.use('/swagger', swaggerUi.serve);
routeSwagger.get('/swagger', swaggerUi.setup(null, {
    explorer: true,
    swaggerOptions: {
        urls: [ // just for test/dev
            {
                url: 'http://localhost:4000/swagger',
                name: '@mussia/users',
                tag: 'Users'
            },
            {
                url: 'http://localhost:4001/swagger',
                name: '@mussia/projects',
                tag: 'Projects'
            }
        ]
    }
}));

app.use('/report', (req, res) => {
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');
    return res.render('report.html');
});

function styleguide() {
    const route = express.Router();
    route.get('/styleguide', (req, res) => {
        app.engine('html', ejs.renderFile);
        app.set('view engine', 'html');
        return res.render('styleguide/index.html');
    });
    return route;
}

app.use(styleguide());

app.use(routeSwagger);

app.use(render());

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
