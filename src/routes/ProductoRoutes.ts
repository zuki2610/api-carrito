import { Router } from 'express';
import multer from 'multer';
import { createProducto, deleteProducto, getAllProductos, getProductoById, updateProducto } from '../controllers/ProductoController';

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });

router.get('/productos', getAllProductos);

router.get('/productos/:id', getProductoById);

router.post('/productos', upload.single('imagen'), createProducto);

router.put('/productos/:id', updateProducto);

router.delete('/productos/:id', deleteProducto);

export default router;
