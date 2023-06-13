const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });

if (token.error) {
    return res.status(400).json({ message: token.error });
  }

  return res.status(201).json(token);
};

module.exports = {
  createUser,
};