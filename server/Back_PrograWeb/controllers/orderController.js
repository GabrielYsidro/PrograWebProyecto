const db = require('../models')


const createOrder = async (req,res) => {
    try {
    const { userId, totalAmount, status, shipping, payment } = req.body;

    if (!userId || !totalAmount || !shipping || !payment) {
      return res.status(400).json({ message: 'Faltan campos requeridos.' });
    }

    const nuevaOrden = await db.Order.create({
        user_id: userId,
        total_amount: totalAmount,
        status: status || 'pendiente',
        shipping_address: shipping,
        payment_method: payment 
    });

    res.status(201).json({
      message: 'Orden creada correctamente',
      order: nuevaOrden
    });

  } catch (error) {
    console.error('Error al crear la orden:', error);
    res.status(500).json({ message: 'Error del servidor al crear la orden.' });
  }
};


module.exports = {
    createOrder
}