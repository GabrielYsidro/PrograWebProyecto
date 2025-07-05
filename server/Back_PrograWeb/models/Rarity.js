// models/Rarity.js
module.exports = (sequelize, DataTypes) => {
  const Rarity = sequelize.define('Rarity', {
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
  }, {
    tableName: 'rarities',
    timestamps: false,
  });

  return Rarity;
};
