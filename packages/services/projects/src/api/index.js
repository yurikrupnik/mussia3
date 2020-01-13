import express from 'express';
import projects from './projects';

const route = express.Router();

route.use('/api', projects);

export default route;
