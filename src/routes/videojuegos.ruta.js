import { Router } from "express";
//TRAER LA CAPA DEL CONTROLADOR
import { JuegosController } from "../controller/videojuegos.controlador.js";
import { isAuth, checkRole } from "../middlewares/auth.js";

const router = Router();

//FUNCION PARA VER LOS JUEGOS
router.get("/", JuegosController.getJuego);
//FUNCION PARA AGREGAR ESCRIBIR JUEGOS
router.post("/", isAuth, checkRole(["admin", "desarrollador"]), JuegosController.saveJuego);
//FUNCION PARA BUSCAR JUEGOS
router.get("/:id", JuegosController.getJuego);

export {router as juegosRouter}