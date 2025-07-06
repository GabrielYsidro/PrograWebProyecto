const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/wishlistController.js')

router.get('/:id', WishlistController.getWishlist);

module.exports = router;