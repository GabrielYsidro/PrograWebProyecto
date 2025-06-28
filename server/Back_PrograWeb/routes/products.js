const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js')

router.get('/', productController.getPokes);
router.get('/:id', productController.getPokeById);
router.get('/paginated', productController.getPokesPaginated);
router.post('/', productController.createPoke);
router.put('/:id', productController.updatePoke);
router.put('/:id/toggle', productController.toggleActivo);


module.exports = router;