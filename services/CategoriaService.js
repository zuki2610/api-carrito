const CategoriaModel = require("../models/Categoria");

exports.getAllCategorias = async () => {
  return await CategoriaModel.find();
};

exports.createCategoria = async (categoria) => {
  return await CategoriaModel.create(categoria);
};
exports.getCategoriaById = async (id) => {
  return await CategoriaModel.findById(id);
};

exports.getCategoriaNamesByIds = async (categoriaNames) => {
  console.log('categorias', categoriaNames);
  return await CategoriaModel.find( { name: { $in: categoriaNames } } ).distinct("_id").exec();
};

exports.updateCategoria = async (id, categoria) => {
  return await CategoriaModel.findByIdAndUpdate(id, categoria, { new: true });

};

exports.deleteCategoria = async (id) => {
  return await CategoriaModel.findByIdAndDelete(id);
};