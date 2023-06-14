const categoryService = require('../services/categories.service');

const getAllCategories = async (_req, res) => {
  const user = await categoryService.getAllUsers();
  res.status(200).json(user);
};

const createTable = async (req, res) => {
  const { name } = req.body;
  const newTable = await categoryService.createTable({ name });

  if (name.error) {
    return res.status(400).json({ message: name.error });
  }
  return res.status(201).json(newTable);
};

module.exports = {
  getAllCategories,
  createTable,
};