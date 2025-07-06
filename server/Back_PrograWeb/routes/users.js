const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/userController.js')
/* GET users listing. */

router.get('/', UsersController.getUsers);

module.exports = router;
