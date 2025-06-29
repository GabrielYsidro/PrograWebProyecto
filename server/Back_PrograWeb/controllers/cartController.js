const db = require('../models')

// Mostrar Carrito

const getCart = (req, res) => {
  console.log('📦 Getting cart from session:', req.session.cart);
  const cart = req.session.cart || [];
  res.status(200).json({ cart });
};

//Sync cart
const syncCart = (req, res) => {
  console.log('🔄 Syncing cart:', req.body.cart);
  req.session.cart = req.body.cart || [];
  console.log('🧠 Session cart saved:', req.session.cart); 
  res.status(200).json({ message: 'Carrito sincronizado con sesión' });
};


module.exports = {
  getCart,
  syncCart
};
