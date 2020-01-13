import axios from 'axios';
import { baseURL } from '../config';

const service0 = 4000;
const service1 = 4001;
const service2 = 4002;
const service3 = 4003;

const service0Request = axios.create({ baseURL: `${baseURL}${service0}` });
const service1Request = axios.create({ baseURL: `${baseURL}${service1}` });
const service2Request = axios.create({ baseURL: `${baseURL}${service2}` });
const service3Request = axios.create({ baseURL: `${baseURL}${service3}` });

export {
    service0Request,
    service1Request,
    service2Request,
    service3Request
};
