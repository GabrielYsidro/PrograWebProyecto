const db = require('../models');

const createOrder = async (req, res) => {
  const { userId, totalAmount, status, shipping, payment, items } = req.body;

  if (!userId || !totalAmount || !shipping || !payment || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Faltan campos requeridos o items vacíos.' });
  }

  const t = await db.sequelize.transaction();

  try {
    // 1. Crear la orden principal
    const nuevaOrden = await db.Order.create({
      user_id: userId,
      total_amount: totalAmount,
      status: status || 'pendiente',
      shipping_address: shipping,
      payment_method: payment
    }, { transaction: t });

    // 2. Crear detalles de orden en OrderPokemon
    const detallesOrden = items.map(item => ({
      order_id: nuevaOrden.id,
      pokemon_id: item.pokemon_id,
      quantity: item.quantity
    }));

    await db.OrderPokemon.bulkCreate(detallesOrden, { transaction: t });

    // 3. Confirmar transacción
    await t.commit();

    res.status(201).json({
      message: 'Orden creada correctamente con detalles',
      order: nuevaOrden
    });

  } catch (error) {
    await t.rollback();
    console.error('Error al crear la orden:', error);
    res.status(500).json({ message: 'Error del servidor al crear la orden.' });
  }
};


module.exports = {
  createOrder
};
