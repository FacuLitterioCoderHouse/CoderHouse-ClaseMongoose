import express, { Application } from "express";
import { PORT } from "./constants";
import { ConnectionToDatabase } from "./database/Connection";
import productsController from "./routes/productsRoute";

const app: Application = express();

app.use(express.json());
app.use(express.text());

app.use("/products", productsController);

ConnectionToDatabase();

app.listen(PORT, () => console.log(`Server on Port ${PORT}`));
