import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  id_usuario: { type: Number, unique: true },  // 👈 IMPORTANTE
  nombre_completo: String,
  email: String,
  rol: String,
  fecha_registro: { type: Date, default: Date.now }
});
export default mongoose.model("Usuario", UsuarioSchema);
