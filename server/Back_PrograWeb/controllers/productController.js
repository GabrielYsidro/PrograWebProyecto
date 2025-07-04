const db = require('../models')

const getPokes = async (req, res) => {
  try {
    const pokemons = await db.Pokemon.findAll({
      limit: 10
    });

    res.status(200).json({ pokemons });
  } catch (error) {
    console.error('Error al obtener pokemones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {getPokes}
