import mongoose from "mongoose";
import "dotenv/config";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL, {
      dbName: DB_NAME,
    });
    return connect;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
