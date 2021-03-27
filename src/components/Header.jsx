import React from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/images/tuguialocal_logo.png'

const Header = () => {
    return (
        <header className="header__container d-flex">
            <div className="header__logo d-flex justify-content-end align-items-center">
                <img className="header__logo-img" src={ logo } alt=""/>
            </div>
            <div className="header__menu d-flex justify-content-around align-items-end">
                <a href="#" className="header__menu-option">INICIO</a>
                <a href="#" className="header__menu-option">ACERCA DE NOSOTROS</a>
                <a href="#" className="header__menu-option">CLIENTES</a>
                <a href="#" className="header__menu-option">NUESTROS PLANES</a>
                <a href="#" className="header__menu-option">CONTACTO</a>
            </div>
        </header>
    );
}
 
export default Header;