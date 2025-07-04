const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Product.findAll();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear producto
router.post('/', async (req, res) => {
  try {
    const nuevo = await Product.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const producto = await Product.findByPk(req.params.id);
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;