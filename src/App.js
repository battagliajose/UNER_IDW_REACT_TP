import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reset.css'
import './styles/normalize.css'
import './styles/main.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
