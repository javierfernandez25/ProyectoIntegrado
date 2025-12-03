import RespuestaCabecera from "../models/RespuestaCabecera.js";

export async function crearRespuestaCabecera(req, res) {
  try {
    const nueva = await RespuestaCabecera.create(req.body);
    res.status(201).json(nueva);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function listarRespuestasCabecera(req, res) {
  try {
    const lista = await RespuestaCabecera.find();
    res.json(lista);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function obtenerRespuestaCabecera(req, res) {
  try {
    const r = await RespuestaCabecera.findOne({
      id_respuesta: Number(req.params.id)
    });

    if (!r) return res.status(404).json({ error: "No encontrada" });

    res.json(r);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function actualizarRespuestaCabecera(req, res) {
  try {
    const r = await RespuestaCabecera.findOneAndUpdate(
      { id_respuesta: Number(req.params.id) },
      req.body,
      { new: true }
    );

    if (!r) return res.status(404).json({ error: "No encontrada" });

    res.json(r);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function eliminarRespuestaCabecera(req, res) {
  try {
    const r = await RespuestaCabecera.findOneAndDelete({
      id_respuesta: Number(req.params.id)
    });

    if (!r) return res.status(404).json({ error: "No encontrada" });

    res.json({ mensaje: "Eliminada", r });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
