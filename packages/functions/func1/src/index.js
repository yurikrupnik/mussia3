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

// Instantiates a client
// const fetch = require('node-fetch');

const func1 = (req, res) => {
    // const msg = req.query.msg || 'Hello world';
    // const lang = req.query.lang || 'es';
    res
        .send({
            all: 'aa'
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
    res
        .send({
            all: 'a'
        });
}

// exports.func1 = func1;
export {
    func1,
    a
};

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
