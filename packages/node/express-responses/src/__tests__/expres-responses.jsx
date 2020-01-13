import mongoose, { Schema } from 'mongoose';
import {
    list,
    find,
    removeOne,
    create,
    update,
    schema
} from '../index';
// import {dbModel} from "../../../../services/projects/src/api/projects/config";
// import handleRender from '../handleRender';

const { describe, test } = global;

const ProjectSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
    // name: { type: String, required: true },
    // hashPassword: String,
});

const Model = mongoose.model('Projects', ProjectSchema);

const req = {
    params: {
        id: 'dsasd23123123dsd23123'
    },
    body: {
        _id: 'dsasd23123123dsd23123'
    }
};
const res = {
    json: jest.fn,
    status: jest.fn
};


describe('render', () => {
    test('list', () => {
        list(Model)(
            req,
            res
        );
    });
    test('find', () => {
        find(Model)(
            req,
            res
        );
    });
    test('removeOne', () => {
        removeOne(Model)(
            req,
            res
        );
    });
    test('create', () => {
        create(Model)(
            req,
            res
        );
    });
    test('update', () => {
        update(Model)(
            req,
            res
        );
    });
    test('schema', () => {
        schema(Model)(
            req,
            res
        );
    });
});
