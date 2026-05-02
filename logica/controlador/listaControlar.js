const tarea = require('../modelo/listaModelo');

const controlarTarea = {
  listarTarea: (req, res) => {
    tarea.getAll((err, rows) => res.json(rows));
  },

  crearTarea: (req, res) => {
    tarea.create(req.body.titulo, function () {
      res.json({ message: "Se creo la tarea" });
    });
  },

  actualizaTarea: (req, res) => {
    tarea.update(req.params.id, req.body.completo, function () {
      res.json({ message: "Se actualizo la tarea" });
    });
  },

  eliminaTarea: (req, res) => {
    tarea.delete(req.params.id, function () {
      res.json({ message: "Tarea aliminada" });
    });
  }
};

module.exports = controlarTarea;
