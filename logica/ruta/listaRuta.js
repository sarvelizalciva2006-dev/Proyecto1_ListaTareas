const express = require('express');
const ruta = express.Router();

const controlador = require('../controlador/listaControlar');

ruta.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});

ruta.get('/lista', controlador.listarTarea);
ruta.post('/lista', controlador.crearTarea);
ruta.put('/lista/:id', controlador.actualizaTarea);
ruta.delete('/lista/:id', controlador.eliminaTarea);

module.exports = ruta;


