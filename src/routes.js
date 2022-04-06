import { Routes, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login'; 
import Home from './pages/Home';

export default function mainRoutes() {
    return(
        <Routes>
            <Route path="/auth/cadastro" element={<Cadastro />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}