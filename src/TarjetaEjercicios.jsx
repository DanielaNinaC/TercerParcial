import "./TarjetaEjercicios.css"
import DescripcionEjer from "./DescripcionEjer";
import Ejer from "./assets/ejer.jpg"
import Flecha from "./assets/Vector.png"
function TarjetaEjercicios(){
    return(
        <>
        <div className="ContenedorTarjeta">
            <img className="ImagenEjer" src={Ejer} alt="" />

            <div className="ContenedorDes">
                <DescripcionEjer/>
            </div>

            <img className="ImgFlecha" src={Flecha}alt="" />
        </div>
        </>

    )
}
export default TarjetaEjercicios;