import express from "express";
import {
  crearUsuario,
  listarUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario
} from "../controllers/usuarios.controller.js";

const router = express.Router();

// ================================
//   RUTAS CRUD DE USUARIOS
// ================================

// Crear usuario
// POST /api/usuarios
router.post("/", crearUsuario);

// Listar todos los usuarios
// GET /api/usuarios
router.get("/", listarUsuarios);

// Obtener un usuario por ID
// GET /api/usuarios/:id
router.get("/:id", obtenerUsuario);

// Actualizar un usuario por ID
// PUT /api/usuarios/:id
router.put("/:id", actualizarUsuario);

// Eliminar un usuario por ID
// DELETE /api/usuarios/:id
router.delete("/:id", eliminarUsuario);

export default router;
