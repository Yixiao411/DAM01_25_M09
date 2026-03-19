import * as camisetasService from '../services/camisetas.services.js';

export function getAll(req, res){
    res.json(camisetasService.getAll());
}

export function getByID(req, res){
    const camiseta = camisetasService.getById(req.params.id);

    if (!camiseta) return res.status(404).json({ message: "Not Found" });
    res.json(camiseta);
}