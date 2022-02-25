'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviewers', [{
      name: 'John Doe',
      email: 'jd@email.com',
      karma: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviewers', null, {});
  }
};
