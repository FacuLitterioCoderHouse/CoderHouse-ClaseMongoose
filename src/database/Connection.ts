import mongoose from "mongoose";
import { MONGO_DB_URI } from "../constants";
import MongooseOptions from "./MongooseOptions";

export const ConnectionToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, MongooseOptions);
    console.log("Database Connected");
  } catch (error) {
    throw new Error();
  }
};
