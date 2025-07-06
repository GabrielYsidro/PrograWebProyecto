const { Order, User } = require('../models');
const { Op } = require('sequelize');

exports.getDashboardStats = async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const today = new Date().toISOString().split('T')[0];

    // Estadísticas del día actual
    const statsActual = await getStatsForDate(today);

    // Estadísticas del rango analizado
    let statsAnalizado;
    if (fechaInicio && fechaFin) {
      statsAnalizado = await getStatsForRange(fechaInicio, fechaFin);
    } else if (fechaInicio) {
      statsAnalizado = await getStatsForDate(fechaInicio);
    } else {
      statsAnalizado = { totalOrders: 0, newUsers: 0, totalRevenue: 0 };
    }

    res.json({ statsActual, statsAnalizado });
  } catch (err) {
    console.error('Error en getDashboardStats:', err); // <--- AGREGA ESTE LOG
    res.status(500).json({ error: err.message });
  }
};

async function getStatsForDate(date) {
  const start = new Date(date);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const totalOrders = await Order.count({
    where: { order_date: { [Op.gte]: start, [Op.lt]: end } }
  });
  const totalRevenue = await Order.sum('total_amount', {
    where: { order_date: { [Op.gte]: start, [Op.lt]: end } }
  });
  const newUsers = await User.count({
    where: { created_at: { [Op.gte]: start, [Op.lt]: end } }
  });
  return {
    totalOrders,
    totalRevenue: totalRevenue || 0,
    newUsers
  };
}

async function getStatsForRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  end.setDate(end.getDate() + 1);

  const totalOrders = await Order.count({
    where: { order_date: { [Op.gte]: start, [Op.lt]: end } }
  });
  const totalRevenue = await Order.sum('total_amount', {
    where: { order_date: { [Op.gte]: start, [Op.lt]: end } }
  });
  const newUsers = await User.count({
    where: { created_at: { [Op.gte]: start, [Op.lt]: end } }
  });
  return {
    totalOrders,
    totalRevenue: totalRevenue || 0,
    newUsers
  };
}