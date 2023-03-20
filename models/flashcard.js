'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flashcard.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Flashcard.init({
    term: DataTypes.STRING,
    answer: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Flashcard',
    tableName: 'flashcards'
  });
  return Flashcard;
};