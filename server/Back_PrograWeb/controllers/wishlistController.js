const db = require('../models')

const getWishlist =  async (req, res) => {
    const {id} = req.params

    try {
        const user = await db.User.findByPk(id, {
            include : {
                model: db.Pokemon,
                as: 'wishlist',
                attributes : ['id', 'name', 'price', 'img'],
                through: {attributes : []}
            },
        });

        if (!user) return res.status(404).json({message : 'Usuario no encontrado'})

        return res.json(user.wishlist);

    } catch (err) {
        console.error('Error al obtener wishlist:', err);
        return res.status(500).json({ message: 'Error del servidor' });
    }

}

module.exports = {getWishlist};