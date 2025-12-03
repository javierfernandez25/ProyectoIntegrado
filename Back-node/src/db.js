import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://javierfernandez25_db_user:afSLOLP29VC2hAPP@cluster0.kn7jeb8.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log(" MongoDB conectado correctamente a la base de datos 'test'");
  } catch (error) {
    console.error(" Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
}