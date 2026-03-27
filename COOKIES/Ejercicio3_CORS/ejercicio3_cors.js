const divAlumno = document.getElementById("alumnos");

async function init() {
    // 1. Intentar recuperar del LocalStorage primero (respuesta inmediata)
    const cached = localStorage.getItem('alumnos');
    if (cached!="undefined"&&cached!=null) mostrarAlumnos(JSON.parse(cached));

    console.log("continua");
    // 2. Pedir siempre a la API para tener datos frescos
    const alumnos = await cargarAlumnos();
   
    // 3. Actualizar caché
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

// GET — leer camisetas de la API (sustituye al productosJSON)
async function cargarAlumnos() {
    console.log("cargar alumnos");
    try {
      const res = await fetch('http://localhost:3001/students');
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const alumnos = await res.json();
      mostrarAlumnos(alumnos);
    } catch (err) {
      console.error('No se pudo conectar con la API:', err);
    }
}   
   
function mostrarAlumnos(alumnos){
    console.log("muestra alumnos");
    alumnos.forEach(element => {
        console.log(element.id);
    });
}

init()