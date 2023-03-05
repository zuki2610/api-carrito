const express = require('express');
const usuarioController = require('../controllers/UsuarioController');

// Creamos un enrutador para manejar las rutas relacionadas con el recurso "usuario"
const router = express.Router();

// Definimos las rutas y los controladores correspondientes
router.post('/crear-cuenta', usuarioController.registrarUsuario);
router.post('/iniciar-sesion', usuarioController.iniciarSesion);

module.exports = router;
