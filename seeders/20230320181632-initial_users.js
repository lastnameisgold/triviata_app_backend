'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@fake.com',
          passwordDigest: 'admin123',
          profilePicture: 'https://cdn0.iconfinder.com/data/icons/basic-ui-element-s94-2/64/Basic_UI_Icon_Pack_-_Outline_user-512.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'admin2',
          email: 'admin2@fake.com',
          passwordDigest: 'admin2123',
          profilePicture: 'https://cdn0.iconfinder.com/data/icons/basic-ui-element-s94-2/64/Basic_UI_Icon_Pack_-_Outline_user-512.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }     
      ]
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
