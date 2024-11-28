const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para manejar datos JSON
app.use(express.json());

// Datos de ejemplo (puedes conectarte a una base de datos real aquí)
let usuarios = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "María López" }
];

// Endpoint para obtener usuarios
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Endpoint para agregar un usuario
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id = usuarios.length + 1; // Generar ID simple
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
