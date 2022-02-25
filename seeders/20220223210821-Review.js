'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [{
      reviewer_id: 1,
      stars: 5,
      title: 'a sample title',
      review:'a sample review',
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Reviews', null, {});
  }
};
