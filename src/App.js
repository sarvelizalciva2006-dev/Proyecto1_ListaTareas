import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const url = "/lista";

  
  const obtenerTareas = async () => {
    const res = await axios.get(url);
    setTareas(res.data);
  };

  useEffect(() => { obtenerTareas(); }, []);

  
  const agregar = async () => {
    if (!texto) return;
    await axios.post(url, { titulo: texto });
    setTexto("");
    obtenerTareas();
  };

  
  const eliminar = async (id) => {
    await axios.delete(`${url}/${id}`);
    obtenerTareas();
  };

  return (
    <div className="App">
      <div className="card">
        {/* como pongo la imagen diosito : */}
        <img src="bt21.png" className="bt21-img" alt="Mang" />
        <h1>Lista de Tareas</h1>
        <div className="input-container"></div>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Ahora que toca hacer :(" />
        <button className="add-btn" onClick={agregar}>+</button>

        <div className="lista">
          {tareas.map(t => (
            <div key={t.id} className="tarea">
              <span>{t.titulo}</span>
              <button onClick={() => eliminar(t.id)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>🗑️</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;