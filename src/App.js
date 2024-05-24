import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} /> {/* Añade esta línea */}
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
