const base = require('../dataBase/listaDB');

const consultas = {
  getAll: (cb) => base.all("SELECT * FROM lista", [], cb),

  create: (titulo, cb) =>
    base.run("INSERT INTO lista (titulo, completo) VALUES (?, ?)", [titulo, 0], cb),

  update: (id, completo, cb) =>
    base.run("UPDATE lista SET completo = ? WHERE id = ?", [completo, id], cb),

  delete: (id, cb) =>
    base.run("DELETE FROM lista WHERE id = ?", [id], cb)
};

module.exports = consultas;