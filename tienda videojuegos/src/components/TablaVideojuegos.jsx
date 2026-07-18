import "./TablaVideojuegos.css";
import { useNavigate } from "react-router-dom";

function TablaVideojuegos({
  videojuegos,
  eliminarVideojuego
}) {

  const navigate = useNavigate();

  return (

    <div className="tabla-container">

      <table>

        <thead>

          <tr>

            <th>Título</th>
            <th>Género</th>
            <th>Plataforma</th>
            <th>Lanzamiento</th>
            <th>Precio</th>
            <th>Disponible</th>
            <th>Progreso</th>
            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {videojuegos.map((juego)=>(

            <tr key={juego.id}>

              <td>{juego.titulo}</td>

              <td>{juego.genero}</td>

              <td>{juego.plataforma}</td>

              <td>{juego.lanzamiento}</td>

              <td>${juego.precio}</td>

              <td>{juego.disponible ? "Sí":"No"}</td>

              <td>

                <progress
                  value={juego.progreso}
                  max="1"
                ></progress>

                {" "}

                {Math.round(juego.progreso*100)}%

              </td>

              <td>

                <button
                  onClick={() =>
                    navigate("/editar", {
                      state: juego
                    })
                  }
                >
                  Editar
                </button>

                {" "}

                <button
                  onClick={() =>
                    eliminarVideojuego(juego.id)
                  }
                >
                  Eliminar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TablaVideojuegos;