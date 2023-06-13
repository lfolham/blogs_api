const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const objConfig = {
  algorithm: 'HS256',
};

const generateToken = ({ displayName, email, password, image }) => {
  const token = jwt
  .sign({ displayName, email, password, image }, JWT_SECRET, objConfig);
  return token;
};

const decodeToken = (token) => {
jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  decodeToken,
};