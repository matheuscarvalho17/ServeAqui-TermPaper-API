'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Tables', [{
        name: 'A1',
        status: 'DISPONÍVEL',
        callWaiter: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A2',
        status: 'DISPONÍVEL',
        callWaiter: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A3',
        status: 'DISPONÍVEL',
        callWaiter: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A4',
        status: 'DISPONÍVEL',
        callWaiter: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A5',
        status: 'DISPONÍVEL',
        callWaiter: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
