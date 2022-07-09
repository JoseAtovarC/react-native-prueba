

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
