import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Connection Error:", error.message);
    throw new Error("Connection failed!");
  }
};

export default connect;
