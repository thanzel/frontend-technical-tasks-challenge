import React, { useState } from 'react';
import axios from 'axios'; 

function CreateTask() {
  const [description, setDescription] = useState('');
  const [dateCreate, setDateCreate] = useState('');
  const [isCurrent, setIsCurrent] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const taskData = {
        description,
        dateCreate,
        isCurrent,
      };
console.log("paso");
      await axios.post('api/registrar-tareas/crear', taskData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("paso2");
      setSuccess('Registro exitoso');
      setDescription('');
      setDateCreate('');
      setIsCurrent(true);
      setError('');
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      setError('Error al crear la tarea');
      setSuccess('');
    }
  };

  return (
    <div className="create-container">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha de Creación:</label>
          <input
            type="datetime-local"
            value={dateCreate}
            onChange={(e) => setDateCreate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>¿Vigente?:</label>
          <input
            type="checkbox"
            checked={isCurrent}
            onChange={(e) => setIsCurrent(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn-submit">Crear Tarea</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CreateTask;