'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.Reviewers, {
        foreignKey: 'reviewer_id',
        onDelete: 'CASCADE'
    });
      Reviews.belongsTo(models.Restaurants, {
      foreignKey: 'restaurant_id',
      onDelete: 'CASCADE'
  });
    }
  }
  Reviews.init({
    reviewer_id: DataTypes.INTEGER,
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
    }},
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};