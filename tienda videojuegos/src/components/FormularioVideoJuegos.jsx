import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FormularioVideoJuegos.css";

function FormularioVideojuego({
  agregarVideojuego,
  editarVideojuego
}) {

  const navigate = useNavigate();
  const location = useLocation();

  const juegoEditar = location.state;

  const [juego, setJuego] = useState(

    juegoEditar || {

      titulo: "",
      genero: "Acción",
      plataforma: "PC",
      lanzamiento: "",
      precio: "",
      disponible: true,
      progreso: 0

    }

  );

  const cambiarValor = (e) => {

    const { name, value, checked, type } = e.target;

    setJuego({...juego, [name]: type === "checkbox" ? checked : value

    });

  };

  const guardarJuego = (e) => {

    e.preventDefault();

    const juegoGuardar = {

      ...juego,

      lanzamiento: Number(juego.lanzamiento),
      precio: Number(juego.precio),
      progreso: Number(juego.progreso)

    };

    if (juegoEditar) {

      editarVideojuego(juegoGuardar);

    } else {

      agregarVideojuego({

        ...juegoGuardar,

        id: Date.now()

      });

    }

    navigate("/");

  };

  return (

    <div className="formulario">

      <h2>

        {juegoEditar
          ? "Editar Videojuego"
          : "Registrar Videojuego"}

      </h2>

      <form onSubmit={guardarJuego}>

        <label>Título</label>

        <input
          type="text"
          name="titulo"
          value={juego.titulo}
          onChange={cambiarValor}
          required
        />

        <label>Género</label>

        <select
          name="genero"
          value={juego.genero}
          onChange={cambiarValor}
        >

          <option>Acción</option>
          <option>Aventura</option>
          <option>Sandbox</option>
          <option>Deportes</option>
          <option>MOBA</option>

        </select>

        <label>Plataforma</label>

        <select
          name="plataforma"
          value={juego.plataforma}
          onChange={cambiarValor}
        >

          <option>PC</option>
          <option>PS5</option>
          <option>Xbox</option>
          <option>Nintendo Switch</option>
          <option>Multiplataforma</option>

        </select>

        <label>Año de lanzamiento</label>

        <input
          type="number"
          name="lanzamiento"
          value={juego.lanzamiento}
          onChange={cambiarValor}
          required
        />

        <label>Precio</label>

        <input
          type="number"
          step="0.01"
          name="precio"
          value={juego.precio}
          onChange={cambiarValor}
          required
        />

        <label>Fecha de lanzamiento</label>

<input
  type="date"
  name="fechaLanzamiento"
  value={juego.fechaLanzamiento}
  onChange={cambiarValor}
/>

<label>Sinopsis</label>

<textarea
  name="descripcion"
  value={juego.descripcion}
  onChange={cambiarValor}
  rows="4"
  maxLength="250"
/>

<label>Calificación</label>

<input
  type="number"
  name="calificacion"
  value={juego.calificacion}
  onChange={cambiarValor}
  min="1"
  max="100"
/>




        <label>Progreso</label>

        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          name="progreso"
          value={juego.progreso}
          onChange={cambiarValor}
        />

        <div className="checkbox">

          <input
            id="disponible"
            type="checkbox"
            name="disponible"
            checked={juego.disponible}
            onChange={cambiarValor}
          />

          <label htmlFor="disponible">
            Disponible
          </label>

        </div>

        <br />

        <button type="submit">

          {juegoEditar
            ? "Actualizar"
            : "Guardar"}

        </button>

      </form>

    </div>

  );

}

export default FormularioVideojuego;