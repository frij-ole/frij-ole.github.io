import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

function NavItem(props) {
    
    let evenOdd = null
    props.depth % 2 == 0 ? evenOdd="even" : evenOdd = "odd";
    let navTitle = null;
    if(props.item.route) {
        navTitle = <Link className="nav-link" to={props.item.route}>{props.item.name}</Link>;
    } else {
        navTitle = props.item.name;
    }
    return(
        <li className={props.item.route ? `nav-item clickable ${evenOdd}` : `nav-item ${evenOdd}`}>
            <div className="nav-title">
                {navTitle}
            </div>
            {props.item.children && 
            <ul className="nav-children">
                {props.item.children.map(child => 
                    <NavItem item={child} depth={props.depth+1}></NavItem>
                )}
            </ul>}
        </li>
    );
    
}

export default NavItem;