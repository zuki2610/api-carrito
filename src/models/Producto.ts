import { Schema, model, Types } from 'mongoose';

interface IProducto {
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

export default model<IProducto>('Producto', productoSchema);
