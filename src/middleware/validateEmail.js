module.exports = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!email) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
);
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
);
  }

  return next();
};