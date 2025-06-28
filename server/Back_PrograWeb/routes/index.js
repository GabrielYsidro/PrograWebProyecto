const express = require('express');
const router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/db', async (req, res) => {
  try {
    const users = await db.User.findAll(); 
    res.json(users); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

router.get('/role', async (req, res) => {
  try {
    const roles = await db.Role.findAll()
    res.json(roles)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error en la DB')
  }
})

module.exports = router;
