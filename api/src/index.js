import app from "./app.js"
import { connect } from "./database.js"

const port = process.env.PORT || 3001


async function start() {
    try {
        const connection = await connect()
        // 1. conectamos el cliente
        app.locals.ddbbClient = connection; // 2. lo guardamos en el locals para que se acceda desde las rutas
        app.listen(port, () => console.log('Servidor levantado en el 3001'));
    } catch (err) {
        console.log('Error en el servidor: ', err);

    }
}




start()