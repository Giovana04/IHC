import { Link } from "react-router-dom";
import '../../assets/estilo.css';

function Contato(){
    return(
        <div>
            <h1>Contatinhos</h1>
            <br/>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/sobre'}>Sobre</Link>
            <br/>
            <Link to={'/produto'}>Produto</Link>
        </div>
    );
}

export default Contato;