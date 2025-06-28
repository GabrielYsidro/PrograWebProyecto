const { where } = require('../config/db');
const db = require('../models')

// Obtener todos los pokemones
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

// Obtener un pokemon por ID
const getPokeById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const pokemon = await db.Pokemon.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon no encontrado' });
    }

    res.status(200).json({ pokemon });
  } catch (error) {
    console.error('Error al obtener el pokemon:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//obtener todos los pokemones-paginacion
const getPokesPaginated = async (req, res) => {
  try{
    const { page = 1, limit = 10 } = req.query;
    const where = {};
    
    if(search){
      where.nombre = {[db.sequelize.Op.iLike]: `%${search}%`};
    }
    
    const pokemons = await db.Pokemon.findAll({
      where,
      limit: parseInt(limit),
      offset: (parseInt(page) - 1) * parseInt(limit),
    });

    res.status(200).json({ pokemons });
  }
  catch (error) {
    console.error('Error al obtener pokemones paginados:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//crear un nuevo pokemon
const createPoke = async (req, res) => {
  try {
    const nuevo = await db.Pokemon.create(req.body);
    res.status(201).json({ pokemon: nuevo });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pokemon' });
  }
};
//actualizar un pokemon por ID

const updatePoke = async (req,res) => {
  try {
    const {id} = req.params;
    const [updated] = await db.Pokemon.update(req.body, {where: {id}});
    if (!updated) return res.status(404).json({ error: 'Pokemon no encontrado' });
    const pokemon = await db.Pokemon.findByPk(id);
    res.status(200).json({ pokemon });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pokemon' });
  }
}

//cambiar estado(actualizar estado) de un pokemon por ID

const toggleActivo = async (req, res) => {
  try {
    const { id } = req.params;
    const {activo}= req.body;
    const [updated] = await db.Pokemon.update({ activo }, { where: { id } });
    if (!updated) return res.status(404).json({ error: 'Pokemon no encontrado' });
    const pokemon = await db.Pokemon.findByPk(id);
    res.status(200).json({ pokemon });
  } catch (error) {
    console.error('Error al cambiar el estado del pokemon:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = {getPokes,getPokeById,getPokesPaginated,createPoke,updatePoke,toggleActivo};
