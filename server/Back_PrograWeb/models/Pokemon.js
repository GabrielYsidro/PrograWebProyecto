// models/Pokemon.js
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    rarity: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    evolutions_1: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    evolutions_2: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    rarity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  }, {
    tableName: 'pokemones',
    timestamps: false,
    underscored: true,
  });

  return Pokemon;
};
