import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TablaVideojuegos from "./components/TablaVideojuegos";
import FormularioVideoJuegos from "./components/FormularioVideoJuegos";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada";

import data from "./data/videojuegos";

import AlertaNotificacion from "./components/AlertaNotificacion";

function App() {

  const [videojuegos, setVideojuegos] = useState(() => {

    const datosGuardados =
      localStorage.getItem("lista_videojuegos");

    return datosGuardados
      ? JSON.parse(datosGuardados)
      : data;

  });


  const [mensaje, setMensaje] = useState("");

  const agregarVideojuego = (nuevoJuego) => {

    setVideojuegos([
      ...videojuegos,
      nuevoJuego
    ]);

    setMensaje("Videojuego agregado correctamente.");

  };


  const eliminarVideojuego = (id) => {

    setVideojuegos(

      videojuegos.filter(
        juego => juego.id !== id
      )

    );

    setMensaje("Videojuego eliminado correctamente.");

  };


  const editarVideojuego = (juegoEditado) => {

    setVideojuegos(
      videojuegos.map((juego) =>
        juego.id === juegoEditado.id
          ? juegoEditado
          : juego
      )
    );

    setMensaje("Videojuego actualizado correctamente.");

  };

  useEffect(() => {

    localStorage.setItem(
      "lista_videojuegos",
      JSON.stringify(videojuegos)
    );

  }, [videojuegos]);

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

      {mensaje && (

        <AlertaNotificacion
          mensaje={mensaje}
          onCerrar={() => setMensaje("")}
        />

      )}

    </>

  );

}

export default App;