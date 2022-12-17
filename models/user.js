const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');


class user extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);

    }


}

user.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },

        },
        {
            hooks: {
                beforeCreate: async (newUserData) => {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                },
                beforeUpdate: async (updateUserData) => {
                    updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
                    
                    return updateUserData;
                },
            },
                sequelize,
                timestamps: false,
                freezeTableName: true,
                underscored: true,
                modelName: 'user',
            });

   module.exports = user;