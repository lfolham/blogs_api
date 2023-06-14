module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',{
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    },
      {
        tableName: 'users_books',
        underscored: true,
        timestamps: false,
      },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};