'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: {
          args: false,
          msg: "Name required"
        },
        type: Sequelize.STRING
      },
      city: {
        allowNull: {
          args: false,
          msg: "City required"
        },
        type: Sequelize.STRING
      },
      username: {
        allowNull: {
          args: false,
          msg: "username required"
        },
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        allowNull: {
          args: false,
          msg: "Email required"
        },
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        min: {
          args: [8],
          msg:"Minimum 4 characters required in password"
        }
      },
      date_of_birth: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'Teams',
          key:'id'
        }
      },
      gorId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'Gors',
          key:'id'
        }
      },
      role: {
        type: Sequelize.STRING
      },
      status: {
        type:Sequelize.STRING
      },
      isOnline:{
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
    await queryInterface.dropTable('Players');
  }
};