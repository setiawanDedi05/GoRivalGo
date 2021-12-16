'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.Player, {foreignKey:'teamId'})
      Team.hasMany(models.Invitations, {foreignKey:'teamIdA'})
      Team.hasMany(models.Invitations, {foreignKey:'teamIdB'})
      Team.hasMany(models.Invitations, {foreignKey:'theWinnerId'})
    }
  };
  Team.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    status: DataTypes.STRING,
    isOnline: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(team) {
        team.isOnline = false
      }
    },
    sequelize,
    modelName: 'Team',
  });
  return Team;
};