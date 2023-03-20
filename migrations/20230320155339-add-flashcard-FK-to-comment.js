'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('comments', 'flashcardId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'flashcards',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('comments', 'flashcardId')
  }
};
