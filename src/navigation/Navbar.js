import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <nav className="app-nav">
                <ul className="app-nav__list">
                    <li className="app-nav__list-item">
                        <a href="/test" className="app-nav__link">Тестовая страница</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
