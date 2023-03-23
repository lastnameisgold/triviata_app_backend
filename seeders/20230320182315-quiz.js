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
          title: 'Geography Quiz 2',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Trivia Challenge',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Pop Culture Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'History Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Science Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Movie Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Game of Thrones Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'The Last of Us Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Sports Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Food and Drink Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Celebrity Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Literature Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Art and Culture Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Mythology Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Harry Potter Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Disney Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Marvel Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'DC Comics Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Video Game Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Animal Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Nature Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Holiday Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Grammar Quiz',
          category: 'Geography',
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: 'Mathematics Quiz',
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
