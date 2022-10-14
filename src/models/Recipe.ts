import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Course } from './Course';

export class Recipe extends Model
{
    public id!: number;
    public name!: string;
    public slug!: string;
    public description!: string;
    public guests! : number;
    public user_id! : number;
    public created_at! : Date;
    public updated_at! : Date;
}

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    slug: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    guests: {
        type: DataTypes.INTEGER,
    },
    idCourses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id',
               }
    }
},
{
    sequelize,
    tableName: "recipes",
    createdAt: "created_at",
    updatedAt: "updated_at",
}
);

Recipe.belongsTo(Course, {foreignKey: "idCourses"});
Course.hasOne(Recipe, {foreignKey: "idCourses"});