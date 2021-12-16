'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invitations.belongsTo(models.Team, {foreignKey:'teamIdA', as:'teamA'})
      Invitations.belongsTo(models.Team, { foreignKey: 'teamIdB', as: 'teamB' })
      Invitations.belongsTo(models.Team, {foreignKey:'theWinnerId', as:'winner'})
      Invitations.belongsTo(models.Gor, {foreignKey:'gorId'})
    }
  };
  Invitations.init({
    teamIdA: DataTypes.INTEGER,
    teamIdB: DataTypes.INTEGER,
    gorId: DataTypes.INTEGER,
    theWinnerId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dateMatch: DataTypes.STRING,
    timeMatch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invitations',
  });
  return Invitations;
};