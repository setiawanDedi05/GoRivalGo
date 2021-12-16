'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gor.hasMany(models.Invitations, {foreignKey:'gorId'})
      Gor.hasMany(models.Player, {foreignKey:'gorId'})
    }
  };
  Gor.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    rent_price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : true,
        min: {
          args: 100000,
          msg : 'invalid price!, minimum 100000'
        }
      }
    },
    time_available: DataTypes.STRING,
    status:DataTypes.STRING,
    isOnline:DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(gor) {
        gor.isOnline = false
      }
    },
    sequelize,
    modelName: 'Gor',
  });
  return Gor;
};