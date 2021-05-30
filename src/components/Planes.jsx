import React from 'react';
import '../assets/styles/Planes.scss';
import star from '../assets/images/star-solid.svg';

const Planes = () => {
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
        </React.Fragment>
    );
}
 
export default Planes;