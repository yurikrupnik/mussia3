import http from 'http';
import IO from 'socket.io';

export default (app) => {
    const server = http.Server(app);
    const io = IO(server);
    // const users = {}; // list of messages locally saved in the server
    io.on('connection', (socket) => {
        socket.on('receiveEntry', (message) => {
            console.log('projects got receiveEntry', message); // eslint-disable-line
            // return next();
        });
    });
    // io.on('event', (id) => {
    //     console.log('event', id);
    //     // io.emit('receiveMessage', id);
    // });
    // io.on('connect', (id) => {
    //     console.log('connect', id);
    //     // io.emit('receiveMessage', id);
    // });
    return server;
};
