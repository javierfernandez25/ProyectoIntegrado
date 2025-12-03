import express from "express";
import {
  crearRespuestaCabecera,
  listarRespuestasCabecera,
  obtenerRespuestaCabecera,
  actualizarRespuestaCabecera,
  eliminarRespuestaCabecera
} from "../controllers/respuestascabecera.controller.js";

const router = express.Router();

router.post("/", crearRespuestaCabecera);
router.get("/", listarRespuestasCabecera);
router.get("/:id", obtenerRespuestaCabecera);
router.put("/:id", actualizarRespuestaCabecera);
router.delete("/:id", eliminarRespuestaCabecera);

export default router;
