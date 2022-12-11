import mongoose from "mongoose";

export const db_connect = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error(error);
  }
};
