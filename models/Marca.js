const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const marcaSchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Marca", marcaSchema);