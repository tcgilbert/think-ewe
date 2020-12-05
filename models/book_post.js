'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.book_post.belongsTo(models.user);
    }
  };
  book_post.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    cover: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    blurb: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_post',
  });
  return book_post;
};