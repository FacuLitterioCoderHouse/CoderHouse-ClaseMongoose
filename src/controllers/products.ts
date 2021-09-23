import { NextFunction, Request, Response } from "express";
import productsSchema from "../schemas/productsSchema";

export const findOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) res.json({ message: "Need an ID" });

  const productSaved = await productsSchema.findById(id);

  res.json({ product: productSaved });
};

export const deleteOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) res.json({ message: "Need an ID" });

  await productsSchema.findOneAndDelete({ _id: id });

  res.json({ message: `Product was deleted` });
};

export const getAllProducts = (req: Request, res: Response) => {
  res.json({ message: "Works" });
};

export const createOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description } = req.body;

  if (!name || !description)
    res.json({ message: "The product needs a name and description" });
  const newProduct = new productsSchema(req.body);
  await newProduct.save();

  res.json({ message: "Product saved" });
};
