'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('post_categories', {
      post_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('post_categories');
  }
};