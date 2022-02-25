'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addConstraint('Reviews', {
        fields: ['restaurant_id'],
        type: 'foreign key',
        name: 'restaurantID_fkey',
        references: {
          table: 'Restaurants',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};
