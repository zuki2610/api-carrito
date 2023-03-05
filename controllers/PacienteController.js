const pacienteService = require('../services/PacienteService');

exports.getAllPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteService.getAllPacientes();
        res.json({ data: pacientes, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPaciente = async (req, res) => {
    try {
        console.log(req.body);
        const paciente = await pacienteService.createPaciente(req.body);
        res.json({ data: paciente, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPacienteById = async (req, res) => {
    try {
        const paciente = await pacienteService.getPacienteById(req.params.id);
        res.json({ data: paciente, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePaciente = async (req, res) => {
    try {
        const paciente = await pacienteService.updatePaciente(req.params.id, req.body);
        res.json({ data: paciente, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePaciente = async (req, res) => {
    try {
        const paciente = await pacienteService.deletePaciente(req.params.id);
        res.json({ data: paciente, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};