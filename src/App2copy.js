import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import { Main } from './components/Main';

import './styles/menubar.css';
import './styles/basic.css';

class App2 extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };
    }

    render() {

        return (
            <div>
                <header>
                    <div className="encabezado">
                        <nav role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox"/>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                <ul id="menu">
                                    <img src="images/icons/user_icon.png" alt="" />
                                    <li><a className="amenu" href="/"><p className="userName">Juan Guerra</p></a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-user"></i>Account</a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-commenting"></i>Notifications</a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-list"></i>My plans</a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-home"></i>Home</a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-arrow-circle-right"></i>Log out</a></li>
                                    <li><a className="amenu" href="/"><i className="fa fa-fw fa-question-circle-o"></i>Help</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="logo">
                            
                        </div>
                        <div className="box-login">
                            <div className="btn btn-login">
                                <span>SIGN IN</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="location">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="What's your location?" />
                            <button type="submit" className="searchButton">
                                <i className="fa fa-map-marker"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* componentes /*/}
                <div className="layout-main">
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/main" exact component={Main} />
                </div>

                <footer>
		        </footer>
            </div>
        );
    }
}

export default App2;
