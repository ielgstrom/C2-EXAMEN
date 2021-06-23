import { useEffect, useState } from "react";
import { Formulario } from "./Componentes/Formulario";
function App() {
  const [listaAmigos, setListaAmigos] = useState([]);
  const urlApi = "http://localhost:3001/amigos";
  const obtenerListaAmigos = async () => {
    const resp = await fetch(urlApi);
    const resultado = await resp.json();
    setListaAmigos(resultado);
  };

  useEffect(() => obtenerListaAmigos(), []);

  const numerodeEstrellas = (num) => {
    const arrayDummy = new Array(num);
    return (
      <>
        {arrayDummy.map(() => (
          <i className="fas fa-star"></i>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <h1>Gestion de mis {listaAmigos.length} amigos</h1>
        <Formulario />

        <div className="row justify-content-between">
          {listaAmigos.map((persona) => (
            <ul className="col-3 list-unstyled cont-amigo" key={persona.id}>
              <li className="li-persona li-nombre">Nombre: {persona.nombre}</li>
              <li className="li-persona li-apellido">
                Apellidos: {persona.apellido}
              </li>
              <li className="li-persona li-nvaloracion">
                Valoración: {numerodeEstrellas(persona.valoracion)}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
