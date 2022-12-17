const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class post extends Model {}

post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        postTitle: {
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },
        postContent: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = post;