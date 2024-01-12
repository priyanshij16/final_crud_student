const Umzug = require('umzug');
import sequelize from 'sequelize';
import { Sequelize, DataType } from 'sequelize';
import databaseInstance from './db';
import path from 'path';

// console.log("path", path.join(__dirname, '../migrations'));
// let pathVal = path.join(__dirname, '../migrations');

const migrate = new Umzug({
    migrations: {
        // Path of the migration file .. 
        path : path.join(__dirname, '../migrations'), 
        // The pattern that determines whether or not a file is a migration.
        pattern: /\.js$/,
        //The params that gets passed to the migrations. ?
        params: [databaseInstance.getQueryInterface (), sequelize],

    },
    storage: "sequelize",
    storageOptions:{
        sequelize: databaseInstance,
    }
})



const connectionDatabase = async () => {
        try{
            const connectionResult = await databaseInstance.authenticate()
            .then(async() => {
                console.log("Database Connection done successfully")

                await migrate.up()
                .then(async() => {
                    console.log("Migration run successfully");
                }).catch((err: any) => {
                    console.log("Migration Failed", err);
                })
                
            }).catch((err: any) => {
                console.log("Error in database connection authentication");
                
            }) 
        }
        catch(err) {
            console.log("Failed database connection ");
            return Promise.reject(err);
        }
    
}
export default connectionDatabase;

