const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoryController.js')


router.get('/', categoriaController.getCategorias);

module.exports = router;
