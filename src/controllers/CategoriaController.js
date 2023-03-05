const categoriaService = require("../services/CategoriaService");
 
exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.json({ data: categorias, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCategoria = async (req, res) => {
  try {
    console.log(req.body);
    const categoria = await categoriaService.createCategoria(req.body);
    res.json({ data: categoria, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await categoriaService.getCategoriaById(req.params.id);
    res.json({ data: categoria, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCategoria = async (req, res) => {
  try {
    const categoria = await categoriaService.updateCategoria(req.params.id, req.body);
    res.json({ data: categoria, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCategoria = async (req, res) => {
  try {
    const categoria = await categoriaService.deleteCategoria(req.params.id);
    res.json({ data: categoria, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};