require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/authRoutes'));

// Cambiar el puerto de auth-service
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth-Service corriendo en el puerto ${PORT}`));