import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

// const UserSchema = new Schema({
//     id: {
//         type: String,
//         index: true,
//         required: true
//     },
//     email: { type: String, required: true },
//     name: { type: String, required: true },
//     hashPassword: String,
// });
//
// const UserModel = mongoose.model(dbModel, UserSchema);
/**
 * @constructor ProjectSchema
 * @param {string} name sss
 * @param {string} description description
 * @param {string} user user jiji
 */
const ProjectSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Model = mongoose.model(dbModel, ProjectSchema);

Model.find({}).then((res) => {
    if (!res.length) {
        new Model({
            // email: 'Project1',
            name: 'Project 1',
            description: 'Some description',
            user: new mongoose.Types.ObjectId()
            // hashPassword: 'sd'
        }).save();
    }
});

export default Model;
export { ProjectSchema };
