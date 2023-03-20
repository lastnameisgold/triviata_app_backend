'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('questions', 'quizId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'quizzes',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('questions', 'quizId')
  }
};
