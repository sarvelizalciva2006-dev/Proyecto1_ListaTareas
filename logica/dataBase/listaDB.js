const sqlite3 = require('sqlite3').verbose();
const base = new sqlite3.Database('./lista.db');

base.run(`
CREATE TABLE IF NOT EXISTS lista(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    completo INTEGER
    )`);

module.exports = base; 


