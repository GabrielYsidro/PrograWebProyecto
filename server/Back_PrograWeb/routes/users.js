const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/userController.js')
/* GET users listing. */

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getUserId);
router.post('/', UsersController.postUser);
router.put('/:id', UsersController.cambiarEstado); //es solo "activo" o "inactivo"
router.put('/changepassword/:id', UsersController.changePassword);

module.exports = router;
