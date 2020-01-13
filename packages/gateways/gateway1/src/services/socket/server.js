import http from 'http';
import IO from 'socket.io';
import s from 'socket.io-client';

export default (app, usersHost, projectsHost) => {
    const users = s(usersHost);
    const projects = s(projectsHost);
    // const users = s('http://localhost:4000');
    // const projects = s('http://localhost:4001');
    const server = http.Server(app);
    const io = IO(server);
    io.on('connection', (socket) => {
        socket.on('receiveEntry', (message) => {
            console.log('gateway got receiveEntry', message); // eslint-disable-line
            users.emit('receiveEntry', message, () => {});
            projects.emit('receiveEntry', message, () => {});
            // next();
        });

        // socket.on('newUser', (user, next) => {
        //     if (Object.keys(users).includes(user.nickname)) {
        //         return next('Name already in use');
        //     }
        //     socket.nickname = user.nickname; // eslint-disable-line no-param-reassign
        //     socket.avatar = user.avatar; // eslint-disable-line no-param-reassign
        //     users[user.nickname] = user;
        //     return next(null);
        // });

        socket.on('disconnect', (reason) => { // eslint-disable-line no-unused-vars
            // delete users[socket.nickname];
        });
    });

    // io.on('event', (request) => {
    //     console.log('request.url', request.url);
    // });

    return server;
};
