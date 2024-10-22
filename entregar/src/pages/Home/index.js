import { Link } from "react-router-dom";
import '../../assets/estilo.css';

function Home(){
    return(
        <div>
            <h1>Bem-Vindo a IHC</h1>
            <br/>
            <Link to={'/sobre'}>Sobre</Link>
            <br/>
            <Link to={'/contato'}>Contato</Link>
            <br/>
            <Link to={'/produto'}>Produto</Link>
            <br/>
        </div>
    );
}

export default Home;