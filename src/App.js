import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import Task from "./components/Task";

function App() {
  const [tareas, setTareas] = useState([]);

  const recibirEnvio = (tarea) => {
    let tareaActualizada = [tarea, ...tareas];
    setTareas(tareaActualizada);
    guardarTareas(tareaActualizada)
  };

  const eliminarTarea = (id) => {
    let newTareas = tareas.filter(tarea => tarea.id !== id)
    setTareas(newTareas)
    guardarTareas(newTareas)
  }

  const guardarTareas = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(localStorage.getItem("tareas"))
  };

  const obtenerTareas = () => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  };

  useEffect(() => {
    obtenerTareas();
  }, []);

  return (
    <div className="App">
      <div className="tarea-componente">
        <TaskForm tarea={recibirEnvio} />
        {tareas.map((tarea) => (
          <Task key={tarea.id} id={tarea.id} texto={tarea.mensajeTarea} eliminarTarea={eliminarTarea} />
        ))}
      </div>
    </div>
  );
}

export default App;
