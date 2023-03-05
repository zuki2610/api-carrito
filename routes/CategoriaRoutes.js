const express = require("express");
const {
  getAllCategorias,
  createCategoria,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
} = require("../controllers/CategoriaController");
 
const router = express.Router();
 
router.route("/").get(getAllCategorias);
router.route("/").post(createCategoria);
router.route("/:id").get(getCategoriaById);
router.route("/:id").put(updateCategoria);
router.route("/:id").delete(deleteCategoria);
 
module.exports = router;