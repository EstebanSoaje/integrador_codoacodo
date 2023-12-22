//import {mysql} from 'mysql2/promise'

/* Requerimos la dependencia que toma las variables del archivo .env*/
require('dotenv').config();
/* Leemos la constante*/
const PORT = process.env.PORT ?? 1234;
const PASSWORD = process.env.PASSWORD ?? '';

const config = {
    host: 'localhost',
    user: 'root',
    port: PORT,
    password: PASSWORD,
    database: 'funkoback'
}

const connection = await mysql.createConnection(config);


export class ItemModel {
    static async getAll ({category}){
        const result = await connection.query(
            'SELECT * FROM category'
        )
        console.log(result);
    }



}