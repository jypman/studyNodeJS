'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await Promise.all([
        queryInterface.addColumn('Persons', 'userId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id'
          },
        }, { transaction: t }),
        queryInterface.addColumn('Persons', 'petName', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Persons', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    await  queryInterface.sequelize.transaction(async (t) => {
      await Promise.all([
        queryInterface.removeColumn('Persons', 'name', { transaction: t }),
        queryInterface.removeColumn('Persons', 'userId', { transaction: t }),
        queryInterface.removeColumn('Persons', 'petName', { transaction: t }),
        queryInterface.removeColumn('Persons', 'favoriteColor', { transaction: t }),
        queryInterface.dropTable('Persons',{transaction: t})
      ]);
    });
  }
};