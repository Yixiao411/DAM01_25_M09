import * as comandasService from '../services/comandas.services.js';

export function getAll(req, res) {
 res.json(comandasService.getAll());
}

export function getByID(req, res) {
 const comanda = comandasService.getByID(req.params.id);

 if (!comanda) return res.status(404).json({ message: "Not Found" });
 res.json(comanda);
}