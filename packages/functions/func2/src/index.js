// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };

// import button from '@krupnik/button';
// import render from '@krupnik/render/dist/cjs/index';
// import morgan from 'morgan/index';
// console.log('process.env', process.env);

const func2 = (req, res) => {
    // const msg = req.query.msg || 'Hello world';
    // const lang = req.query.lang || 'es';
    // res.status(200)
    res.send({
        all: 'func2 response'
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

function func3(req, res) {
    return res.status(200).send('ok');
}
// exports.func1 = func1;
export {
    func2,
    func3
};

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
