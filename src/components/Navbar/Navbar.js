import './Navbar.css';
import Logo from '../Logos/Logo.js'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
        <nav className="navbar">
            <Link to="/" style={{height: "100%"}}>
                <Logo className="nav-logo"/>
            </Link>
            <ul className="nav-links">
                {props.items.map(item => 
                <li className="nav-item">
                    <Link to={item.route} className="nav-link">
                        {item.name}
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;