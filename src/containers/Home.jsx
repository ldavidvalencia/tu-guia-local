import React from 'react';
import '../assets/styles/Home.scss';
import star from '../assets/images/star-solid.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import Planes from '../components/Planes';

const Home = () => {
    return (
        <React.Fragment>
            <Planes />
            <div className="redes__container d-flex justify-content-center align-items-center">
                <p className="redes__texto">SÍGUENOS EN NUESTRAS REDES SOCIALES</p>
                <img className="redes__logo" src={facebook} alt=""/>
                <img className="redes__logo" src={instagram} alt=""/>
            </div>
        </React.Fragment>
    );
}
 
export default Home;