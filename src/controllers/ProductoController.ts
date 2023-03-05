import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProductoService } from '../services/ProductoService';

const productoService = new ProductoService();

/**
 * Obtiene todos los productos
 * @param req Request
 * @param res Response
 */
export const getAllProductos = async (req: Request, res: Response) => {
  try {
    const productos = await productoService.getAllProductos();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

/**
 * Obtiene un producto por su id
 * @param req Request
 * @param res Response
 */
export const getProductoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const producto = await productoService.getProductoById(new Types.ObjectId(id));
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error });
  }
};

/**
 * Crea un nuevo producto
 * @param req Request
 * @param res Response
 */
export const createProducto = async (req: Request, res: Response) => {
  try {
    const { body, file } = req;

    if (!file) {
      return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }

    const producto = await productoService.createProducto({
      ...body,
      imagenUrl: `${req.protocol}://${req.get('host')}/uploads/${file.filename}`,
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};

/**
 * Actualiza un producto existente
 * @param req Request
 * @param res Response
 */
export const updateProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const producto = await productoService.updateProducto(new Types.ObjectId(id), body);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error });
  }
};

/**
 * Elimina un producto existente
 * @param req Request
 * @param res Response
 */
export const deleteProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await productoService.deleteProducto(new Types.ObjectId(id));
    if (!result) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};
