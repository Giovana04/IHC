import { Link } from "react-router-dom";
import '../../assets/estilo.css';

function Error() {
    return (
        <div>
            <h1>Essa pagina existe não!</h1>
            <br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error;