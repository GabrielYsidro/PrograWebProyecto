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
            name: user.name,
            email: user.email,
            active: user.active,
            password: user.password,
            address: user.address,
            phone_number: user.phone_number,
            role: user.role?.role_name || 'Sin rol',
            fotoperfil: user.fotoperfil
        }));
        res.status(200).json({ usuarios: usuariosMapeados });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getUserId = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await db.User.findByPk(id, {
            include: [
                { model: db.Role, as: 'role', attributes: ['role_name'] }
            ]
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuario = {
            id: user.id,
            name: user.name,
            email: user.email,
            active: user.active,
            password: user.password,
            address: user.address,
            phone_number: user.phone_number,
            role: user.role?.role_name || 'Sin rol',
            fotoperfil: user.fotoperfil
        };

        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor(GetUserID)' });
    }
};

const createUser = (data) => {
    return {
        name: data.name,
        email: data.email,
        active: data.active,
        password: data.password,
        address: data.address,
        phone_number: data.phone_number,
        roleId: data.roleId,
        fotoperfil: data.fotoperfil
    };
};

const postUser = async (req, res) => {
    const userData = createUser(req.body);
    try {
        const newUser = await db.User.create(userData);
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor al crear usuario' });
    }
};

const cambiarEstado = async (req, res) => {
    const { id } = req.params;
    const { active } = req.body;

    try {
        const userId = Number(id); // <-- convierte a número
        const [updated] = await db.User.update(
            { active },
            { where: { id: userId } }
        );

        if (updated) {
            const updatedUser = await db.User.findByPk(userId);
            res.status(200).json({ message: 'Estado de usuario actualizado exitosamente', user: updatedUser });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor al actualizar estado de usuario' });
    }
};

module.exports = {getUsers, getUserId, postUser, cambiarEstado};