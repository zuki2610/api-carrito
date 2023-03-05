const Paciente = require('../models/Paciente');

exports.getAllPacientes = async () => {
    return await Paciente.find();
};

exports.createPaciente = async (paciente) => {
    return await Paciente.create(paciente);
};

exports.getPacienteById = async (id) => {
    return await Paciente.findById(id);
};

exports.updatePaciente = async (id, paciente) => {
    return await Paciente.findByIdAndUpdate(id, paciente, { new: true });
};

exports.deletePaciente = async (id) => {
    return await Paciente.findByIdAndDelete(id);
};

