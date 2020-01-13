import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';
// import { schema } from '@krupnik/express-responses';

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        properties:
 *          _id:
 *              type: string
 *              required: true
 *          id:
 *              type: string
 *              required: true
 *          email:
 *              type: string
 *              required: true
 *          name:
 *              type: string
 *              required: true
 *          hashPassword:
 *              type: string
 */

/**
 * @module UserSchema
 * @param {string} email email
 * @param {string} name name
 * @param {string} hashPassword hashPassword
 */
const UserSchema = new Schema({
    /**
     * @member id
     */
    id: {
        type: String,
        index: true,
        required: true
    },
    /**
     * @member {string} email
     */
    email: { type: String, required: true },
    /**
     * @member {string} name
     */
    name: { type: String, required: true },
    /**
     * @member {string} hashPassword
     */
    hashPassword: {
        type: String
    },
});

const Model = mongoose.model(dbModel, UserSchema);
Model.find({}).then((res) => {
    if (!res.length) {
        new Model({
            email: 'd@d.com',
            name: 'yuri',
            id: 'idiwrote',
            hashPassword: 'sd'
        }).save();
    }
});

// console.log('UserSchema', UserSchema);

export default Model;
export { UserSchema };
