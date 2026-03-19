import { Router } from "express";
import * as comandasController from "../controllers/comandas.controller.js";

const router = Router();

router.get("/", comandasController.getAll);
router.get("/:id", comandasController.getByID);

export default router;