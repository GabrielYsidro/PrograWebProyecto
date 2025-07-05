// models/WishlistPokemon.js
module.exports = (sequelize, DataTypes) => {
  const WishlistPokemon = sequelize.define('WishlistPokemon', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    pokemon_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  }, {
    tableName: 'wishlist_pokemon',
    timestamps: false,
  });

  return WishlistPokemon;
};
