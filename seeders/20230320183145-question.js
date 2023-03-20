'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'questions',
      [
        {
          question: 'What is the largest country in South America by area?',
          options: ['Bolivia','Brazil','Argentina','Peru'],
          answer: 'Brazil',
          category: 'Geography',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId:1
        },
        {
          question: 'What is the capital city of New Zealand?',
          options: ['Wellington','Christchurch','Queenstown','Auckland'],
          answer: 'Wellington',
          difficulty: 'Medium',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'Which river flows through Paris?',
          options: ['Seine','Loire','Rhine','Thames'],
          answer: 'Seine',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1 
        },
        {
          question: 'In which continent is the country of Liberia located?',
          options: ['Africa','South America','Asia','Europe'],
          answer: 'Africa',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'What is the highest mountain peak in North America?',
          options: ['Denali','Pico de Orizaba','Mount Logan','Mount Foraker'],
          answer: 'Denali',
          difficulty: 'Medium',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'Which African country has the largest land area?',
          options: ['Algeria','Sudan','DR Congo','South Africa'],
          answer: 'Algeria',
          difficulty: 'Medium',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'What is the smallest country in the world?',
          options: ['Vatican City','Monaco','Nauru','Lichtenstein'],
          answer: 'Vatican City',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'What is the name of the desert that covers most of northern Africa?',
          options: ['Sahara','Arabian','Gobi','Kalahari'],
          answer: 'Sahara',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'Which ocean is the largest by area?',
          options: ['Pacific','Atlantic','Indian','Arctic'],
          answer: 'Pacific',
          difficulty: 'Easy',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        },
        {
          question: 'What is the capital city of Switzerland?',
          options: ['Bern','Geneva','Zurich','Lausanne'],
          answer: 'Bern',
          difficulty: 'Hard',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          quizId: 1
        }                                
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('questions', null, {})
  }
};
