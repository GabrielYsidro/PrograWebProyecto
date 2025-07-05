const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

const app = express();

const allowedOrigins = [
  'http://127.0.0.1:3500',
  'https://gray-field-0a753370f.1.azurestaticapps.net'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true
}));

const isProd = true;

// Middlewares en orden correcto
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || 'ultra-secreto',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: isProd ? 'None' : 'lax',
    secure: isProd
  }
}));

// Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cartRouter = require('./routes/cart');
const pokeRouter = require('./routes/products');
const dashboardRouter = require('./routes/dashboard');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/pokes', pokeRouter);
app.use('/dashboard', dashboardRouter);

// Verificación de variables de entorno
app.get('/env', (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    ENV_SECRET: process.env.SESSION_SECRET,
  });
});

// 404 handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler con 4 parámetros
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
