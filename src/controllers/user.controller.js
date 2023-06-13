const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const user = await userService.getAllUsers();
  res.status(200).json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  return res.status(200).json(user);
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
  getUserById,
  createUser,
};