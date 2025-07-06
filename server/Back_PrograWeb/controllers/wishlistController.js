const db = require('../models')

const getWishlist =  async (req, res) => {
    const {id} = req.params

    try {
        const user = await db.User.findByPk(id, {
            include : {
                model: db.Pokemon,
                as: 'wishlist',
                attributes : ['id', 'name', 'price', 'img'],
                through: {attributes : []}
            },
        });

        if (!user) return res.status(404).json({message : 'Usuario no encontrado'})

        return res.json(user.wishlist);

    } catch (err) {
        console.error('Error al obtener wishlist:', err);
        return res.status(500).json({ message: 'Error del servidor' });
    }

}

// Agregar producto a wishlist
const addToWishlist = async (req, res) => {
  try {
    const { userId, pokemonId } = req.body;

    // Verificar que el usuario y el pokémon existen
    const user = await db.User.findByPk(userId);
    const pokemon = await db.Pokemon.findByPk(pokemonId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon no encontrado' });
    }

    // Verificar si ya está en la wishlist
    const existingWishlistItem = await db.WishlistPokemon.findOne({
      where: { user_id: userId, pokemon_id: pokemonId }
    });

    if (existingWishlistItem) {
      return res.status(400).json({ error: 'El pokémon ya está en la wishlist' });
    }

    // Agregar a la wishlist
    await db.WishlistPokemon.create({
      user_id: userId,
      pokemon_id: pokemonId
    });

    res.status(201).json({ 
      message: 'Pokémon agregado a la wishlist exitosamente',
      userId,
      pokemonId
    });
  } catch (error) {
    console.error('Error al agregar a wishlist:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar producto de wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const { userId, pokemonId } = req.body;

    const deleted = await db.WishlistPokemon.destroy({
      where: { user_id: userId, pokemon_id: pokemonId }
    });

    if (deleted) {
      res.status(200).json({ 
        message: 'Pokémon eliminado de la wishlist exitosamente',
        userId,
        pokemonId
      });
    } else {
      res.status(404).json({ error: 'Item no encontrado en la wishlist' });
    }
  } catch (error) {
    console.error('Error al eliminar de wishlist:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Verificar si un pokémon está en la wishlist
const isInWishlist = async (req, res) => {
  try {
    const { userId, pokemonId } = req.params;

    const wishlistItem = await db.WishlistPokemon.findOne({
      where: { user_id: userId, pokemon_id: pokemonId }
    });

    res.status(200).json({ isInWishlist: !!wishlistItem });
  } catch (error) {
    console.error('Error al verificar wishlist:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  isInWishlist
};
