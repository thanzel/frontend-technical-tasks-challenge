import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  

  //Listar tareas
  const fetchTasks = async () => {
    try {
      const response = await axios.get('api/registrar-tareas/listar');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al listar tareas:', error);
      setError('Error al listar tareas'); 
    } finally {
      setLoading(false);
    }
  };

useEffect (() => {
  fetchTasks();
}, []);


if (loading) return <p>Procesando...</p>;
if (error) return <p>{error}</p>;

return (
  <div className="list-container"> 
    <h2> Listado de Tareas</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Fecha de Creación</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.description}</td>
            <td>{task.dateCreate}</td>
            <td>{task.isCurrent ? 'Vigente' : 'No Vigente'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default TasksList;