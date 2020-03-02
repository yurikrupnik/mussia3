import mongoose from 'mongoose';
import session from 'express-session';
import connect from 'connect-mongo';

export default (url) => {
    mongoose
        .connect(url, {
            useNewUrlParser: true
        })
        .then((r) => {
            // console.log(r);
            r.models.project.find({}).then((data) => {
                console.log(data);
            });
        });

    const db = mongoose.connection;
    // console.log('db', db);

    // db.collections.projects.find({}).then((r) => {
    //     console.log(r);
    // });

    // db.models.project.find({}).then((r) => {
    //     console.log(r);
    // });
    // db.collections
    //     .models('projects')
    //     .fine({})
    //     .then((re) => {
    //         console.log(re);
    //     });
    mongoose.Promise = global.Promise;
    const opts = { url };
    const MongoStore = connect(session);
    db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
    db.on('connected', console.log.bind(console, 'connected:'));
    db.on('open', console.log.bind(console, 'open:'));
    db.once('disconnected', console.log.bind(console, 'disconnected:'));
    // return (req, res, next) => next();
    return session({
        secret: 'slomo',
        saveUninitialized: false,
        resave: false, // need to touch and then can use false as the value
        store: new MongoStore(opts)
    });
};
