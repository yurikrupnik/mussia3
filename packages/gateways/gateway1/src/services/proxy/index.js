import axios from 'axios';
// import {host} from "../../config";

const proxy = (services) => (req, res) => {
    // console.log('hosts', hosts);
    // console.log('req.params', req.params);
    // console.log('req.url', req.url);
    // console.log('req.body', req.body);
    // console.log('req.method', req.method);
    const {
        url, method, body, params
    } = req;

    // console.log('req.url', req.url);
    // // todo dynamic validations
    // const ports = {
    //     users: 4000,
    //     projects: 4001,
    // };

    // const url = req.url.split('/')[1];

    const host = services[url.split('/')[1]];

    axios({
        url: `${host}/api${url}`,
        method,
        data: body,
        params
    })
        .then((response) => {
            const { status, data } = response;
            res.status(status).json(data);
        })
        .catch((err) => {
            const { response } = err;
            const { status, data } = response;
            res.status(status).json(data);
        });
};

export default proxy;
