const categoryService = require('../services/categories.service');

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};

const createTable = async (req, res) => {
  const { name } = req.body;
  const newTable = await categoryService.createTable({ name });

  if (newTable.error) {
    return res.status(400).json({ message: newTable.error });
  }
  return res.status(201).json(newTable);
};

module.exports = {
  getAllCategories,
  createTable,
};