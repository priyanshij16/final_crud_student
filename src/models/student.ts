
import sequelize from "sequelize";
import  {Model, CreationOptional}  from "sequelize";
// var { Model} = require('sequelize')
import databaseInstance from "../config/db";
import Address from "./address";

export interface StudentAttributes {
   studentId?: string
   studentName: string
    email: string
    contactNumber: string
    gender: string
    dateOfBirth: string
    createdAt?: Date
    createdBy?: string
    updatedAt?: Date
    updatedBy?: string
    deletedAt?: Date
    deletedBy?: string
}

class Student extends Model<StudentAttributes> {
    declare studentId: string
    declare studentName: string
    declare email: string
    declare contactNumber: string
    declare gender: string
    declare dateOfBirth: string
    declare createdAt: Date
    declare createdBy: string
    declare updatedAt: CreationOptional<Date>
    declare updatedBy: CreationOptional<string>
    declare deletedAt: CreationOptional<Date>
    declare deletedBy: CreationOptional<string>

}
Student.init(
    {
       studentId : {
            type: sequelize.UUID,
             defaultValue: sequelize.UUIDV4,
     // defaultValue: sequelize.literal('uuid_generate_v4()'), 
     // Use your database-specific function for UUID generation
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement:true
        },
       studentName : {
            type: sequelize.STRING,
            allowNull: false,
        },
        email : {
            type: sequelize.STRING,
            allowNull: false,
            unique: true
        },
        contactNumber : {
            type: sequelize.STRING,
            allowNull: false,
        },
        gender : {
            type: sequelize.STRING,
            allowNull: false,
        },
        dateOfBirth : {
            type: sequelize.DATEONLY,
            allowNull: false,
        },
        createdAt : {
            type: sequelize.DATE,
            allowNull: true,
        },
        createdBy : {
            type: sequelize.STRING,
            allowNull: true,
        },
        updatedAt : {
            type: sequelize.DATE,
            allowNull: true,
        },
        updatedBy : {
            type: sequelize.STRING,
            allowNull: true,
        },
        deletedAt : {
            type: sequelize.DATE,
            allowNull: true,
        },
        deletedBy : {
            type: sequelize.STRING,
            allowNull: true,
        },

    },
    {sequelize: databaseInstance,
         tableName: 'students', 
         timestamps: true, paranoid: true
        }
         // here timestamps used for allow to create 2 fun createdAt and UpdatedAT
         // and paranoid true states it will do soft delete a column or table and only work when 
         // ts true >> 
);

Student.hasMany(Address, 
    {
        foreignKey: "studentId",
        onDelete: "CASCADE"
    });

export default Student;