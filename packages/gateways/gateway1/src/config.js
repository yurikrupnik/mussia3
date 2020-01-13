/* this file is used in webpack client for dev port and proxy host */
// console.log('process.env.PORT', process.env.PORT);
const port = Number(process.env.PORT) || 6001;
const appServerPort = port - 100;
const isProd = process.env.NODE_ENV === 'production';
const usersHost = process.env.DOCKER_HOST || process.env.USERS_HOST || 'http://localhost:4000';
const projectsHost = process.env.DOCKER_HOST || process.env.PROJECTS_HOST || 'http://localhost:4001';
const host = process.env.DOCKER_HOST || process.env.HOST || 'http://localhost';
// const destPort = Number(process.env.DEST_PORT) || 4000;
// const destPort1 = Number(process.env.DEST_PORT1) || 4001;
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/local-service1';

module.exports = {
    port,
    appServerPort,
    databaseUrl,
    projectsHost,
    usersHost,
    host,
    // destPort,
    // destPort1,
    isProd
};
