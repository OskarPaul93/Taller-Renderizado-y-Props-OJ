import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tienda de Videojuegos</h2>

      <div className="menu">
        <Link to="/">Inventario</Link>
        <Link to="/nuevo">Nuevo Juego</Link>
      </div>
    </nav>
  );
}

export default Navbar;