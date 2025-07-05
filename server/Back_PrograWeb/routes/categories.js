const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoryController.js')


router.get('/', categoriaController.getCategorias);
router.post('/', categoriaController.postCategorias);
router.delete('/:id', categoriaController.deleteCategorias);

module.exports = router;
