'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
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

    async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};