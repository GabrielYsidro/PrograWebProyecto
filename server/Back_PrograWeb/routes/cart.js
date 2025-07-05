const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js')

// GET /cart
router.get('/', cartController.getCart);

// POST /cart/sync
router.post('/sync', cartController.syncCart);

module.exports = router;
