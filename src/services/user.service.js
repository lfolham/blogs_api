const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const findByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });
  return findUser;  
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.createUser({ displayName, email, password, image });

  const token = generateToken(newUser);
  return token;
};  

module.exports = {
  findByEmail,
  createUser,
};