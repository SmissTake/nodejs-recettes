import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Permission } from './Permission';

export class User extends Model
{
    public id!: number;
    public lastname!: string;
    public firstname!: string;
    public mail!: string;
    public password! : string;
    public idPermissions! : number;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastname: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    idPermissions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id',
               }
    }
},
{
    sequelize,
    tableName: "users",
}
);

User.belongsTo(Permission, {foreignKey: "idPermissions"});
Permission.hasOne(User, {foreignKey: "idPermissions"});