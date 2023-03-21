'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'bookmarks',
      [
        {
          userId: 2,
          quizId: 1,
          flashcardId: null,
          questionId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          quizId: null,
          flashcardId: 1,
          questionId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }     
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('bookmarks', null, {})
  }
};
