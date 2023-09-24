import { React, useContext } from 'react';
import './Navbar.css'
import NavbarContext from '../../contexts/NavbarContext';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const {navBarLinks} = useContext(NavbarContext);

    return (
        <nav>
            <a className='mainLink' href='/'>Jimmy</a>
            <ul style={{ listStyle: 'none' }}>
                {navBarLinks.map((nav, idx) => {
                    return (
                        <li key={idx}>
                            <Link target="_blank" to={nav.url}>{nav.title}</Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
};

export default Navbar;