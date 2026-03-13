import * as notaService from '../services/nota.service.js';

export function getAll(req, res) {
  res.json(notaService.getAll());
}

export function getById(req, res) {
 const nota = notaService.getById(req.params.id);

 if (!nota) return res.status(404).json({ message: "Not Found" });
 res.json(nota);
}

export function getByStudentId(req, res){
  const notas = notaService.getByStudentId(req.params.id);

  if (!notas) return res.status(404).json({ message: "Not Found" });
  res.json(notas);
}

export function create(req, res) {
 const result = notaService.create(req.body);

 if (result.error) {
   const status = result.status || 400;
   return res.status(status).json({ message: result.error });
 }

 res.status(201).json({ message: "Created", nota: result.data });
}

export function update(req, res) {
 const updated = notaService.update(req.params.id, req.body);

 if (!updated) return res.status(404).json({ message: "Not Found" });
 res.json(updated);
}

export function remove(req, res) {
 const deleted = notaService.remove(req.params.id);

 if (!deleted) return res.status(404).json({ message: "Not Found" });
 res.sendStatus(204);
}
