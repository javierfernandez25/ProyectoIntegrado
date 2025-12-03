import mongoose from "mongoose";

const RespuestaCabeceraSchema = new mongoose.Schema({
  id_respuesta: { type: Number, unique: true, required: true },
  fecha_envio: { type: Date, required: true },
  id_encuesta: { type: mongoose.Schema.Types.ObjectId, ref: "Encuesta", required: true },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }
});

export default mongoose.model("RespuestaCabecera", RespuestaCabeceraSchema);
