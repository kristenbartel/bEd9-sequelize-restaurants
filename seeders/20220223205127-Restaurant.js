'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Restaurants', [{
      name: 'Burger Hut',
      address: '1000 Burger Lane',
      category: 'American',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
