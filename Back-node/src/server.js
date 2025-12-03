// IMPORTS
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORT RUTAS 
import usuariosRoutes from "./routes/usuarios.routes.js";
import testRoutes from "./routes/test.routes.js";
import encuestasRoutes from "./routes/encuestas.routes.js";
import asignacionesRoutes from "./routes/asignaciones.routes.js";
import cursosRoutes from "./routes/cursos.routes.js";
import matriculasRoutes from "./routes/matriculas.routes.js";
import opcionesRoutes from "./routes/opciones.routes.js"; 
import preguntasRoutes from "./routes/preguntas.routes.js"; 
import respuestascabeceraRoutes from "./routes/respuestascabecera.routes.js"; 
import respuestasdetalleRoutes from "./routes/respuestasdetalle.routes.js"; 

// RUTAS API
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/test", testRoutes);
app.use("/api/asignaciones", asignacionesRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/matriculas", matriculasRoutes);
app.use("/api/encuestas", encuestasRoutes);
app.use("/api/opciones", opcionesRoutes);
app.use("/api/preguntas", preguntasRoutes);
app.use("/api/cabecera", respuestascabeceraRoutes);
app.use("/api/detalle", respuestasdetalleRoutes);


// RUTA HOME
app.get("/", (req, res) => {
  res.json({
    mensaje: "API funcionando corractamente"
  });
});

//  MANEJO DE 404
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: `La ruta ${req.method} ${req.url} no existe en este servidor`
  });
});

// ERROR GLOBAL
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// CONEXIÓN
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
  })
  .catch(err => console.error(err));