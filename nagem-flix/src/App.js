import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import Catalogo from './pages/catalogo'
import Login from './pages/login.js';
import Sobre from './pages/sobre.js';
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
                    <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                </Nav>
                <Switch>
                    <Route path="/" elemenet={<Login />}></Route>
                    <Route path="/catalogo" elemenet={<Catalogo />}></Route>
                    <Route path="/sobre.js" elemenet={<Sobre />}></Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;