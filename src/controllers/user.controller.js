const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();
  res.status(200).json(result);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });

if (token.error) {
    return res.status(409).json({ message: token.error });
  }

  return res.status(201).json(token);
};

module.exports = {
  getAllUsers,
  createUser,
};