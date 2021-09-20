import React, { Component } from 'react';

export class AppMenu extends Component {

    render() {
        return (
            <nav id="sidebar">
                        <div className="custom-menu">
                            <button type="button" id="sidebarCollapse" className="btn btn-primary">
                                <i className="fa fa-bars"></i>
                                <span className="sr-only">Toggle Menu</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <img src="./images/LogoCEB_w.png" alt="logo" className="logo" height="70" />
                            <ul className="list-unstyled components mb-5">
                                <li className="active">
                                    <a href="#clasesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span className="fa fa-home mr-3"></span> Mis Clases</a>
                                    <ul className="collapse list-unstyled" id="clasesSubmenu">
                                        <li>
                                            <a href="/#/main">Módulo 1</a>
                                        </li>
                                        <li>
                                            <a href="/#/main">Módulo 2</a>
                                        </li>
                                        <li>
                                            <a href="/#/main">Módulo 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/#/notes"><span className="fa fa-tasks mr-3"></span> Mis Examenes</a>
                                </li>
                                <li>
                                    <a href="#certSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span className="fa fa-sticky-note mr-3"></span> Mis Certificados</a>
                                    <ul className="collapse list-unstyled" id="certSubmenu">
                                        <li>
                                            <a href="#">Certificado Notas</a>
                                        </li>
                                        <li>
                                            <a href="#">Resumen Pagos</a>
                                        </li>
                                        <li>
                                            <a href="#">Paz y Salvo</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/#/main"><span className="fa fa-briefcase mr-3"></span> Mis pendientes</a>
                                </li>
                                <li>
                                    <a href="/#/main"><span className="fa fa-question-circle mr-3"></span>  Ayuda</a>
                                </li>
                                <li>
                                    <a href="#"><span className="fa fa-sign-out mr-3"></span>  Salir</a>
                                </li>
                            </ul>
                            <div className="mb-5">
                                <form action="#" className="subscribe-form">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control" placeholder="Buscar" />
                                    </div>
                                </form>
                            </div>

                            <div className="footer">
                                <p>
                                    &copy; Copyright 2021 <br /> All rights Reserved <br />Designed by Andrea Méndez Mesias
                                </p>
                            </div>
                        </div>
                    </nav>
        );
    }
}
