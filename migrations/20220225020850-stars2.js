'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addConstraint('Reviews',  {
        fields: ['stars'],
        type: 'check',
        name: 'star-check',
        where: {
          stars:[0,1,2,3,4,5]
      },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};
