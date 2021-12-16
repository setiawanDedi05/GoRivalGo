'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      city: {
        allowNull:false,
        type: Sequelize.STRING
      },
      rent_price: {
        type: Sequelize.INTEGER,
      },
      time_available: {
        type: Sequelize.STRING
      },
      status: {
        type:Sequelize.STRING
      },
      isOnline: {
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gors');
  }
};