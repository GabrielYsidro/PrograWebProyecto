const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js')


router.post('/create', orderController.createOrder);
router.get('/', orderController.getOrders); // Assuming you have a method to get all orders
router.put('/:id/cancel', orderController.cancelOrder); // Assuming you have a method to cancel an order by ID
router.get('/UserOrders/:userId', orderController.getOrdersByUser); // Assuming you have a method to get orders by user ID
router.get('/OrderDetails/:orderId', orderController.getOrderDetails);// Assuming you have a method to get order details by ID
module.exports = router;
