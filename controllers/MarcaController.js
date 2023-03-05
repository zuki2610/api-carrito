const marcaService = require("../services/MarcaService");
 
exports.getAllMarcas = async (req, res) => {
  try {
    const marcas = await marcaService.getAllMarcas();
    res.json({ data: marcas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createMarca = async (req, res) => {
  try {
    console.log(req.body);
    const marca = await marcaService.createMarca(req.body);
    res.json({ data: marca, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getMarcaById = async (req, res) => {
  try {
    const marca = await marcaService.getMarcaById(req.params.id);
    res.json({ data: marca, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateMarca = async (req, res) => {
  try {
    const marca = await marcaService.updateMarca(req.params.id, req.body);
    res.json({ data: marca, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteMarca = async (req, res) => {
  try {
    const marca = await marcaService.deleteMarca(req.params.id);
    res.json({ data: marca, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};