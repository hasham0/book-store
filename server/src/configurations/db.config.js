import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "bookStore",
    });
    return connect;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
