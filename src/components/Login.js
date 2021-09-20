import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { isValidUser } from "../services/aulaVirtualService";

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            error: null,
            redirect: false,
            userNotValid: false,
            userId: null
        }
        this.textInputUserRef = React.createRef();
        this.textInputPassRef = React.createRef();
    }    

    handleLogin = event => {
        // console.log('-----------------');
        // console.log('event -> handleLogin.');
        // console.log(this.textInputUserRef.current.value);
        // console.log(this.textInputPassRef.current.value);
        var user = isValidUser(this.textInputUserRef.current.value, this.textInputPassRef.current.value);
        if (user.valid) {
            this.setState({
                redirect: true,
                userId: user.id
            });
        } else {
            // user not valid in the system
            this.setState({
                userNotValid: true
            });
        }
        event.preventDefault();
    };

    render() {
        if (this.state.redirect) {
            const url = '/main/' + this.state.userId;
            return <Redirect to={url} />
        }
        return (
            <>
                <section id="login" className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-5">
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src="images/LogoCEB-02.png" alt="logo" />
                                    </div>
                                    <h3 className="text-center mb-4">Bienvenido</h3>
                                    {
                                        this.state.userNotValid &&
                                        <h5 className="text-center mb-4">Error: Usuario no registrado en el sitema.</h5>
                                    }
                                    <form action="#" className="login-form">
                                        <div className="form-group login-form">
                                            <input type="text"
                                                ref={this.textInputUserRef}
                                                name="user"
                                                className="form-control rounded-left"
                                                placeholder="Usuario"
                                                required />
                                        </div>
                                        <div className="form-group d-flex">
                                            <input type="password"
                                                ref={this.textInputPassRef}
                                                name="password"
                                                className="form-control rounded-left"
                                                placeholder="Contraseña"
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit"
                                                onClick={this.handleLogin}
                                                className="form-control btn btn-primary rounded submit px-3">
                                                Ingresar
                                            </button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Recuérdame
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right forgot">
                                                <a href="/">Olvidé mi contraseña</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
