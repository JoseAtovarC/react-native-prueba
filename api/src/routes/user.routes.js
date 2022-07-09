import express from 'express';
import { registerCtrl } from '../controller/user.controller.js';



const router = express.Router();


// enpoint para el registro del usuario
router.post('/auth/register', registerCtrl);

// enpoint para el login del usuario
router.post('/auth/login');

// enpoint para info del usuario
router.get('/user');

export default router;