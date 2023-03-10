const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blog extends Model {}

blog.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = blog;
