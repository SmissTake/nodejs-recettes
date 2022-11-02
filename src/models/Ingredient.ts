import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'

export class Ingredient extends Model
{
    declare id: number;
    declare name: string;
}

Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 100,
        }
    },
},
{
    sequelize,
    tableName: "ingredients",
    timestamps: false
}
);