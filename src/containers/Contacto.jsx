import React, { Component } from 'react';
import '../assets/styles/Contacto.scss';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';

class Contacto extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1 className="title mt-5 mb-5">CONTACTO</h1>
                <div className="d-flex justify-content-center mb-5">
                    <div className="container__preguntas">
                        <p className="titulos__caja">Preguntas</p>
                        <p className="texto__caja">Para todo tipo de preguntas, comentarios e inquietudes; Por favor llámanos:</p>
                        <p className="texto__caja">+57 320 214 7022</p>
                        <p className="texto__caja">o completa el formulario a continuación:</p>
                        <div className="d-flex flex-column mt-5">
                            <label className="label__input" htmlFor="nombre">Nombre</label>
                            <input className="mb-4" type="text" name="nombre" id=""/>

                            <label className="label__input" htmlFor="apellido">Apellido</label>
                            <input className="mb-4" type="text" name="apellido" id=""/>

                            <label className="label__input" htmlFor="email">Email*</label>
                            <input className="mb-4" type="email" name="email" id=""/>

                            <label className="label__input" htmlFor="tel">Teléfono</label>
                            <input className="mb-4" type="tel" name="tel" id=""/>

                            <label className="label__input" htmlFor="mensaje">Déjanos tu mensaje...</label>
                            <input className="mb-4" type="text" name="mensaje" id=""/>

                            <button className="input__button mt-4 ml-auto">Enviar</button>
                        </div>
                    </div>
                    <div className="container__oficina">
                        <div className="mb-5">
                            <p className="titulos__caja">Oficina principal</p>
                            <p className="texto__caja">Oficina 123,</p>
                            <p className="texto__caja">Ibague - Tolima</p>
                            <p className="texto__caja">info@tuguialocal.co</p>
                            <p className="texto__caja">Teléfono: +57 320 214 7022</p>
                        </div>
                        <div className="mt-5 mb-5">
                            <p className="titulos__caja">Empleos</p>
                            <p className="texto__caja">Para aplicar a un trabajo en tu guía local,</p>
                            <p className="texto__caja">envia tu hoja de vida y carta de recomen-</p>
                            <p className="texto__caja">dación a: info@tuguialocal.co</p>
                        </div>
                        <div className="d-flex mt-5">
                            <img className="redes__logo mr-5" src={instagram} alt=""/>
                            <img className="redes__logo" src={facebook} alt=""/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Contacto;