import { encodePassword } from "../utils/auth.utils";
import jwt from 'jsonwebtoken';
import { jwt_secret } from "../utils/auth.secret";





export const registerCtrl = async (req, res) => {
    try {

        const [results] = await req.app.locals.ddbbClient.query('SELECT * FROM users WHERE user = ? ',

            [req.body.user])

        if (results.length === 0) {
            req.body.password = encodePassword(req.body.password);
            const [result] = await req.app.locals.ddbbClient.query('INSERT INTO users(user, password) VALUES(?,?)',
                [req.body.user, req.body.password])
            res.json(result.insertId)
        } else {
            // mando un 409(conflict) porque ya existe el usuario en BBDD
            res.sendStatus(409);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};


export const loginController = async (req, res) => {
    const { user } = req.body;
    // paso 1

    const [results] = await req.app.locals.ddbbClient.query('SELECT * FROM users WHERE user = ? ',

        [req.body.user])
    if (results.length > 0) {
        // existe el usuario con esas condiciones
        const token = jwt.sign({ user }, jwt_secret); // paso 2
        res.status(201).json({ access_token: token }); // paso 3
    } else {
        res.sendStatus(404);
    }
}



export const userInfoController = async (req, res) => {

    const [results] = await req.app.locals.ddbbClient.query('SELECT * FROM users WHERE user = ? ',

        [req.user])
    res.status(200).json(results[0])

}