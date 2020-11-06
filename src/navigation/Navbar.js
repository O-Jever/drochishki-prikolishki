import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <nav className="app-nav">
                <ul className="app-nav__list">
                    <li className="app-nav__list-item">
                        <a href="/map-with-weather" className="app-nav__link">Маршрут и погода</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
