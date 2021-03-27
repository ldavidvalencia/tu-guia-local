import React from 'react';
import '../assets/styles/Home.scss';
import star from '../assets/images/star-solid.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';

const Home = () => {
    return (
        <React.Fragment>
            <div className="planes__container d-flex flex-column justify-content-center align-items-center">
                <div>
                    <p className="planes__text-1">CONOCER NUESTROS PLANES</p>
                </div>
                <div className="planes__text-2 d-flex">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span>STANDARD</span>
                        <div>
                            <img className="planes__star" src={star} alt=""/>
                        </div> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span className="planes__text-premium">PREMIUM</span>
                        <div>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                        </div> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span>PRO</span>
                        <div>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                            <img className="planes__star" src={star} alt=""/>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="redes__container d-flex justify-content-center align-items-center">
                <p className="redes__texto">SÍGUENOS EN NUESTRAS REDES SOCIALES</p>
                <img className="redes__logo" src={facebook} alt=""/>
                <img className="redes__logo" src={instagram} alt=""/>
            </div>
        </React.Fragment>
    );
}
 
export default Home;