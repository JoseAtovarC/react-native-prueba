import jwt from 'jsonwebtoken';
import { jwt_secret } from '../utils/auth.secret.js';


export const validateAuth = (req, res, next) => {
    try {
        // obtener el email --> lo tengo que obtener del token
        const auth = req.header('Authorization'); // me devuelve el valor de la header
        // ¿Que estructura tiene la header? --> Bearer _token_jwt_
        const token = auth.split(' ')[1]; // obtenemos el token
        const payload = jwt.verify(token, jwt_secret);
        // añadir a la request un atributo
        req.user = payload.user;
        next();
    } catch (err) {
        // el token NO es válido o no hay token
        console.error(err);
        res.sendStatus(401);
    }
}