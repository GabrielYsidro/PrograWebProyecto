const db = require('../models')

// Mostrar Carrito

const getCart = (req, res) => {
  const cart = req.session.cart || [];
  res.status(200).json({ cart });
};

//Sync cart
const syncCart = (req, res) => {
  req.session.cart = req.body.cart || [];
  res.status(200).json({ message: 'Carrito sincronizado con sesión' });
};


module.exports = {
  getCart,
  syncCart
};
