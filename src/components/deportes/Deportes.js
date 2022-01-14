import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Deportes.css"



const Deportes = () => {
    
        const [info, setInfo] = useState([])
    
        const getInfo = async () => {
        const response = await axios.get("https://apipdtc.herokuapp.com/deportes")
        setInfo(response.data)
        }
        useEffect(() => {
            getInfo();
          }, []);
          
          

    return( 
        <>
                

                {info.length>0?
                
                <div className="d-flex container">
                <div className="card text-center mx-3" style={{width: "18rem"}}>
                    <img src={info[0].url_imagen} className="card-img-top" alt={info[0].deporte}/>
                        <div className="card-body">
                            <h5 className="card-title">{info[0].deporte}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/futbol" className="btn btn-success">ver canchas</Link>
                        </div>
                    </div>
                    <div className="card text-center mx-3" style={{width: "18rem"}}>
                    <img src={info[1].url_imagen} className="card-img-top" alt={info[1].deporte}/>
                        <div className="card-body">
                            <h5 className="card-title">{info[1].deporte}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="tenis" className="btn btn-success">ver canchas</Link>
                        </div>
                    </div>
                    <div className="card text-center mx-3" style={{width: "18rem"}}>
                    <img src={info[2].url_imagen} className="card-img-top" alt={info[2].deporte}/>
                        <div className="card-body">
                            <h5 className="card-title">{info[2].deporte}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="voley" className="btn btn-success">ver canchas</Link>
                        </div>
                    </div>
                    </div>

                
                    
            
                :
                <p>cargando canchas...</p>}
                

                
        </>
        
    );
}
 
export default Deportes;
