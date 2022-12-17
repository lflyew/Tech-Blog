const { Model, DataTypes } = require ('sequelize');

const sequelize = require('../config/config');

class comment extends Model {}

comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        commentContent: {
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
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'comment',
    }
);
module.exports = comment;