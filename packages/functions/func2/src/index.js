// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };

// import button from '@krupnik/button';
// import axios from 'axios';
// import chalk from 'chalk';
// import mongoose from 'mongoose';
// import render from '@krupnik/render/dist/cjs/index';
// import morgan from 'morgan/index';

const func2 = (req, res) => {
    console.log('ok'); // eslint-disable-line
    return res.status(200).json({ ok: 'yes' });
    // const dbURL = 'mongodb://yuri:ludmila900@ds263876.mlab.com:63876/client-app-projects';
    // mongoose.connect(dbURL);
    //
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
    //         req.status(500).send('failsed');
    //         process.exit(0);
    //     });
    // });
};

function func3(req, res) {
    return res.status(200).json({
        ok: 'yes'
    });
}
// exports.func1 = func1;
export { func2, func3 };

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
