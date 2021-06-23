import { useState } from "react";
export const Formulario = () => {
  const [aparicion, setAparicion] = useState(false);
  const desAparacer = (e) => {
    e.preventDefault();
    setAparicion(!aparicion);
    return;
  };
  return (
    <>
      <button
        type="button"
        className={`btn  ${aparicion ? "desaparecido" : ""}`}
        onClick={desAparacer}
      >
        Nuevo amigo
      </button>
      <div className={`container ${!aparicion ? "desaparecido" : ""}`}>
        <form className={`form row `}>
          <div className="col">
            <label htmlFor="nombre" className="row">
              Nombre
            </label>
            <input type="text" className="row" id="nombre" />
          </div>
          <div className="col">
            <label htmlFor="apellidos" className="row">
              Apellidos
            </label>
            <input type="text" className="row" id="apellidos" />
          </div>
          <div className="col">
            <label htmlFor="valoracion" className="row">
              Valoración
            </label>
            <select id="valoracion" className="row">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="col">
            <div className="row">
              <button type="button" className="btn col">
                Crear
              </button>
            </div>
            <div className="row">
              <button type="button" className="btn col" onClick={desAparacer}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
