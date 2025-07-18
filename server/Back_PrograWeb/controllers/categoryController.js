const db = require('../models')

function createCategoria(data) {

  return {
    name: data.name,
    color: data.color,
    emoji: data.emoji
  };
}

const getCategorias = async (req, res) => {
  try {
    const categorias = await db.Category.findAll();
    res.status(200).json({ categorias });
  } catch (error) {
    console.error('Error al obtener categorias:', error);
    res.status(500).json({ error: 'Error interno del servidor(GET)' });
  }
};

const postCategorias = async (req, res) => {
  try {
    const categoria = createCategoria(req.body);
    const newCategory = await db.Category.create(categoria);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error al crear categoria:', error);
    res.status(500).json({ error: 'Error interno del servidor(POST)' });
  }
};

const deleteCategorias = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.Category.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Categoría eliminada', id });
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar categoria:', error);
    res.status(500).json({ error: 'Error interno del servidor(DELETE)' });
  }
};

module.exports = {
  getCategorias,
  postCategorias,
  deleteCategorias
};