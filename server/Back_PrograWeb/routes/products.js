const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js')

router.get('/', productController.getPokes);
router.get('/:id', productController.getPokeById);
router.post('/', productController.createPoke);
router.put('/:id', productController.updatePoke);


module.exports = router;