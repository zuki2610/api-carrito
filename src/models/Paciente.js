const { default: mongoose } = require("mongoose");

const pacienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    rut: { type: Number, required: true },
    telefono: { type: Number, required: false },
    email: { type: String, required: true, unique: true },
    domicilio: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    patologia: { type: String, required: true },
    sexo: { type: String, required: false },
    estadoCivil: { type: String, required: false },
    ocupacion: { type: String, required: false },
    antecedentes: { type: String, required: false },
    alergias: { type: String, required: false },
    medicamentos: { type: String, required: false },
    enfermedades: { type: String, required: false },
    cirugias: { type: String, required: false },
    habitos: { type: String, required: false },
    observaciones: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});