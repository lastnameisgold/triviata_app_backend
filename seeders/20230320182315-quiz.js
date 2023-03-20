'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'quizzes',
      [
        {
          title: 'Geography Quiz 1',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Science Quiz 1',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        }     
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('quizzes', null, {})
  }
};
