import React from "react";
import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskApp = ({ tarea }) => {

  const [input, setInput] = useState({mensajeTarea: '', id: ''})

  const manejarCambio = (e) => {
    setInput({...input, mensajeTarea: e.target.value})
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    tarea({...input, id: uuidv4()})
    setInput({...input, mensajeTarea: ''})
  }

  return (
    <div className="task-container">
      <form className="tarea-formulario" onSubmit={e => manejarEnvio(e)}>
        <input
          onChange={(e) => manejarCambio(e)}
          type="text"
          className="tarea-input"
          placeholder="Ingrese una tarea"
          name="texto"
          value={input.mensajeTarea}
        />
        <button className="tarea-boton">Add</button>
      </form>
    </div>
  );
};

export default TaskApp;
