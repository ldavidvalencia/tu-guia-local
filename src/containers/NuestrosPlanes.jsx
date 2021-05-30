import React, { Component } from 'react';
import Planes from '../components/Planes';
import '../assets/styles/NuestrosPlanes.scss';

class NuestrosPlanes extends Component {
    state = {
        bullets: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
    render() { 
        return (
            <React.Fragment>
            <Planes />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="plan__caja caja__standard mt-5">
                    <p className="plan__bold">TU GUÍA DE PLAN STANDARD</p>
                    <p className="plan__text">1 Video</p>
                    <p className="plan__text">15 Fotos</p>
                    <p className="plan__text">+ Redes sociales</p>
                    <div className="d-flex mt-3">
                        {
                            this.state.bullets.map(item =>
                                <div className="plan__point mr-2"></div>
                            )
                        }
                    </div>
                    <p className="plan__bold">$100.000</p>
                    <button className="plan__button">Ver detalle</button>
                </div>
                <div className="plan__caja caja__premium mt-5">
                    <p className="plan__bold">TU GUÍA DE PLAN PREMIUM</p>
                    <p className="plan__text">3 Videos</p>
                    <p className="plan__text">20 Fotos</p>
                    <p className="plan__text">+ Redes sociales</p>
                    <div className="d-flex mt-3">
                        {
                            this.state.bullets.map(item =>
                                <div className="plan__point mr-2"></div>
                            )
                        }
                    </div>
                    <p className="plan__bold">$120.000</p>
                    <button className="plan__button">Ver detalle</button>
                </div>
                <div className="plan__caja mt-5 caja__pro mb-5">
                    <p className="plan__bold">TU GUÍA DE PLAN PROFESIONAL</p>
                    <p className="plan__text">5 Videos</p>
                    <p className="plan__text">25 Fotos</p>
                    <p className="plan__text">+ Redes sociales</p>
                    <div className="d-flex mt-3">
                        {
                            this.state.bullets.map(item =>
                                <div className="plan__point mr-2"></div>
                            )
                        }
                    </div>
                    <p className="plan__bold">$150.000</p>
                    <button className="plan__button">Ver detalle</button>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
 
export default NuestrosPlanes;

// const NuestrosPlanes = () => {
//     let bullets = [1,2,3,4,5,6];
//     return (
//         <React.Fragment>
//             <Planes />
//             <div className="d-flex flex-column justify-content-center align-items-center">
//                 <div className="plan__caja caja__standard mt-5">
//                     <p className="plan__bold">TU GUÍA DE PLAN STANDARD</p>
//                     <p className="plan__text">1 Video</p>
//                     <p className="plan__text">15 Fotos</p>
//                     <p className="plan__text">+ Redes sociales</p>
//                     <div className="d-flex mt-3">
//                         {
//                             bullets.map(item => {
//                                 // <div className="plan__point mr-2">item</div>
//                                 <p>hola</p>
//                             })
//                         }
//                     </div>
//                     <p className="plan__bold">$100.000</p>
//                     <button className="plan__button">Ver detalle</button>
//                 </div>
//                 <div className="plan__caja caja__premium mt-5">
//                     <p className="plan__bold">TU GUÍA DE PLAN PREMIUM</p>
//                     <p className="plan__text">3 Videos</p>
//                     <p className="plan__text">20 Fotos</p>
//                     <p className="plan__text">+ Redes sociales</p>
//                     <p className="plan__bold">$120.000</p>
//                     <button className="plan__button">Ver detalle</button>
//                 </div>
//                 <div className="plan__caja mt-5 caja__pro mb-5">
//                     <p className="plan__bold">TU GUÍA DE PLAN PROFESIONAL</p>
//                     <p className="plan__text">5 Videos</p>
//                     <p className="plan__text">25 Fotos</p>
//                     <p className="plan__text">+ Redes sociales</p>
//                     <p className="plan__bold">$150.000</p>
//                     <button className="plan__button">Ver detalle</button>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
 
// export default NuestrosPlanes;