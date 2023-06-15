const { Category, BlogPost, User } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }, 
    ],
  });

  return posts;
};

module.exports = {
  getAllPost,
};