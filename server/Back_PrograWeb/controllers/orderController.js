const db = require('../models')

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
    res.status(500).json({ message: 'Error del servidor al crear la orden.' });
  }
};

const getOrders = async (req, res) => {
    try {
        const orders = await db.Order.findAll({
            include: [
                { model: db.User, as: 'user', attributes: ['name']}
            ],
            limit: 100000000
        });

        const ordersMapped = orders.map(order => ({
            id: order.id,
            customer: order.user.name,
            total: order.total_amount,
            status: order.status,
            direccionEnvio: order.shipping_address,
            metodoPago: order.payment_method,
            date: order.order_date
        }));

        res.status(200).json({ ordenes: ordersMapped });
    } catch (error) {
        console.error('Error al obtener órdenes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Cancelar una orden cambiando su estado a "cancelado"
const cancelOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await db.Order.findByPk(id, {
            include: [
                { model: db.User, as: 'user', attributes: ['name'] }
            ]
        });
        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }
        await order.update({ status: 'cancelado' });

        // Mapea la respuesta para el frontend, igual que en getOrders
        const orderMapeada = {
            id: order.id,
            customer: order.user.name,
            total: order.total_amount,
            status: 'cancelado',
            direccionEnvio: order.shipping_address,
            metodoPago: order.payment_method,
            date: order.order_date
        };

        res.status(200).json({ orden: orderMapeada });
    } catch (error) {
        console.error('Error al cancelar la orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getOrdersByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await db.Order.findAll({
            where: { user_id: userId },
            include: [
                { model: db.User, as: 'user', attributes: ['name'] }
            ],
            limit: 100000000
        });

        const ordersMapped = orders.map(order => ({
            id: order.id,
            customer: order.user.name,
            total: order.total_amount,
            status: order.status,
            direccionEnvio: order.shipping_address,
            metodoPago: order.payment_method,
            date: order.order_date
        }));

        res.status(200).json({ ordenes: ordersMapped });
    } catch (error) {
        console.error('Error al obtener órdenes del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    createOrder,
    getOrders,
    cancelOrder,
    getOrdersByUser
}
