import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Futbol from "./components/canchasFutbol/Futbol";
import Deportes from "./components/deportes";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Tenis from "./components/tenis/Tenis";
import Voley from "./components/voley/Voley";


function App() {
  return (
<Router>

<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
            <a className="navbar-brand" to="#">OPEN SPORTS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Futbol">futbol</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Tenis">tenis</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Voley">Voley</Link>
                </li>
                     
                
               
            </ul>
            </div>
        </div>
        </nav>

      
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Futbol' element={<Futbol />} />
        <Route path='/Tenis' element={<Tenis/>} />
        <Route path='/Voley' element={<Voley/>} />
        
        </Routes>
        <Footer/>
    </div>
      </Router>

  );
}

export default App;
