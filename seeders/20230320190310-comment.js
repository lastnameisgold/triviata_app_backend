'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          content: "This is the greatest quiz I've ever taken!",
          createdAt: new Date(),
          updatedAt: new Date(),
          quizId: 1,
          flashcardId: null,
          userId: 2
        },
        {
          content: "This flashcard helped me so much!!",
          createdAt: new Date(),
          updatedAt: new Date(),
          quizId: null,
          flashcardId: 2,
          userId: 2
        }     
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {})
  }
};
