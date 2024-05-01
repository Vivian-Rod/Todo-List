import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [listado,actualizarListado]= useState([]);
  let [textoInput, actualizarTextoInput] = useState("")
  
  function handleInputChange(evento){
    actualizarTextoInput(evento.target.value)
  }

  function capturarEventoOnClicAgregar(evento){
    evento.preventDefault();
    if(textoInput.length > 0){
      let listaNueva = Array.from(listado);
      listaNueva.push(textoInput);
      actualizarListado(listaNueva);
      
    }
  }

  function capturarEventoOnClicEliminar(index){
    let listaNueva = Array.from(listado);
    listaNueva.splice(index, 1);
    actualizarListado(listaNueva);
  }


  return (
    <div className="container">
      <h1 className="titulo">Todo List</h1>
      <form onSubmit={capturarEventoOnClicAgregar}>
        <input
          onChange={handleInputChange}
          type="text"
          value={textoInput}
          placeholder="Escribe aquí"
          className="input"
        />
        <button type="button" onClick={capturarEventoOnClicAgregar} className="boton">
          Agregar ítem
        </button>
      </form>

      <ul className="lista">
        {listado.map((item, index) => (
          <li key={index} className="item">
            {item}{" "}
            <button onClick={() => capturarEventoOnClicEliminar(index)} className="boton-eliminar">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App
