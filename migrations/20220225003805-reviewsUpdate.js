'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      reviewer_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Reviewers",
          key: "id",
          as: "reviewer_id"
        }
      },
      stars: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
      }},
      title: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Restaurant",
          key: "id",
          as: "restaurant_id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};