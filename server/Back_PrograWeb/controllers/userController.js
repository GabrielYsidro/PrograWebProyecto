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
            role: user.role?.role_name || 'User',
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
            name: user.name,
            email: user.email,
            active: user.active,
            password: user.password,
            address: user.address,
            phone_number: user.phone_number,
            role: user.role?.role_name || 2,
            fotoperfil: user.fotoperfil || 'https://res.cloudinary.com/dzqj1x3qk/image/upload/v1735686262/DefaultProfilePicture.png'
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
        role_id: 2,
        fotoperfil: data.fotoperfil || 'https://res.cloudinary.com/dzqj1x3qk/image/upload/v1735686262/DefaultProfilePicture.png'
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

const changePassword = async (req, res) => {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    try {
        const userId = Number(id);
        const user = await db.User.findByPk(userId);
        console.log('ID del usuario:', userId);
        console.log("newPassword:", newPassword);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado(al cambiar contraseña)' });
        }

        if (user.password !== currentPassword) {
            return res.status(400).json({ error: 'La contraseña actual es incorrecta.' });
        }

        await db.User.update(
            { password: newPassword },
            { where: { id: userId } }
        );

        res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        console.error('Error al cambiar la contraseña del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor al cambiar contraseña' });
    }
};

const recoverPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Buscar usuario por email
        const user = await db.User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'No existe un usuario con este correo electrónico' });
        }

        // Actualizar contraseña
        const [updated] = await db.User.update(
            { password: newPassword },
            { where: { email } }
        );

        if (updated) {
            res.status(200).json({ message: 'Contraseña recuperada exitosamente' });
        } else {
            res.status(500).json({ error: 'Error al actualizar la contraseña' });
        }
    } catch (error) {
        console.error('Error al recuperar la contraseña:', error);
        res.status(500).json({ error: 'Error interno del servidor al recuperar contraseña' });
    }
};

module.exports = {getUsers, getUserId, postUser, cambiarEstado, changePassword, recoverPassword};