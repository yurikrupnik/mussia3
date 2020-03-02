import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// model('users', ProjectSchema);

export default model('Projects', ProjectSchema);
