import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AulaVirtual } from './components/AulaVirtual';
import { Login } from './components/Login';
import { MyNotes } from './components/MyNotes';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,            
        };
    }

    render() {

        return (
            <div>
                <Route path="/" exact component={Login} />
                <Route path="/main" exact component={AulaVirtual} />
                <Route path="/main/:id" exact component={AulaVirtual} />
                <Route path="/notes" exact component={MyNotes} />
            </div>
        );
    }
}

export default App;
