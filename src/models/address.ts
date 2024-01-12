import sequelize from "sequelize";
import { Model, CreationOptional, ForeignKey } from "sequelize";
import databaseInstance from "../config/db";
import Student from "./student";

export interface AddressAttributes {
   studentId: string
    addressId?: string
    state: string
    city: string
    pincode: string
    createdAt?: Date
    createdBy: string
    updatedAt?: Date
    updatedBy: string
    deletedAt?: Date
    deletedBy: string
}  

class Address extends Model<AddressAttributes> {
    declare addressId: string
    declare studentId: ForeignKey<Student['studentId']>
    declare state: string
    declare city: string
    declare pincode: string
    declare createdAt: Date
    declare createdBy: string
    declare updatedAt: CreationOptional<Date>
    declare updatedBy: CreationOptional<string>
    declare deletedAt: CreationOptional<Date>
    declare deletedBy: CreationOptional<string>
}

Address.init(
    {
        addressId: {
            type: sequelize.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
       studentId: {
            type: sequelize.UUID,
            references: {
                model: {
                    tableName: 'students'
                },
                key:'studentId'
            },
            allowNull:false
        },
        state: {
            type: sequelize.STRING,
            allowNull : false
        },
        city: {
            type: sequelize.STRING,
            allowNull : false
        },
        pincode: {
            type: sequelize.STRING,
            allowNull : false
        },
        createdAt : {
            type: sequelize.DATE,
            allowNull: false,
        },
        createdBy : {
            type: sequelize.STRING,
            allowNull: false,
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
    {sequelize: databaseInstance, tableName: 'addresses', 
    timestamps: true, paranoid: true}
);

export default Address;
