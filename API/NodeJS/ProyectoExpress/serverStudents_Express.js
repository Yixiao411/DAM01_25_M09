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
  
  if(!student) return re.status(404).json({ message: "Not Found" });
  return res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const studentIndex = students.findIndex(st => st.id === req.params.id);

  if (studentIndex === -1){
    return req.status(404).json({ message: "Not Found" });
  }

  students.splice(studentIndex, 1);
  return res.status(204);
});

app.post("/students", (req, res) => {
  const validationMsg = validateStudent(alumnoNew);
  if (validationMsg) return res.status(400, { message: validationMsg });
  
  let existe = students.some(s => s.id === req.body.id);
  if (existe) return res.status(409, { message: "id ya existe" });

  students.push({ id: req.body.id, nombre: req.body.nombre, curso: req.body.curso });
  return res.status(201, { message: "Created", student: req.body });
});

app.put("/students/:id", (req, res) => {
  let existe = students.some(s => s.id === req.body.id);
  if (!existe) return res.status(404, { message: "Not Found" });

  const payload = req.body;

  if (payload && typeof payload === "object") {
    if (payload.nombre !== undefined) students[idx].nombre = payload.nombre;
    if (payload.curso !== undefined) students[idx].curso = payload.curso;
  }

  return res.json(res, 200, students[idx]);
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