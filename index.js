const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const marcaRouter = require('./routes/MarcaRoutes')
const categoriaRouter = require("./routes/CategoriaRoutes");
const medicinaRouter = require("./routes/MedicinaRoutes");
const usuarioRoutes = require('./routes/UsuarioRoutes');
const pacienteRoutes = require('./routes/PacienteRoutes');
const { requireAuth } = require("./middleware/AuthMiddleware");

require('dotenv').config();

const app = express();
 
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api/dermocosmetica/marcas", requireAuth, marcaRouter);
app.use("/api/dermocosmetica/categorias", requireAuth, categoriaRouter);
app.use("/api/dermocosmetica/medicinas", requireAuth, medicinaRouter);
app.use('/api/dermocosmetica/pacientes', requireAuth, pacienteRoutes);
app.use('/api/dermocosmetica/usuarios', usuarioRoutes);
// Agregar esta línea para servir los archivos estáticos de la carpeta uploads
app.use('/api/dermocosmetica/uploads', express.static('uploads'));

//conexion a la base de datos
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Base de datos conectada");
      }
    }
  );
//inicializar el servidor
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3001");
  console.log(process.env.PORT)
});
 
module.exports = app;
