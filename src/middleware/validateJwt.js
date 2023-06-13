const { generateToken } = require('../utils/jwt');

const validateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validation = generateToken(token);

  if (!validation) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  validateJWT,
};