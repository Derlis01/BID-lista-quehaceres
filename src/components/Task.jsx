import React from 'react'
import './Task.css'
import { useState } from 'react'

const Task = ({ texto, eliminarTarea, id }) => {

  const [check, setCheck] = useState(false)

  const manejarCheck = (e) => {
    setCheck(e.target.checked)
  }

  return (
    <div className='task'>
        <div className={check ? 'texto completado' : 'texto'}>
          {texto}
          <input onChange={(e) => manejarCheck(e)} type="checkbox" name="hola" />
        </div>
        <button onClick={() => eliminarTarea(id)} className="tarea-boton delete">Delete</button>
    </div>
  )
}

export default Task