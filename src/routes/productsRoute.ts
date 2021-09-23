import { IRouter, Router } from "express";
import {
  createOneProduct,
  deleteOneProduct,
  findOneProduct,
  getAllProducts,
} from "../controllers/products";

const router: IRouter = Router();

router.get("/", getAllProducts);

router.get("/:id", findOneProduct);

router.post("/", createOneProduct);

// Falta el PUT

router.delete("/:id", deleteOneProduct);

export default router;
