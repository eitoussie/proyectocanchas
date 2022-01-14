import { Link } from "react-router-dom";
import Deportes from "../deportes/Deportes";
import foto from "../../img/redes.png";
import "./Home.css" 

const Home = () => {
      return ( 
 <>
 

        
        {/* slider */}


        <div id="slider" className="carousel slide mt-5" data-bs-ride="carousel"/>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://notautil.com/wp-content/uploads/2015/06/banner-futbol.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.wallpapertip.com/wmimgs/31-315414_tennis-ball-on-court-close-up-banner-tennis.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://fmvoley.com/wp-content/uploads/2019/10/20170613-141900-banner-voley-varonil-movil.jpg"
 className="d-block w-100" alt="..."/>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className=" m-5">
  <Deportes/>
  </div>

  {/* redes sociales */}
  <div className="d-flex justify-content-around redes mb-5">
    <p className="textoredes">seguinos en <br></br>nuestras redes sociales</p>
    <img src= {foto} className="fotoredes" alt="redes"/>
  </div>
<div>

<form className="container mb-3">
  <h2>Contacto</h2>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="textarea" className="form-label">comentario</label>
    <textarea type="textarea" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-success">Enviar</button>
</form>
<div>
 <div className="container mt-5">
   <h2> Ubicacion</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26270.910251194957!2d-58.44867204999999!3d-34.607605899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1642122327071!5m2!1ses-419!2sar" width="300" height="250" style={{border:0}}  loading="lazy"></iframe>
</div>
</div>
</div>
</>
     );


}
 
export default Home;
