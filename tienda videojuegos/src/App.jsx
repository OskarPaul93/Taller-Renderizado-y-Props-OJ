import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TablaVideojuegos from "./components/TablaVideojuegos";
import FormularioVideoJuegos from "./components/FormularioVideoJuegos";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada";

import data from "./data/videojuegos";

function App() {

  const [videojuegos, setVideojuegos] = useState(data);

  const agregarVideojuego = (nuevoJuego) => {

    setVideojuegos([
      ...videojuegos,
      nuevoJuego
    ]);

  };


  const eliminarVideojuego = (id) => {

    setVideojuegos(

      videojuegos.filter(
        juego => juego.id !== id
      )

    );

  };


  const editarVideojuego = (juegoEditado) => {

    setVideojuegos(
      videojuegos.map((juego) =>
        juego.id === juegoEditado.id
          ? juegoEditado
          : juego
      )
    );

  };

  return (

    <>

      <Navbar />

      <div style={{ padding: "20px" }}>

        <Routes>

          <Route

            path="/"

            element={
              <TablaVideojuegos
                videojuegos={videojuegos}
                onEliminar={eliminarVideojuego}
              />
            }

          />

          <Route

            path="/nuevo"

            element={
              <FormularioVideoJuegos
                agregarVideojuego={agregarVideojuego}
                editarVideojuego={editarVideojuego}
              />
            }

          />

          <Route
            path="/editar"
            element={
              <FormularioVideoJuegos
                agregarVideojuego={agregarVideojuego}
                editarVideojuego={editarVideojuego}
              />
            }
          />

          <Route

            path="*"

            element={<PaginaNoEncontrada />}

          />

        </Routes>

      </div>

    </>

  );

}

export default App;