import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tenis.css"
import Swal from "sweetalert2";

const Tenis = () => {
    const [info, setInfo] = useState([])
    
    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reserva"))===null? []: JSON.parse(localStorage.getItem("reserva") ))
    
    
    const getCanchat = async () => {
        const response = await axios.get("https://apipdtc.herokuapp.com/tenis")
        setInfo(response.data)
        }
       
        useEffect(() => {
            getCanchat();
          }, []);
        
          const laReserva=(idCancha, horario) =>{
            let reservaNueva = `cancha: ${idCancha} hora:${horario}`
            localStorage.setItem("reserva", JSON.stringify([reservaNueva, ...reservas]))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'reserva exitosa',
                showConfirmButton: false,
                timer: 1500
              })
            
        }
    
    return ( 
        <>
 {info.length>0 ?
                    info.map(canchaTenis =>(
                            <div className="card mb-3" style={{maxwidth: "540px"}} key={canchaTenis.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={canchaTenis.url_imagen} className="img-fluid rounded-start" alt={canchaTenis.nombre}/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{canchaTenis.nombre}</h5>
                                        
                                        {canchaTenis.horarios.map(hora => (
                                        <button onClick={()=> laReserva(canchaTenis.id, hora.hora)}key={hora.id} className="btn border"> {hora.hora} </button>
                                                                                                            ))}
                                        <div className="mt-3 ">                                                                    
                                        
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                          ))
            
                :
                "cargando canchas..."}

        </>
     );
}
 
export default Tenis;