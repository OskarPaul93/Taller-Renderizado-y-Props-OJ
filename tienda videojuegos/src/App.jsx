import { useState } from "react";
import TablaVideojuegos from "./components/TablaVideojuegos";
import data from "./data/videojuegos";

function App() {

  const [videojuegos] = useState(data);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Tienda de Videojuegos</h1>

      <TablaVideojuegos videojuegos={videojuegos} />

    </div>
  );
}

export default App;
