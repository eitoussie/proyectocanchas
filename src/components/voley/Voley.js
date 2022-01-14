import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const Voley = () => {
    const [info, setInfo] = useState([])

    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reserva"))===null? []: JSON.parse(localStorage.getItem("reserva") ))
    
    const getCanchav = async () => {
        const response = await axios.get("https://apipdtc.herokuapp.com/voley")
        setInfo(response.data)
        }
       
        useEffect(() => {
            getCanchav();
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
                    info.map(canchaVoley =>(
                            <div className="card mb-3" style={{maxwidth: "540px"}} key={canchaVoley.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={canchaVoley.url_imagen} className="img-fluid rounded-start" alt={canchaVoley.nombre}/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{canchaVoley.nombre}</h5>
                                        
                                        {canchaVoley.horarios.map(hora => (
                                        <button onClick={()=> laReserva(canchaVoley.id, hora.hora)} key={hora.id} className="btn border"> {hora.hora} </button>
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
 
export default Voley;