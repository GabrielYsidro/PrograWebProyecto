const db = require('../models')

// Obtener todos los usuarios

const getUsers = async (req, res) => {
    try {
        const users = await db.User.findAll({
            include: [
                { model: db.Role, as: 'role', attributes: ['role_name'] }
            ],
            limit: 100000000
        });

        const usuariosMapeados = users.map(user => ({
            id: user.id,
            nombre: user.name,
            email: user.email,
            activo: user.active,
            contraseña: user.password,
            direccion: user.address,
            telefono: user.phone_number,
            rol: user.role?.role_name || 'Sin rol',
            fotoPerfil: user.fotoperfil
        }));
        res.status(200).json({ usuarios: usuariosMapeados });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {getUsers};