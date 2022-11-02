import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Course } from './Course';
import { User } from './User';

export class Recipe extends Model
{
    declare id: number;
    declare name: string;
    declare slug: string;
    declare description: string;
    declare guests: number;
    declare user_id: number;
    declare created_at: Date;
    declare updated_at: Date;
}

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
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
    },
    idUsers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
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

Recipe.belongsTo(User, {foreignKey: "idUsers"});
User.hasOne(Recipe, {foreignKey: "idUsers"});