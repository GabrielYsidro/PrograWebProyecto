const { where } = require('../config/db');
const db = require('../models')

// Obtener todos los pokemones

const getPokes = async (req, res) => {
  try {
    const pokemons = await db.Pokemon.findAll({
      include: [
        { model: db.Category, as: 'categoryRef', attributes: ['name'] },
        { model: db.Region, as: 'regionRef', attributes: ['name'] },
        { model: db.Rarity, as: 'rarityRef', attributes: ['name'] }
      ],
      limit: 100000000
    });

    const pokemonsMapeados = pokemons.map(pokemon => ({
      id: pokemon.id,
      nombre: pokemon.name,
      precio: parseFloat(pokemon.price) || 0,
      imagen: pokemon.img,
      descripcion: pokemon.description,
      stock: pokemon.stock,
      categoria: pokemon.categoryRef?.name || 'Sin categoría',
      region: pokemon.regionRef?.name || 'Sin región',
      rareza: pokemon.rarityRef?.name || 'Común',
      activo: pokemon.active,
      quantity: pokemon.quantity || 1
    }));

    res.status(200).json({ pokemons: pokemonsMapeados });
  } catch (error) {
    console.error('Error al obtener pokemones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



// Obtener un pokemon por ID
const getPokeById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const pokemon = await db.Pokemon.findByPk(id, {
      include: [
        { model: db.Category, as: 'categoryRef', attributes: ['name'] },
        { model: db.Region, as: 'regionRef', attributes: ['name'] },
        { model: db.Rarity, as: 'rarityRef', attributes: ['name'] }
      ]
    });

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon no encontrado' });
    }

    // 🔥 MAPEAR respuesta
    const pokemonMapeado = {
      id: pokemon.id,
      nombre: pokemon.name,
      precio: parseFloat(pokemon.price) || 0,
      imagen: pokemon.img,
      descripcion: pokemon.description,
      stock: pokemon.stock,
      categoria: pokemon.categoryRef?.name || 'Sin categoría',
      region: pokemon.regionRef?.name || 'Sin región',
      rareza: pokemon.rarityRef?.name || 'Común',
      activo: pokemon.active,
      quantity: pokemon.quantity
    };

    res.status(200).json({ pokemon: pokemonMapeado });
  } catch (error) {
    console.error('Error al obtener el pokemon:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//crear un nuevo pokemon
const createPoke = async (req, res) => {
  try {
    // 🔥 MAPEAR campos del frontend a la BD
    const datosParaBD = {
      id: req.body.id,                      // id → id
      name: req.body.nombre,                // nombre → name
      price: req.body.precio,               // precio → price
      img: req.body.imagen,                 // imagen → img
      description: req.body.descripcion,    // descripcion → description
      stock: req.body.stock || 0,
      active: req.body.activo !== undefined ? req.body.activo : true, // activo → active
      category_id: req.body.categoria_id,   // categoria_id → category_id
      region_id: req.body.region_id,
      rarity_id: req.body.rareza_id,        // rareza_id → rarity_id
      quantity: req.body.quantity || 1
    };

    console.log('📦 Datos para crear:', datosParaBD);
    
    const nuevo = await db.Pokemon.create(datosParaBD);
    
    // 🔥 MAPEAR respuesta de BD a frontend
    const pokemonMapeado = {
      id: nuevo.id,
      nombre: nuevo.name,                    // name → nombre
      precio: parseFloat(nuevo.price) || 0,  // price → precio
      imagen: nuevo.img,                     // img → imagen
      descripcion: nuevo.description,        // description → descripcion
      stock: nuevo.stock,
      activo: nuevo.active,                  // active → activo
      quantity: nuevo.quantity
    };

    res.status(201).json({ pokemon: pokemonMapeado });
  } catch (error) {
    console.error('❌ Error al crear pokemon:', error);
    res.status(500).json({ error: 'Error al crear el pokemon' });
  }
};

//actualizar un pokemon por ID

const updatePoke = async (req, res) => {
  try {
    const { id } = req.params;
    
    // 🔥 MAPEAR campos del frontend a la BD
    const datosParaBD = {};
    if (req.body.nombre) datosParaBD.name = req.body.nombre;
    if (req.body.precio) datosParaBD.price = req.body.precio;
    if (req.body.imagen) datosParaBD.img = req.body.imagen;
    if (req.body.descripcion) datosParaBD.description = req.body.descripcion;
    if (req.body.stock !== undefined) datosParaBD.stock = req.body.stock;
    if (req.body.activo !== undefined) datosParaBD.active = req.body.activo; // activo → active
    if (req.body.categoria_id) datosParaBD.category_id = req.body.categoria_id;
    if (req.body.region_id) datosParaBD.region_id = req.body.region_id;
    if (req.body.rareza_id) datosParaBD.rarity_id = req.body.rareza_id;

    const [updated] = await db.Pokemon.update(datosParaBD, { where: { id } });
    
    if (!updated) {
      return res.status(404).json({ error: 'Pokemon no encontrado' });
    }

    const pokemon = await db.Pokemon.findByPk(id, {
      include: [
        { model: db.Category, as: 'categoryRef', attributes: ['name'] },
        { model: db.Region, as: 'regionRef', attributes: ['name'] },
        { model: db.Rarity, as: 'rarityRef', attributes: ['name'] }
      ]
    });

    // 🔥 MAPEAR respuesta
    const pokemonMapeado = {
      id: pokemon.id,
      nombre: pokemon.name,
      precio: parseFloat(pokemon.price) || 0,
      imagen: pokemon.img,
      descripcion: pokemon.description,
      stock: pokemon.stock,
      categoria: pokemon.categoryRef?.name || 'Sin categoría',
      region: pokemon.regionRef?.name || 'Sin región',
      rareza: pokemon.rarityRef?.name || 'Común',
      activo: pokemon.active,
      quantity: pokemon.quantity
    };

    res.status(200).json({ pokemon: pokemonMapeado });
  } catch (error) {
    console.error('Error al actualizar pokemon:', error);
    res.status(500).json({ error: 'Error al actualizar el pokemon' });
  }
};

//cambiar estado(actualizar estado) de un pokemon por ID
/*
const toggleActivo = async (req, res) => {
  try {
    const { id } = req.params;
    //primero con el id buscar pokemon
    //mirar su estado actual "active"
    //despues invertir el estado
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
*/

module.exports = {getPokes,getPokeById,createPoke,updatePoke};
