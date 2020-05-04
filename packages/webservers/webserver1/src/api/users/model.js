import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    role: {
        type: String,
        enum: ['Client', 'Admin'],
        default: 'Client'
    },
    name: String,
    hashPassword: String
});

const Model = mongoose.model(dbModel, UserSchema);

export default Model;
export { UserSchema };
