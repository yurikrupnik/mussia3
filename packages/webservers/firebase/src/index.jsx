import path from 'path';
import cors from 'cors';
// import os from 'os';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
// import React from 'react';
// import cors from 'cors';
// const functions = require('firebase-functions');
import { https, auth } from 'firebase-functions';
// import admin from 'firebase-admin';
import firebase from 'firebase';
// const admin = require('firebase-admin');
// const React = require('react');
// const firebase = require('firebase');
// import axios from 'axios';
// import render from '@krupnik/render';
// import proxy from 'express-http-proxy';
import render from './services/render';
// import render from '@krupnik/render';
// import {
//     port, isProd, host, destPort, destHost
// } from './config';
import App from './components/App';
import routes from './components/routes';
// import axios from 'axios';

// firebase.initializeApp(firebaseConfig);


const webServer = express();
const app = express();

const assets = path.join(process.cwd(), '');

webServer.use(helmet());
webServer.use(cors());
webServer.use(express.static(assets));
app.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

const route = express.Router();
route.use(morgan('dev'));
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
// route.all('/api/users', proxy(`${destHost}:${destPort}`));
// function checkAuth(req, res, next) {
//     // console.log('req.headers.authtoken', req.headers.authtoken);
//     console.log('req.headers', req.headers);
//
//     if (req.headers.authtoken) {
//         admin.auth()
//             .verifyIdToken(req.headers.Authorization)
//             .then((s) => {
//                 console.log(s);
//             })
//             .catch(() => {
//                 res.status(403)
//                     .send('lol');
//             });
//     } else {
//         res.status(403)
//             .send('Unauthorized');
//     }
// }

route.get('/a', (req, res) => {
    res.send('a');
});

const provider = new firebase.auth.GithubAuthProvider();
route.post('/login', (req, res) => {
    // if (!req.body.email) {
    //     return res.status(400)
    //         .json({ error: 'missing email' });
    // }
    // if (!req.body.password) {
    //     return res.status(400)
    //         .json({ error: 'missing password' });
    // }
    //
    // res.send('lol');
    firebase.auth()
        .signInWithRedirect(provider)
        // .setPersistence(firebase.auth.Auth.Persistence.NONE) // don't persist auth session
        // .then(function () {
        //     return firebase.auth()
        //         .signInWithEmailAndPassword(req.body.email, req.body.password);
        // })
        .then((user) => { // https://firebase.google.com/docs/reference/js/firebase.User
            console.log('user', user);
            res.json(user);
            // let uid = user.uid;
            //
            // // set cookie with UID or some other form of persistence
            // // such as the Authorization header
            // res.cookie('__session', { uid: uid }, {
            //     signed: true,
            //     maxAge: 3600
            // });
            // res.set('cache-control', 'max-age=0, private');
            // may not be needed. Good to have if behind a CDN.
            // res.send('You have successfully logged in');
            //
            // return firebase.auth()
            //     .signOut(); //clears session from memory
        })
        .catch((err) => {
            console.log('error', err);
            res.send(err);
        });
});

app.use('/api', route);
// webServer.use('/buc', route1);
// app.use((req, res, next) => {
//     console.log('host', host); // eslint-disable-line no-console
//     console.log('host', os.hostname()); // eslint-disable-line no-console
//     if (req.url.includes('info')) {
//         console.log('os.hostname()', os.hostname()); // eslint-disable-line no-console
//         console.log('os.type()', os.type()); // eslint-disable-line no-console
//         console.log('os.platform()', os.platform()); // eslint-disable-line no-console
//         console.log('os.cpus()', os.cpus()); // eslint-disable-line no-console
//     }
//     return next();
// });

// if (isProd) {
webServer.use(render(App, routes));
// } else {
//     webServer.use(render());
// }
// console.log('auth', auth);

const shit = https.onCall((data, context) => {
    console.log(data);
    console.log(context);
    return data;
});
const api = https.onRequest(app);
const ssr = https.onRequest(webServer);
const sendWelcomeEmail = auth.user()
    .onCreate((user) => {
        console.log('sendWelcomeEmail user', user);
        // ...
    });
export {
    shit,
    api,
    ssr,
    sendWelcomeEmail
};
// webServer.listen(port, (err) => {
//     if (err) {
//         console.log('err', err); // eslint-disable-line no-console
//     } else {
//         console.log(`running at port: ${port}`); // eslint-disable-line no-console
//     }
// });
