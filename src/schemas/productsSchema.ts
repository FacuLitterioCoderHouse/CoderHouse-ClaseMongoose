import { Document, model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  stock: number;
  price: number;
  date: Date;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  stock: Number,
  price: Number,
  date: {
    type: Date,
  },
});

export default model<IProduct>("Product", productSchema);
