const db = require('../models')

// Mostrar Categorias

const getCategorias = async (req, res) => {
  try {
    const categorias = await db.Category.findAll({
    });

    res.status(200).json({ categorias });
  } catch (error) {
    console.error('Error al obtener categorias:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getCategorias,
};