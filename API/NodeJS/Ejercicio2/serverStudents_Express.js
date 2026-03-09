import express from "express";

const app = express();
const port = 3001;

// Datos simulados --> como si fuera lo que nos devuelve la BDD
let students = [
  { id: "A001", nombre: "Abril", curso: "1º DAW" },
  { id: "A002", nombre: "Marc", curso: "1º DAM" }
];

app.use(express.json());

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  
  if(!student) return res.status(404).json({ message: "Not Found" });
  return res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const studentIndex = students.findIndex(st => st.id === req.params.id);

  if (studentIndex === -1){
    return res.status(404).json({ message: "Not Found" });
  }

  students.splice(studentIndex, 1);
  return res.sendStatus(204);
});

app.post("/students", (req, res) => {
  const validationMsg = validateStudent(req.body);
  if (validationMsg) return res.status(400).json({ message: validationMsg });
  
  let existe = students.some(s => s.id === req.body.id);
  if (existe) return res.status(409).json({ message: "id ya existe" });

  students.push({ id: req.body.id, nombre: req.body.nombre, curso: req.body.curso });
  return res.status(201).json({ message: "Created", student: req.body });
});

app.put("/students/:id", (req, res) => {
  let existe = students.some(s => s.id === req.params.id);
  if (!existe) return res.status(404).json({ message: "Not Found" });

  const payload = req.body;
  let idx = students.findIndex(s => s.id === req.params.id);

  if (payload && typeof payload === "object") {
    if (payload.nombre !== undefined) students[idx].nombre = payload.nombre;
    if (payload.curso !== undefined) students[idx].curso = payload.curso;
  }

  return res.status(200).json({ message: students[idx] });
});

// Helper: valida campos mínimos
function validateStudent(obj) {
  if (!obj || typeof obj !== "object") return "Body inválido";
  if (!obj.id || !obj.nombre || !obj.curso) return "Faltan campos: id, nombre, curso";
  return null;
}

//TODO las funciones callback necesarias.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});