// import sequelize from 'sequelize';
// import {Sequelize} from 'sequelize';
// // import 'dotenv/config'
// require('dotenv').config(); 

// class Database {
//     db: string;
//     user: string;
//     password: string;
//     host: string;
//     port: number;
//     maxPool: number;
//     minPool: number;
//     database: sequelize.Sequelize;

//     constructor() {
//         this.db = process.env.DBNAME
//         this.user = process.env.DBUSER
//         this.password = process.env.DBPASS
//         this.host = process.env.DBHOST
//         this.port = Number(process.env.DBPORT)
//         this.database = new Sequelize(this.db, this.user, this.password, {
//             host: this.host,
//             port: this.port,
//             logging: false,
//             dialect: 'postgres',
//             pool: {
//                 max: 200,
//                 min: 0,
//                 idle: 20000
//             }
//         })   
//     }
// }
// let databaseInstance = new Database().database
// export default databaseInstance

import 'dotenv/config';
import { Sequelize } from 'sequelize';

class Database {
    private static instance: Database;
    db: string;
    user: string;
    password: string;
    host: string;
    port: number;
    database: Sequelize;

    private constructor() {
        this.db = process.env.DBNAME || 'testdb';
        this.user = process.env.DBUSER || 'postgres';
        this.password = process.env.DBPASS|| 'rgbXYZ@9182';
        this.host = process.env.DBHOST || 'localhost';
        this.port = Number(process.env.DBPORT) ;
           
        this.database = new Sequelize(this.db, this.user, this.password, {
            host: this.host,
            port: this.port,
            logging: false,
            dialect:'postgres',
            pool: {
                max: 200,
                min: 0,
                idle: 20000
            }
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const databaseInstance = Database.getInstance().database;
export default databaseInstance;
