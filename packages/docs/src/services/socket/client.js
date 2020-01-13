import io from 'socket.io-client'; // eslint-disable-line
import { host, port } from '../../config';

const socket = io.connect(`${host}:${port}`, { reconnect: true });

const service = {
    registerReceiveMessage(cb) {
        socket.on('receiveMessage', cb);
    },
    unRegisterReceiveMessage(cb) {
        socket.removeListener('receiveMessage', cb);
    },
    emitNewUser(newSession, cb) {
        socket.emit('newUser', newSession, cb);
    },
    newUser(value, cb) {
        socket.emit('newMessage', value, cb);
    },
    receiveEntry(value) {
        console.log('value', value); // eslint-disable-line
        // socket.emit('newMessage', value, cb);
    },
    newEntry(user, cb) {
        socket.emit('entry', user, cb);
    }
};

export default service;
