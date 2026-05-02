const express = require('express');
const cors = require('cors');
const path = require ('path'); 
require('./logica/dataBase/listaDB');

const listaRuta = require('./logica/ruta/listaRuta');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', listaRuta);

app.get('(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
}); 

const PORT =  process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log("Se pudo unir en ${PORT}");
});


