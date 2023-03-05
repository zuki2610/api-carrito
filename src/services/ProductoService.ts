import { Document, Types } from 'mongoose';
import { IProducto, Producto } from '../models/Producto';

interface IProductoService {
  getAllProductos(): Promise<IProducto[]>;
  getProductoById(id: Types.ObjectId): Promise<IProducto | null>;
  createProducto(producto: IProducto): Promise<IProducto>;
  updateProducto(id: Types.ObjectId, producto: IProducto): Promise<IProducto | null>;
  deleteProducto(id: Types.ObjectId): Promise<boolean>;
}

export class ProductoService implements IProductoService {
  async getAllProductos(): Promise<IProducto[]> {
    const productos = await Producto.find();
    return productos;
  }

  async getProductoById(id: Types.ObjectId): Promise<IProducto | null> {
    const producto = await Producto.findById(id);
    return producto;
  }

  async createProducto(producto: IProducto): Promise<IProducto> {
    const newProducto = await Producto.create(producto);
    return newProducto;
  }

  async updateProducto(id: Types.ObjectId, producto: IProducto): Promise<IProducto | null> {
    const updatedProducto = await Producto.findByIdAndUpdate(id, producto, { new: true });
    return updatedProducto;
  }

  async deleteProducto(id: Types.ObjectId): Promise<boolean> {
    const result = await Producto.findByIdAndDelete(id);
    return !!result;
  }
}
