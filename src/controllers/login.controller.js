const loginService = require('../services/login.services');

const login = async (req, res) => {
  const { password, email } = req.body;
  const token = await loginService.login({ email, password });

  if (token.error) {
    return res.status(400).json({ message: token.error });
  }

  return res.status(200).json(token);
};

module.exports = {
  login,
};