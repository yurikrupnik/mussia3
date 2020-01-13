/* this file is used in webpack client for dev port and proxy host */
// console.log('process.env.HOST', process.env.HOST); // eslint-disable-line
// console.log('process.env.host', process.env.host); // eslint-disable-line
// console.log('process.env.port', process.env.port); // eslint-disable-line
// console.log('process.env.PORT', process.env.PORT); // eslint-disable-line
// console.log('process.env.DESTINATION_HOST', process.env.DESTINATION_HOST); // eslint-disable-line
// console.log('process.env.DOCKER_HOST', process.env.DOCKER_HOST); // eslint-disable-line

const destHost = process.env.DESTINATION_HOST || process.env.DOCKER_HOST || 'http://localhost';
// const usersEndpoint = process.env.USERS_ENDPOINT || '';
// console.log('process.env.npm_package_config_port', process.env.npm_package_config_port);
const port = Number(process.env.PORT) || 7000;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.HOST || 'http://localhost';
const destPort = Number(process.env.DEST_PORT) || 3000;

// console.log('destPort', destPort); // eslint-disable-line
// console.log('port', port); // eslint-disable-line
// console.log('host', host); // eslint-disable-line
// console.log('baseurl', baseURL); // eslint-disable-line

module.exports = {
    port,
    host,
    destPort,
    isProd,
    destHost
    // usersEndpoint
};
