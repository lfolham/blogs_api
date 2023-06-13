const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const login = async ({ password, email }) => {
  if (!email || !password) {
    return { error: 'Some required fields are missing' };
  }
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { error: 'Invalid fields' };
  }

  const token = generateToken(user);
  return { user, token };
};

module.exports = {
  login,
};