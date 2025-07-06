const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js')


router.post('/create', orderController.createOrder);
router.get('/', orderController.getOrders); // Assuming you have a method to get all orders



module.exports = router;
