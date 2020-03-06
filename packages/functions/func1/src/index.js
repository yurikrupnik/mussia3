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
// function handleDatabaseUrl() {
//     const url = process.env.DATABASE_URL;
//     if (!url) {
//         return 'mongodb://localhost/client-apps';
//     }
//     return url.includes('mlab.com')
//         ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${url}`
//         : url;
// }

import axios from 'axios';
// import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';
import express, { Router } from 'express';

// import render from './render';

// import { create, list } from '@mussia/express-responses';
// import ProjectsMongoose, { ProjectSchema, Model } from '@mussia/db-models';
// import UsersMongoose, { Model as UsersModel } from '@mussia/db-models-users';
// import mon from '@mussia/db-models-users/src';

// const UsersMO = new Mongoose();
// const ProjectsMO = new Mongoose();

// console.log('M', M);
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
// const dbURL = '';
// const dbURL1 = '';
// const connectMongoDB = () => MongoClient.connect(dbURL);
// const connected = M.connect(dbURL, { useNewUrlParser: true });
// const db = mongoose.connection;

const func1Rotue = Router();
// const projects = Router();
// const users = Router();

// const UsersSchema = new mongoose.Schema({
//     nick: {
//         type: String,
//         index: true,
//         required: true
//     }
// });
// const Users = mongoose.model('Users', UsersSchema);
// const ProjectSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         index: true,
//         required: true
//     },
//     description: { type: String },
//     user: { type: String, ref: Users, required: true }
// });
// const Projects = mongoose.model('Projects', ProjectSchema);
//
// function connect(mo, url) {
//     // const c =  M.connect(dbURL, { useNewUrlParser: true }).then((res) => {
//     //     console.log('res', res);
//     //     return next();
//     // });
//
//     mongoose.connect(url, {
//         useNewUrlParser: true
//     });
//     const db = mongoose.connection;
//     mongoose.Promise = global.Promise;
//     // const opts = { url };
//     // const MongoStore = connect(session);
// db.on
// ('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
//     db.on('connected', console.log.bind(console, 'connected:'));
//     db.on('open', console.log.bind(console, 'open:', url));
//     db.once('disconnected', console.log.bind(console, 'disconnected:'));
//     return (req, res, next) => next();
// }

// projects.use(connectWithPromise);
// projects.use(connect(null, dbURL));
// users.use(connect(null, dbURL1));

// projects.get('/', render(null, []));
func1Rotue.get('/', (req, res) => {
    res.status(200).json({ status: 'ok router' });
});
func1Rotue.post('/', (req, res) => {
    res.status(200).json({ status: 'ok router post' });
});

// projects.get('/projects/schema', schema(Projects));
// // projects.get('/projects', list(M.models.Projects));
// // projects.get('/projects', list(Projects));
// projects.get('/projects', (req, res) => {
//     Projects.find({})
//         .populate('user')
//         .then((re) => {
//             res.status(200).json(re);
//         });
// });
// projects.get('/projects/:id', find(Projects));
// projects.delete('/projects/:id', removeOne(Projects));
// projects.post('/projects', create(Projects));
// projects.put('/projects', update(Projects));
//
// users.get('/users/schema', schema(Users));
// users.get('/users', list(Users));
// users.get('/users/:id', find(Users));
// users.delete('/users/:id', removeOne(Users));
// users.post('/users', create(Users));
// users.put('/users', update(Users));

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
// let cachedDb = null;
const app = express();
const api = express();

api.get('/', (req, res) => {
    res.status(200).json({
        ok: 'yes'
    });
});

api.post('/', (req, res) => {
    res.status(200).json({
        ok: 'yes post'
    });
});
// app.use(connect(null, handleDatabaseUrl()));
app.use(func1Rotue);

const func1 = (req, res) => {
    res.status(200).json({
        ok: 'yes'
    });
};
// const func1 = api;
const func12 = (req, res) => axios
    .get('http://api.ipify.org?format=json')
    .then((response) => {
        console.log('re'); // eslint-disable-line
        return res.status(200).json({
            message: response.data.ip
        });
    })
    .catch((err) => res.status(500).json({
        error: err
    }));

function a(req, res) {
    return axios
        .get('https://api.github.com/users')
        .then((response) => {
            console.log('re'); // eslint-disable-line
            return res.status(200).json({
                message: response.data
            });
        })
        .catch((err) => {
            console.log('eerr'); // // eslint-disable-line
            return res.status(500).json({
                error: err
            });
        });
}

// exports.func1 = func1;
export {
    func1, a, api, func1Rotue, func12
};
