// models/OrderPokemon.js
module.exports = (sequelize, DataTypes) => {
  const OrderPokemon = sequelize.define('OrderPokemon', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    pokemon_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  }, {
    tableName: 'order_items', // <- Nombre real en la BD
    timestamps: false,
    underscored: true,
  });

  return OrderPokemon;
};
