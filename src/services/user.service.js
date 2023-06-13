const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });
  return findUser;  
};

const createUser = async ({ displayName, email, password, image }) => {
  const userRegistered = await findByEmail(email);

  if (userRegistered) {
    return { error: 'User already registered' };
  }
  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken(newUser);
  return { newUser, token };
};  

module.exports = {
  getAllUsers,
  findByEmail,
  createUser,
};