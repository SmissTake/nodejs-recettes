import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Recipe } from './Recipe';
//import { User } from './User';

export class Course extends Model
{
    declare id: number;
    declare menu: string;
}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    menu: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize,
    tableName: "courses",
    timestamps: false
}
);