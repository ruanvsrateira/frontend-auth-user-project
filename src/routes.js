import { Routes, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro'; 

export default function mainRoutes() {
    return(
        <Routes>
            <Route path="/auth/cadastro" element={<Cadastro />} />
            <Route path="auth/login" />
        </Routes>
    );
}