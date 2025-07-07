const db = require('../models');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Busca el usuario por email
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
    // Compara la contraseña (en producción deberías usar bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
    // No envíes la contraseña al frontend
    const { password: _, ...userData } = user.toJSON();
    req.session.user = userData; // Guarda el usuario en la sesión
    return res.json({ user: userData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Devuelve el usuario de la sesión si está loggeado
const me = async (req, res) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({ error: 'No autenticado' });
  }
  // No envíes la contraseña al frontend
  const { password, ...userData } = req.session.user;
  return res.json({ user: userData });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al cerrar sesión' });
    }
    res.clearCookie('connect.sid'); // El nombre puede variar según la configuración de express-session
    return res.json({ message: 'Sesión cerrada correctamente' });
  });
};

module.exports = { login, me, logout };
