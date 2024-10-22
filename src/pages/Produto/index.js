import { Link } from "react-router-dom";
import cyclope from '../../assets/cyclope.jpg'
import '../../assets/estilo.css';
function Produto(){
    return(
        <div>
            <h1>Produto</h1>
            <br/>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/sobre'}>Sobre</Link>
            <br/>
            <Link to={'/contato'}>Contato</Link>
            <br/>
            <img src={cyclope}></img>
        </div>
    );
}

export default Produto;