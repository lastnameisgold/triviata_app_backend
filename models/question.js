'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Question.belongsTo(models.Quiz, {
        foreignKey: 'quizId'
      })
    }
  }
  Question.init({
    question: DataTypes.STRING,
    options: DataTypes.ARRAY(DataTypes.STRING),
    answer: DataTypes.STRING,
    category: DataTypes.STRING,
    difficulty: DataTypes.STRING,
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
      onDelete: 'CASCADE',
      references: {
        model: 'quizzes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions'
  });
  return Question;
};