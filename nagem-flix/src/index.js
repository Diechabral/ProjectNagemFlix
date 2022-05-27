import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Login from './pages/Login';
import "./pages/Login/style.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />
);


reportWebVitals();
