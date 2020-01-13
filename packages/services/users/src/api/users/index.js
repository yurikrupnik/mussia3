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
 * /api/users/schema:
 *   get:
 *     tags:
 *       - Users
 *     description: Get user schema
 *     summary: Gets api schema
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Schema of an api
 *         content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */
route.get(`${url}/schema`, schema(Model));

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Get all users
 *     summary: Finds users
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Schema of an api
 *         content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */

route.get(url, list(Model)); // array
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     name: get user 1
 *     summary: Finds a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required:
 *           - id
 *     responses:
 *       200:
 *         description: A single user object
 *         content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */
route.get(`${url}/:id`, find(Model)); // object
/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */
route.post(url, create(Model));
/**
 * @swagger
 * /api/users:
 *   put:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       description: A JSON object that contains the user name and age.
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: A single user object
 *         content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */
route.put(url, update(Model));
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required:
 *           - id
 *     responses:
 *       200:
 *         description: A single user object
 *         content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 *       401:
 *         description: No auth token
 */
route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
