const { guardarUsuario, obtenerUsuarioPorEmail } = require('../services/UsuarioService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Funcion para manejar el registro de usuarios
exports.registrarUsuario = async (req, res) => {
  try {
    // Obtenemos los datos del usuario desde el request body que enviamos desde postman
    const { email, password, name } = req.body;

    // Revisamos si el email ya esta en uso
    const existingUser = await obtenerUsuarioPorEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
    }

    // Ciframos la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creamos un nuevo usuario
    const user = await guardarUsuario({ email, password: hashedPassword, name });

    // retornamos el usuario creado
    return res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    // Return an error message if something went wrong
    return res.status(500).json({ message: `Error al registrar el usuario: ${error.message}` });
  }
};

// Función para iniciar sesión
exports.iniciarSesion = async (req, res) => {
  try {
    // Obtenemos los datos del usuario desde el request body que enviamos desde postman
    const { email, password } = req.body;

    // Buscamos la informacion del usuario por el email y verificamos si existe
    const user = await obtenerUsuarioPorEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no existe' });
    }
    console.log('contraseña', password);
    console.log('user info', user);
    // Revisamos si la contraseña ingresada coincide con la contraseña cifrada del usuario
    const passwordMatches = await bcrypt.compare(password, user.password);
    console.log(passwordMatches);
    
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Creamos un token JWT que contiene el id del usuario
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2592000' });

    // Devolvemos el token como respuesta
    return res.status(200).json({ token });
  } catch (error) {
    // Devolvemos un error si ocurrio algo inesperado
    return res.status(500).json({ message: `Error al iniciar sesión: ${error.message}` });
  }
};
