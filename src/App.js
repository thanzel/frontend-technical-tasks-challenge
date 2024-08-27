import React from 'react';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';
// import UpdateTask from './components/UpdateTask';
// import TaskDetail from './components/FindTaskId';
// import TaskDetail from './components/DeleteTask';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
 return (
  <Router>
  <div>
      <h1 align = "center">Desafío Técnico para el Registro de Tareas</h1>
      <nav align = "center"> 
          <div>
            <Link to="/">Listar Tareas</Link>
            </div>
            <div>
            <Link to="/crear">Crear Tarea</Link>
          </div>
        </nav>
      <Routes>

          <Route path="/" element={<TasksList />} />
          <Route path="/crear" element={<CreateTask />} />
      </Routes>
      <footer>
        <h2>Desarrollado por Yenny Chipamo</h2>
      </footer>
  </div>
</Router>
 );
}

export default App;
