'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamIdA: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key:'id'
        }
      },
      teamIdB: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key:'id'
        }
      },
      gorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Gors',
          key:'id'
        }
      },
      theWinnerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key:'id'
        }
      },
      dateMatch: {
        allowNull: {
          args: false,
          msg: "Date Match required"
        },
        type: Sequelize.STRING
      },
      timeMatch: {
        allowNull: {
          args: false,
          msg: "Time Match required"
        },
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Invitations');
  }
};