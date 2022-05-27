import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";
import Catalogo from './pages/catalogo'
import Login from './pages/login.js';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <h1>NagemFlix</h1>
            <Router>
                <Nav variant="tabs">
                    <Nav.Link as={Link} to="/">Faça login </Nav.Link>
                    <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
                </Nav>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/catalogo" element={<Catalogo />}></Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
