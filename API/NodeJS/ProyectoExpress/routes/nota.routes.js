import { Router } from 'express';
import * as notaController from '../controllers/nota.controller.js';

const router = Router();

router.get("/", notaController.getAll);
router.get("/:id", notaController.getById);
router.get("/student/:id", notaController.getByStudentId);
router.post("/", notaController.create);
router.put("/:id", notaController.update);
router.delete("/:id", notaController.remove);

export default router;