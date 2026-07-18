import { Link } from "react-router-dom";

function PaginaNoEncontrada(){

    return(

        <div style={{textAlign:"center",padding:"50px"}}>

            <h1>404</h1>

            <h2>Página no encontrada</h2>

            <Link to="/">Volver al inventario</Link>

        </div>

    );

}

export default PaginaNoEncontrada;