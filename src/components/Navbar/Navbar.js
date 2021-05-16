import './Navbar.css';
import Logo from '../Logos/Logo.js';
import NavItem from'./NavItem.js';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
        <nav className="navbar">
            <Link to="/" style={{height: "100%"}}>
                <Logo className="nav-logo"/>
            </Link>
            <ul className="nav-links">
                {props.items.map(item => 
                    <NavItem item={item} depth={1}></NavItem>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;