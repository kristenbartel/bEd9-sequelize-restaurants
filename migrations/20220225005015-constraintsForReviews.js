'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addConstraint('Reviews', {
        fields: ['reviewer_id'],
        type: 'foreign key',
        name: 'reviewID_fkey',
        references: {
          table: 'Reviewers',
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

