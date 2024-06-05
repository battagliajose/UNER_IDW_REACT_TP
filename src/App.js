import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//CSS
import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/main.css";

//Componentes
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Páginas
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Admin from "./pages/Admin";
import Alojamiento from "./components/Admin/Alojamientos/Alojamiento"

import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/alojamiento" element={<Alojamiento />}></Route>           
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
