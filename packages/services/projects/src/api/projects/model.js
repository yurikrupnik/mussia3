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
 * @module ProjectSchema
 * @param {string} name email
 * @param {string} description name
 * @param {string} user hashPassword
 */
const ProjectSchema = new Schema({
    /*
    * @member {String} name
    * */
    name: {
        type: String,
        index: true,
        required: true
    },
    /*
    * @member {String} description
    * */
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

/**
 * @constructor ProjectsModel
 * @param {string} name sss
 * @param {string} description description
 * @param {string} user user jiji
 */

const ProjectsModel = mongoose.model(dbModel, ProjectSchema);
// Model.remove().then((response) => {
//     console.log(response);
// })
//     .catch((error) => {
//         console.log(error);
//     });
ProjectsModel.find({}).then((res) => {
    if (!res.length) {
        new ProjectsModel({
            // email: 'Project1',
            name: 'Project 1',
            description: 'Some description',
            user: new mongoose.Types.ObjectId()
            // hashPassword: 'sd'
        }).save();
    }
});

export default ProjectsModel;
export { ProjectSchema };
