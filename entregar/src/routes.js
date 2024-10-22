import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Error from './pages/Error';
import Produto from './pages/Produto';
import Header from './components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path='/contato' element={<Contato/>}/>
                    <Route path='/*' element={<Error/>}/>
                    <Route path='/produto' element={<Produto/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
