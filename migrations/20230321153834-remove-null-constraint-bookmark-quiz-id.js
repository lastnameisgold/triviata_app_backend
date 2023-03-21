'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('bookmarks', 'quizId', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('bookmarks', 'quizId', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};
