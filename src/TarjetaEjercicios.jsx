import "./TarjetaEjercicios.css"
import DescripcionEjer from "./DescripcionEjer";
import Ejer from "./assets/ejer.jpg"
function TarjetaEjercicios(){
    return(
        <>
        <div className="ContenedorTarjeta">
            <img className="ImagenEjer" src={Ejer} alt="" />
            <DescripcionEjer/>
        </div>
        </>

    )
}
export default TarjetaEjercicios;