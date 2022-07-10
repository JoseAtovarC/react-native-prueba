import mysql from "mysql2/promise";
import { config } from "./config.js";


export const connect = async () => {

    await mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,

    })
        .then(async (connection) => {
            await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database};`);


        });
    return await mysql.createConnection(config)
}

export const createTable = async () => {
    const conct = await connect()
    conct.execute(`CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(100),
    password VARCHAR(250),
    PRIMARY KEY(id))
  `);

}

createTable()
