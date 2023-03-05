const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const medicinaSchema = new Schema({
  name: String,
  categoriaIds: [{ type: Schema.Types.ObjectId, ref: "categoria" }],
  marcaId: String,
  imagenUrl: String, 
  componente: [{ type: String}],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Medicina", medicinaSchema);