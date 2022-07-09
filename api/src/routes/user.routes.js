import express from 'express';
import { registerCtrl, loginController, userInfoController } from '../controller/user.controller.js';
import { validateAuth } from '../middleware/auth.middleware.js';



const router = express.Router();
/**
 * @swagger 
 * tags:
 *  name: auth
 *  description: auth endpoint
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: register a new user
 *    tags: [auth]
 */
// enpoint para el registro del usuario
router.post('/auth/register', registerCtrl);
/**
 * @swagger
 * /auth/loginr:
 *  post:
 *    summary: login for the user
 *    tags: [auth]
 */
// enpoint para el login del usuario
router.post('/auth/login', loginController);


/**
 * @swagger
 * /user:
 *  get:
 *    summary: get the user info
 *    tags: [auth]
 */

// enpoint para info del usuario
router.get('/user', validateAuth, userInfoController);

export default router;