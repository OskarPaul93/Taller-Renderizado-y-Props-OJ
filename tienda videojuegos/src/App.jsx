import { useState } from "react";
import TablaVideojuegos from "./components/TablaVideojuegos";
import data from "./data/videojuegos";

function App() {

  const [videojuegos] = useState(data);

  return (
    <div>
      <h1>Tienda de Videojuegos</h1>

      <TablaVideojuegos videojuegos={videojuegos} />

    </div>
  );
}

export default App;
