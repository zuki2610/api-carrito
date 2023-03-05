const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

// Función para guardar un usuario en la base de datos
exports.guardarUsuario = async (usuario) => {
  try {
    // Creamos una instancia del modelo Usuario con los datos recibidos
    const usuarioModel = new Usuario(usuario);

    // Guardamos el usuario en la base de datos
    await usuarioModel.save();

    // Si todo sale bien, devolvemos el usuario guardado en la base de datos
    return usuarioModel;
  } catch (error) {
    // Si hay algún error, lanzamos una excepción con el mensaje de error correspondiente
    throw new Error(`Error al guardar el usuario: ${error.message}`);
  }
};

// Función para iniciar sesión de un usuario
exports.loginUsuario = async (email, password) => {
  try {
    // Buscamos el usuario en la base de datos por su correo electrónico
    const usuarioEncontrado = await Usuario.findOne({ email });

    // Si no encontramos un usuario con el correo electrónico especificado, lanzamos una excepción
    if (!usuarioEncontrado) {
      throw new Error('Usuario no encontrado');
    }

    // Comparamos la contraseña ingresada con la contraseña cifrada del usuario
    const passwordMatch = await bcrypt.compare(password, usuarioEncontrado.password);

    // Si la contraseña ingresada no coincide con la contraseña cifrada del usuario, lanzamos una excepción
    if (!passwordMatch) {
      throw new Error('Contraseña incorrecta');
    }

    // Si la autenticación es exitosa, creamos un token JWT que contiene el correo electrónico del usuario
    const token = jwt.sign({ email: usuarioEncontrado.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Devolvemos un objeto que contiene el usuario y el token JWT
    return { usuario: usuarioEncontrado, token };
  } catch (error) {
    // Si hay algún error, lanzamos una excepción con el mensaje de error correspondiente
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};

// Función para obtener un usuario por su correo electrónico
exports.obtenerUsuarioPorEmail = async (email) => {
  try {
    // Buscamos el usuario en la base de datos por su correo electrónico
    const usuarioEncontrado = await Usuario.findOne({ email });
    // Si encontramos un usuario con el correo electrónico especificado, lo devolvemos
    return usuarioEncontrado;
  } catch (error) {
    // Si hay algún error, lanzamos una excepción con el mensaje de error correspondiente
    throw new Error(`Error al obtener el usuario: ${error.message}`);
  }
};
