const MarcaModel = require("../models/Marca");

exports.getAllMarcas = async () => {
  return await MarcaModel.find();
};

exports.createMarca = async (marca) => {
  return await MarcaModel.create(marca);
};
exports.getMarcaById = async (id) => {
  return await MarcaModel.findById(id);
};

exports.updateMarca = async (id, marca) => {
  return await MarcaModel.findByIdAndUpdate(id, marca, { new: true });

};

exports.deleteMarca = async (id) => {
  return await MarcaModel.findByIdAndDelete(id);
};