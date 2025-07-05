// models/Category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  return Category;
};
