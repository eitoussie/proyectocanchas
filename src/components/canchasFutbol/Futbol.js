import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Futbol.css"
import Swal from "sweetalert2"

const Futbol = () => {
    const [info, setInfo] = useState([])
    
   /* local storage */
    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reserva"))===null? []: JSON.parse(localStorage.getItem("reserva") ))
    
     
    /* consumir api */
    const getCanchaf = async () => {
    const response = await axios.get("https://apipdtc.herokuapp.com/futbol")
    setInfo(response.data)
    }
    useEffect(() => {
        getCanchaf();
      }, []);
   
    
      /* accion de la reserva */
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
                    info.map(canchaFutbol =>(
                            <div className="card mb-3" style={{maxwidth: "540px"}} key={canchaFutbol.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={canchaFutbol.url_imagen} className="img-fluid rounded-start" alt={canchaFutbol.nombre}/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{canchaFutbol.nombre}</h5>
                                        <p className="card-text">cantidad jugadores: {canchaFutbol.jugadores}</p>
                                        <p className="card-text"> cancha techada:  {canchaFutbol.techo ? "si": "no"} </p>
                                        {canchaFutbol.horarios.map(hora => (
                                        <button onClick={()=> laReserva(canchaFutbol.id, hora.hora)} key={hora.id} className="btn border"> {hora.hora} </button>
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
                        
                           
                    
                
                    
            

 
export default Futbol;