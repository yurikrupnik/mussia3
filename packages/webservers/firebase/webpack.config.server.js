// const reduce = require('lodash/reduce');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
// const NodemonPlugin = require('nodemon-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin-v2');
const CopyPlugin = require('copy-webpack-plugin');
// const { StatsWriterPlugin } = require('webpack-stats-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const filename = 'server.js';
const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line
// const entry = json.name.includes('webserver') || json.name.includes('docs') || json.name.includes('firebase')
//     ? './index.jsx' : './index.js';

// const alias = reduce(json.dependencies, (acc, v, k) => {
//     acc[k] = path.resolve(cwd, 'node_modules', k);
//     return acc;
// }, {});

// console.log('alias', alias);

module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    // const isDebug = env ? !!env.debug : false;
    !isProd && require(path.resolve(cwd, './src/config')); // eslint-disable-line
    return {
        context: path.resolve(cwd, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
            // alias,
            // modules: [path.resolve(cwd), 'node_modules']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry: './index.jsx',
        output: {
            path: path.resolve(cwd, 'functions'),
            chunkFilename: '[name].js',
            filename,
            publicPath: '/',
            libraryTarget: 'commonjs'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                rootMode: 'upward',
                            }
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                // 'process.env.PORT': JSON.stringify(process.env.PORT),
                // 'process.env.USERS_HOST': JSON.stringify(process.env.USERS_HOST),
                // 'process.env.PROJECTS_HOST': JSON.stringify(process.env.PROJECTS_HOST),
                // 'process.env.port': JSON.stringify(process.env.port),
                // 'process.env.host': JSON.stringify(process.env.host),
                // 'process.env.HOST': JSON.stringify(process.env.HOST),
                // 'process.env.DEBUG': JSON.stringify(isDebug),
                // 'process.env.DEST_PORT': JSON.stringify(process.env.DEST_PORT),
                // 'process.env.DOCKER_HOST': JSON.stringify(process.env.DOCKER_HOST),
                // 'process.env.DESTINATION_HOST': JSON.stringify(process.env.DESTINATION_HOST)
            }),
            // new StatsWriterPlugin({
            //     fields: ["assets", "modules"]
            // }),
            new CopyPlugin([
                { from: path.join(cwd, 'dist/index.ejs'), to: path.join(cwd, 'functions') }
            ]),
            new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                files: [],
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })),
            new SwaggerJSDocWebpackPlugin({
                swaggerDefinition: {
                    openapi: '3.0.0',
                    info: {
                        title: json.name,
                        version: json.version,
                        description: json.description
                    }
                },
                apis: ['./src/api/**/index.js', './src/api/**/model.js'],
            }),
            fs.existsSync(path.resolve(cwd, 'jsdoc.json')) ? new JsDocPlugin({
                conf: path.resolve(cwd, 'jsdoc.json') // single jsdoc file
            }) : () => {},
            // !isProd && process.cwd().includes('webserver1') ? new BundleAnalyzerPlugin({}) : new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     openAnalyzer: false,
            //
            // }),
            // new CopyPlugin([
            //     { from: path.join(cwd, 'app.yml') }
            // ]),
            // argv.watch ? new NodemonPlugin({
            //     script: path.resolve(cwd, 'dist', filename),
            //     watch: path.resolve(cwd, 'dist', filename),
            //     verbose: true
            // }) : () => {}
        ],
    };
};

/*
*
* const functions = require('firebase-functions');
const admin = require('firebase-admin');
const React = require('react');
const firebase = require('firebase');
const express = require('express');
const {renderToString} = require('react-dom/server');
const {StaticRouter, matchPath} = require('react-router-dom');
// import { renderToString } from 'react-dom/server';
// import { StaticRouter, matchPath } from 'react-router-dom';
// import React from 'react';

// const html = require('../dist/main');
const App = require('../src/components/App');
const routes = require('../src/components/routes');


const firebaseConfig = {
    apiKey: 'AIzaSyDaUJ7GyEIr35qfLSuu6RAKL7YvD5zZevQ',
    authDomain: 'music-pzl.firebaseapp.com',
    databaseURL: 'https://music-pzl.firebaseio.com',
    projectId: 'music-pzl',
    storageBucket: 'music-pzl.appspot.com',
    messagingSenderId: '738703580147',
    appId: '1:738703580147:web:b3024fb238b12042a3d086',
    measurementId: 'G-9QSRBDFET2'
};

admin.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const app = express();

const route = express.Router();
const ssr = express.Router();

route.get('/signup', (req, res) => {
    // firebase.auth().createUserWithEmailAndPassword('krupnik.yuri@gmail.com', 'ludmila9000')
    firebase.auth().createUserWithEmailAndPassword('krupnik.yuri@gmail.com', 'ludmila9000')
        .then((users) => {
            // console.log(users);
            res.send('pl');
            // res.json(users)
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    // firebase.auth.FacebookAuthProvider
});


route.get('/', (req, res) => {
    admin.firestore().collection('users').get()
        .then((users) => {
            console.log(users);
            res.json(users);
        });
});
route.post('/', (req, res) => {
    res.send('created');
});
route.get('/:userId', (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    // res.send(req.params);
    res.render('index.ejs', {
        html: renderToString(html),
        title: 'lol'
    });
});

ssr.get('**', (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    console.log('req', req.url);
    console.log('req', req.query);
    console.log('req', req.params);
    res.render('index.ejs', {
        html: '<div>okg</div>'
    });
    // res.send('as');
});

app.use(route);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// console.log('functions', functions);
// module.exports = functions.https.onRequest(route);
// exports.projects = functions.https.onRequest(route);
exports.api = functions.https.onRequest(app);
exports.ssr = functions.https.onRequest(ssr);

* */
