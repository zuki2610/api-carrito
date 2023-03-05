import { Schema, model, Document } from 'mongoose';

export interface IProducto extends Document {
  name: string;
  imagenUrl: string;
  cantidad: number;
  medida: string;
  createdAt: Date;
}

const productoSchema = new Schema<IProducto>({
  name: String,
  imagenUrl: String,
  cantidad: Number,
  medida: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Producto = model<IProducto>('Producto', productoSchema);
