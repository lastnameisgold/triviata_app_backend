'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'flashcards',
      [
        {
          term: 'What is a variable?',
          answer: 'Container for a piece of data',
          likes: 0, 
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          term: 'What does HTML stand for?',
          answer: 'Hypertext Markup Language',
          likes: 0, 
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        }     
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('flashcards', null, {})
  }
};
