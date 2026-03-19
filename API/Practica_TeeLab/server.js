import express from 'express';
import camisetasRouter from './routes/camisetas.routes.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.use('/camisetas', camisetasRouter);


app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: "Error interno" });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}/`);
});