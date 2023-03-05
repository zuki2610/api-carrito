const medicinaService = require("../services/MedicinaService");
const categoriaService = require("../services/CategoriaService");
 
exports.getAllMedicinas = async (req, res) => {
  try {
    const medicinas = await medicinaService.getAllMedicinas();
    res.json({ data: medicinas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message, method: 'getAllMedicinas' });
  }
};
 
exports.createMedicina = async (req, res) => {
  try {
    console.log(req.body);
    const categoryNames = req.body.categoriaNames;
    console.log('nombres de categoria en request body: ', categoryNames, 'tipo de dato ', typeof categoryNames);
    
    const categoriaIds = await categoriaService.getCategoriaNamesByIds(JSON.parse(categoryNames));
    console.log('categorias encontradas: ', categoriaIds);

    const file = req.file;
    const imagePath = `uploads/${req.file.filename}`;

    // Construir la URL del archivo
    const imagenUrl = `${req.protocol}://${req.get('host')}/api/dermocosmetica/${imagePath}`;

    // console.log(file);
    
    const data = {
      name: req.body.name,
      marcaId: req.body.marcaId,
      categoriaIds,
      componente: req.body.componente,
      imagenUrl,
    };
    
    const medicina = await medicinaService.createMedicina(data);
    res.json({ data: medicina, status: "success", method: 'createMedicina' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getMedicinaById = async (req, res) => {
  try {
    const medicina = await medicinaService.getMedicinaById(req.params.id);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message, method: 'getMedicinaById' });
  }
};
 
exports.updateMedicina = async (req, res) => {
  try {
    console.log(req.body);
    const categoryNames = req.body.categoriaNames;
    console.log('nombres de categoria en request body: ', categoryNames);
    
    const categoriaIds = await categoriaService.getCategoriaNamesByIds(JSON.parse(categoryNames));
    console.log('categorias encontradas: ', categoriaIds);
    
    const data = {
      name: req.body.name,
      marcaId: req.body.marcaId,
      categoriaIds,
      componente: req.body.componente,
      imagenUrl: req.body.imagenUrl,
    };
    
    const medicina = await medicinaService.updateMedicina(req.params.id, data);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message, method: 'updateMedicina' });
  }
};
 
exports.deleteMedicina = async (req, res) => {
  try {
    const medicina = await medicinaService.deleteMedicina(req.params.id);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message, method: 'deleteMedicina' });
  }
};

exports.getMedicinasByCategorias = async (req, res) => {
  try {
    const data = req.query.nombresCategorias.split(',');
    console.log('nombres de categorias: ', data);
    const categoriaIds = await categoriaService.getCategoriaNamesByIds(data);
    console.log('categorias encontradas: ', categoriaIds);
    const medicinas = await medicinaService.getMedicinasByCategoriaIds(categoriaIds);
    res.json({ data: medicinas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message, method: 'getMedicinasByCategorias' });
  }
};