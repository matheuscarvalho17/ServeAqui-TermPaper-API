'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      credential: '#81001473',
      password: 'strongpass123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      credential: '#81011420',
      password: 'notstrongpass',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      credential: '#123456',
      password: 'pass',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
