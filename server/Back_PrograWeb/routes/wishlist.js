const express = require('express');
const router = express.Router();

const { 
  getWishlist, 
  addToWishlist, 
  removeFromWishlist, 
  isInWishlist 
} = require('../controllers/wishlistController');


router.get('/:id', getWishlist);

// POST /wishlist - Agregar producto a wishlist
router.post('/', addToWishlist);

// DELETE /wishlist - Eliminar producto de wishlist
router.delete('/', removeFromWishlist);

// GET /wishlist/:userId/:pokemonId - Verificar si está en wishlist
router.get('/:userId/:pokemonId', isInWishlist);

module.exports = router;
