'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.removeIndex('Reviews', 
        'starValue')
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};
