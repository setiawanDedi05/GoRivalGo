const {hashPassword} = require("../helper/bcrypt")
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.Team, { foreignKey:'teamId'})
      Player.belongsTo(models.Gor, { foreignKey:'gorId'})

    }
  };
  Player.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg:'Email Already Exist'
      },
      validate: {
        isEmail : true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          args: true,
          msg: "Required"
        },
        notEmpty: {
          args: true,
          msg: "Required"
        }
      }
    },
    date_of_birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    gorId: DataTypes.INTEGER,
    role: DataTypes.STRING,
    status:DataTypes.STRING,
    isOnline:DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
        if (!user.role) {
          user.role = 'staff'
        }
        user.isOnline = false
      },
      beforeUpdate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'Player',
  });
  return Player;
};