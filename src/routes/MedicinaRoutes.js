const express = require("express");
const multer = require("multer");
const {
  getAllMedicinas,
  createMedicina,
  getMedicinaById,
  updateMedicina,
  deleteMedicina,
  getMedicinasByCategorias
} = require("../controllers/MedicinaController");
 
const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });


router.route("/").get(getAllMedicinas);
router.route("/").post(upload.single('file'), createMedicina);
router.route("/id/:id").get(getMedicinaById);
router.route("/:id").put(updateMedicina);
router.route("/:id").delete(deleteMedicina);
router.route("/categorias").get(getMedicinasByCategorias);
 
module.exports = router;