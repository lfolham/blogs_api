const { Category } = require('../models');

const getAllCategories = async () => {
  const users = await Category.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const createTable = async ({ name }) => {
  if (!name) {
    return { error: '"name" is required' };
  }
  
  const newTable = await Category.create({ name });
  return newTable;
};

module.exports = {
  getAllCategories,
  createTable,
};