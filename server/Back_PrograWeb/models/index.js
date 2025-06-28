const Sequelize = require('sequelize');
const sequelize = require('../config/db.js');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.User = require('./User')(sequelize, Sequelize.DataTypes);
db.Role = require('./Role')(sequelize, Sequelize.DataTypes);
db.Order = require('./Order')(sequelize, Sequelize.DataTypes);
db.Pokemon = require('./Pokemon')(sequelize, Sequelize.DataTypes);
db.Category = require('./Category')(sequelize, Sequelize.DataTypes);
db.Region = require('./Region')(sequelize, Sequelize.DataTypes);
db.Rarity = require('./Rarity')(sequelize, Sequelize.DataTypes);
db.OrderPokemon = require('./OrderPokemon')(sequelize, Sequelize.DataTypes);
db.WishlistPokemon = require('./WishlistPokemon.js')(sequelize, Sequelize.DataTypes);

// Relaciones USER - ROLE
db.User.belongsTo(db.Role, {
  foreignKey: 'role_id',
  as: 'role',
  onDelete: 'SET NULL',
});
db.Role.hasMany(db.User, {
  foreignKey: 'role_id',
  as: 'users',
});

// Relaciones ORDER - USER
db.Order.belongsTo(db.User, {
  foreignKey: 'user_id',
  as: 'user',
  onDelete: 'CASCADE',
});
db.User.hasMany(db.Order, {
  foreignKey: 'user_id',
  as: 'orders',
});

// Relaciones POKEMON - CATEGORY
db.Pokemon.belongsTo(db.Category, {
  foreignKey: 'category_id',
  as: 'categoryRef',
  onDelete: 'SET NULL',
});
db.Category.hasMany(db.Pokemon, {
  foreignKey: 'category_id',
  as: 'pokemones',
});

// Relaciones POKEMON - REGION
db.Pokemon.belongsTo(db.Region, {
  foreignKey: 'region_id',
  as: 'regionRef',
  onDelete: 'SET NULL',
});
db.Region.hasMany(db.Pokemon, {
  foreignKey: 'region_id',
  as: 'pokemones',
});

// Relaciones POKEMON - RARITY
db.Pokemon.belongsTo(db.Rarity, {
  foreignKey: 'rarity_id',
  as: 'rarityRef',
  onDelete: 'SET NULL',
});
db.Rarity.hasMany(db.Pokemon, {
  foreignKey: 'rarity_id',
  as: 'pokemones',
});

// Relaciones POKEMON - POKEMON (Evoluciones)
db.Pokemon.belongsTo(db.Pokemon, {
  foreignKey: 'evolutions_1',
  as: 'evolution1',
  onDelete: 'SET NULL',
});
db.Pokemon.belongsTo(db.Pokemon, {
  foreignKey: 'evolutions_2',
  as: 'evolution2',
  onDelete: 'SET NULL',
});

// Relaciones muchos-a-muchos ORDER <-> POKEMON vía OrderPokemon
db.Order.belongsToMany(db.Pokemon, {
  through: db.OrderPokemon,
  foreignKey: 'order_id',
  otherKey: 'pokemon_id',
  as: 'pokemones',
});

db.Pokemon.belongsToMany(db.Order, {
  through: db.OrderPokemon,
  foreignKey: 'pokemon_id',
  otherKey: 'order_id',
  as: 'orders',
});

// Relaciones directas ORDER <-> OrderPokemon
db.Order.hasMany(db.OrderPokemon, {
  foreignKey: 'order_id',
  as: 'detalles',
});
db.OrderPokemon.belongsTo(db.Order, {
  foreignKey: 'order_id',
  as: 'order',
});

// Relaciones directas POKEMON <-> OrderPokemon
db.Pokemon.hasMany(db.OrderPokemon, {
  foreignKey: 'pokemon_id',
  as: 'en_ordenes',
});
db.OrderPokemon.belongsTo(db.Pokemon, {
  foreignKey: 'pokemon_id',
  as: 'pokemon',
});

//Relacion asociativa user y Pokemon para wishlist
db.User.belongsToMany(db.Pokemon, {
  through: db.WishlistPokemon,
  foreignKey: 'user_id',
  otherKey: 'pokemon_id',
  as: 'wishlist',
});

db.Pokemon.belongsToMany(db.User, {
  through: db.WishlistPokemon,
  foreignKey: 'pokemon_id',
  otherKey: 'user_id',
  as: 'usuarios_que_lo_desean',
});


module.exports = db;
