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
    return res.json({ user: userData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { login };
