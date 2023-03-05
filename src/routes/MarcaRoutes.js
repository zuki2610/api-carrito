const express = require("express");
const {
  getAllMarcas,
  createMarca,
  getMarcaById,
  updateMarca,
  deleteMarca,
} = require("../controllers/MarcaController");
 
const router = express.Router();
 
router.route("/").get(getAllMarcas);
router.route("/").post(createMarca);
router.route("/:id").get(getMarcaById);
router.route("/:id").put(updateMarca);
router.route("/:id").delete(deleteMarca);
 
module.exports = router;