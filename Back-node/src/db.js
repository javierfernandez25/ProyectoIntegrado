import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(

      "mongodb://localhost:27017/test",);
    console.log(" MongoDB conectado correctamente a la base de datos 'test'");
  } catch (error) {
    console.error(" Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
}