import React from 'react';
import {Link} from 'react-router-dom';

import './NavLink.css'

function NavLink(props) {
    return(
        <Link to={props.route} style={{textDecoration: 'none'}}>
            <span className="nav-link">{props.name}</span>
        </Link>
    );
}

export default NavLink;