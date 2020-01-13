import express from 'express';
import {
    list,
    find,
    removeOne,
    create,
    update,
    schema
} from '@mussia/express-responses';
import { url } from './config';
import Model from './model';

const route = express.Router();
/**
 * @swagger
 * /api/projects:
 *   get:
 *     tags:
 *       - Projects
 *     name: Find project
 *     summary: Finds a sss
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single project object
 *         schema:
 *           $ref: '#/definitions/Project'
 *       401:
 *         description: No auth token
 */
route.get(`${url}/schema`, schema(Model)); // array
route.get(url, list(Model)); // array
route.get(`${url}/:id`, find(Model)); // object
route.post(url, create(Model));
//
route.put(url, update(Model));

route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
