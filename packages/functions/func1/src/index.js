// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };

// import button from '@krupnik/button';
// import render from '@krupnik/render/dist/cjs/index';
// const port = process.env.npm_package_config_myPort || 8080;
// import morgan from 'morgan/index';
// console.log('port', port);
// console.log('process.env', process.env);
// const morgan = require('morgan');
// const { Translate } = require('@google-cloud/translate').v2;
function handleDatabaseUrl() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        return 'mongodb://localhost/client-apps';
    }
    return url.includes('mlab.com')
        ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${url}`
        : url;
}

import axios from 'axios';
// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import express, { Router } from 'express';

import render from './render';

import { create, find, list, removeOne, update, schema } from '@mussia/express-responses';
// import ProjectsMongoose, { ProjectSchema, Model } from '@mussia/db-models';
// import UsersMongoose, { Model as UsersModel } from '@mussia/db-models-users';
// import mon from '@mussia/db-models-users/src';

// const UsersMO = new Mongoose();
// const ProjectsMO = new Mongoose();

// console.log('M', M);
//require chalk module to give colors to console text
// import render from '@krupnik/render/dist/cjs/index';
// import morgan from 'morgan/index';
// const ProjectSchema = new Schema({
//     name: {
//         type: String,
//         index: true,
//         required: true
//     },
//     description: { type: String },
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
// });
// const UsersSchema = new UsersMO.Schema({
//     name: {
//         type: String,
//         index: true,
//         required: true
//     },
//     hash: {
//         type: String
//     }
//     // description: { type: String },
//     // user: { type: Schema.Types.ObjectId, ref: 'User' }
// });
// // const Projects = mongoose.model(Model);
// const Users = UsersMO.model('Users', UsersSchema);
const dbURL = '';
const dbURL1 = '';
// const connectMongoDB = () => MongoClient.connect(dbURL);
// const connected = M.connect(dbURL, { useNewUrlParser: true });
// const db = mongoose.connection;

const projects = Router();
const users = Router();

const UsersSchema = new mongoose.Schema({
    nick: {
        type: String,
        index: true,
        required: true
    }
});
const Users = mongoose.model('Users', UsersSchema);
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: { type: String },
    user: { type: String, ref: Users, required: true }
});
const Projects = mongoose.model('Projects', ProjectSchema);

function connect(mo, url) {
    // const c =  M.connect(dbURL, { useNewUrlParser: true }).then((res) => {
    //     console.log('res', res);
    //     return next();
    // });

    mongoose.connect(url, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    mongoose.Promise = global.Promise;
    // const opts = { url };
    // const MongoStore = connect(session);
    db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
    db.on('connected', console.log.bind(console, 'connected:'));
    db.on('open', console.log.bind(console, 'open:', url));
    db.once('disconnected', console.log.bind(console, 'disconnected:'));
    return (req, res, next) => next();
}

// projects.use(connectWithPromise);
// projects.use(connect(null, dbURL));
// users.use(connect(null, dbURL1));

projects.get('/', render(null, []));

projects.get('/projects/schema', schema(Projects));
// projects.get('/projects', list(M.models.Projects));
// projects.get('/projects', list(Projects));
projects.get('/projects', (req, res) => {
    Projects.find({})
        .populate('user')
        .then((re) => {
            res.status(200).json(re);
        });
});
projects.get('/projects/:id', find(Projects));
projects.delete('/projects/:id', removeOne(Projects));
projects.post('/projects', create(Projects));
projects.put('/projects', update(Projects));

users.get('/users/schema', schema(Users));
users.get('/users', list(Users));
users.get('/users/:id', find(Users));
users.delete('/users/:id', removeOne(Users));
users.post('/users', create(Users));
users.put('/users', update(Users));

// projects.use(disconnect);
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
// const client = new MongoClient(dbURL, { useNewUrlParser: true });
// client.connect((err) => {
//     const collection = client.db;
//     console.log('collection', collection);
//     // .db('test')
//     // .collection('projects')
//     // .then((res) => {
//     //     console.log(res);
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // });
//     // perform actions on the collection object
//     client.close();
// });
let cachedDb = null;
const app = express();
app.use(connect(null, handleDatabaseUrl()));
app.use(projects, users);
// app.post(‘/’, (req,res) => {
// res.status(200).send(‘Hello POST!’);
// });
// app.put(‘/’, (req,res) => {
// res.status(200).send(‘Hello PUT!’);
// });
// app.delete(‘/’, (req,res) => {
// res.status(200).send(‘Hello DELETE!’);
// });

// const func1 = route;
const func1 = app;
const func122 = (req, res) => {
    // console.log('req.method', req.method);
    const { method, params, url } = req;
    if (url === '/favicon.ico') {
        return;
    }
    if (method === 'GET') {
        // console.log('params', req)
        // console.log('url', req.url);
        //         console.log('params', req.params);;
        return list(Model)(req, res);
        // console.log('params', req.param);
        // res.status(200).json({ status: 'get' });
        // if (req.params) {
        //     list(Model)(req, res);
        // } else {
        //     list(Model)(req, res);
        // }
    } else if (method === 'POST') {
        return create(Model)(req, res);
        // res.status(200).json({ status: 'ok' });
    } else {
        res.status(200).json({ status: 'ok' });
    }
    // console.log('connected', connected);
    // console.log('key', Object.keys(db));
    // console.log('db', db.models.Projects);
    // console.log('db', db.collections);
    // console.log('req', req.url);
    // return (
    //     Model.find({})
    //         // connectToDatabase(dbURL)
    //         //     .then(queryDatabase)
    //         .then((result) => {
    //             console.log('=> returning result: ', result);
    //             res.status(200).json(result);
    //             // callback(null, result);
    //         })
    //         .catch((err) => {
    //             console.log('=> an error occurred: ', err);
    //             // callback(err);
    //         });
    // );
    // db.models.Projects.find({}) // works
    //     // db.collections.projects.then((data) => {
    //     .then((data) => {
    //         console.log('data', data);
    //         res.status(200).json(data);
    //     });
    // res.status(200).json({ pl: 'okg' });
    // return mongoose.connect(dbURL, { useNewUrlParser: true }).then(
    //     (db) => {
    //         console.log(db);
    //         // Model.find({})
    //         // db.models.Projects
    //         Model.find({}).then((data) => {
    //             console.log(data);
    //             res.status(200).json(data);
    //         });
    //     }
    //     // .collections('projects')
    //     // .find({})
    //     // .toArray()
    //     // .then((documents) => ({ db, documents }))
    // );
    // mongoose.connect(dbURL).then((da) => {
    //     console.log(
    //         da
    //         // .collection('Projects')
    //         // .find({})
    //         // .toArray()
    //     );
    //     res.status(200).json({
    //         lol: false
    //     });
    //     // return da;
    // });
    // co(function*() {
    //     const client = yield mongodb.MongoClient.connect(dbURL);
    //
    //     const docs = yield client.db('test').collection('projects').find().toArray();
    //     res.send('Result: ' + JSON.stringify(docs));
    // }).catch(error => {
    //     res.send('Error: ' + error.toString());
    // });

    // return axios.get('http://api.ipify.org?format=json')
    //     .then((response) => {
    //         return res.status(200).json({
    //             message: response.data.ip
    //         });
    //         // res
    //         //     .send({
    //         //         all: 'aa'
    //         //     });
    //     })
    //     .catch((err) => {
    //         return res.status(500).json({
    //             error: err
    //         });
    //     });
    // const db = mongodb.connect(dbURL)
    // console.log('db', db)
    // mongoose.connection.on('connected', function(){
    //     console.log(connected('Mongoose default connection is open to ', dbURL));
    //     req.status(500).send('failsed');
    // });
    //
    // mongoose.connection.on('error', function(err){
    //     // console.log(error('Mongoose default connection has occured '+err+' error'));
    //     req.status(500).send('failsed');
    // });
    //
    // mongoose.connection.on('disconnected', function(){
    //     console.log(disconnected('Mongoose default connection is disconnected'));
    //     req.status(500).send('failsed');
    // });
    //
    // process.on('SIGINT', function(){
    //     mongoose.connection.close(function(){
    //         // console.log(termination('Mongoose default connection is disconnected due to application termination'));
    //         req.status(500).send('failsed');
    //         process.exit(0);
    //     });
    // });
};
const func12 = (req, res) => {
    // const msg = req.query.msg || 'Hello world';
    // const lang = req.query.lang || 'es';
    return axios
        .get('http://api.ipify.org?format=json')
        .then((response) => {
            return res.status(200).json({
                message: response.data.ip
            });
            // res
            //     .send({
            //         all: 'aa'
            //     });
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        });
    // translate.translate(msg, lang, (err, translation) => {
    //     if (err) {
    //         res.status(500)
    //             .send(err);
    //     } else {
    //         res.status(200)
    //             .send(translation);
    //     }
    //     // translation;
    // });

    // return res.status(200)
    //     .json({
    //         lol: 'aol',
    //         port
    //     });
    // return fetch('https://api.github.com/users/yurikrupnik')
    //     .then((response) => {
    //         return res.status(200).json(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
};

function a(req, res) {
    return axios
        .get('https://api.github.com/users')
        .then((response) => {
            return res.status(200).json({
                message: response.data
            });
            // res
            //     .send({
            //         all: 'aa'
            //     });
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        });
}

// exports.func1 = func1;
export { func1, a };

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
