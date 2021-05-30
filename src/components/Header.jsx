import React from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/images/tuguialocal_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header__container d-flex">
            <div className="header__logo d-flex justify-content-end align-items-center">
                <img className="header__logo-img" src={ logo } alt=""/>
            </div>
            <div className="header__menu d-flex justify-content-around align-items-end">
                <Link href="#" className="header__menu-option" to="/">INICIO</Link>
                <Link href="#" className="header__menu-option">ACERCA DE NOSOTROS</Link>
                <Link href="#" className="header__menu-option">CLIENTES</Link>
                <Link href="#" className="header__menu-option" to="/nuestros-planes">NUESTROS PLANES</Link>
                <Link href="#" className="header__menu-option" to="/contacto">CONTACTO</Link>
            </div>
        </header>
    );
}
 
export default Header;