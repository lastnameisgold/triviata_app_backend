'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Bookmark.belongsTo(models.Quiz, {
        foreignKey: 'quizId'
      })
      Bookmark.belongsTo(models.Flashcard, {
        foreignKey: 'flashcardId'
      })
      Bookmark.belongsTo(models.Question, {
        foreignKey: 'questionId'
      })
    }
  }
  Bookmark.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      references: {
        model: 'quizzes',
        key: 'id'
      }
    },
    flashcardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      references: {
        model: 'flashcards',
        key: 'id'
      }
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
    tableName: 'bookmarks'
  });
  return Bookmark;
};