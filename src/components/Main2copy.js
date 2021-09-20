import React, { Component } from 'react';
import { Redirect } from 'react-router'

export class Main2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            redirect: false,
            isLoaded: false,
            items: []
        }
        console.log('constructor main')
    }    

    handleEventMain = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    componentDidMount() {
        fetch("https://lab-tourist-api.herokuapp.com/api/v1/categories")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
                
                this.setState({
                    isLoaded: true,
                    items: result.response
                });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/home' />
        }

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-lg-4">
                            28 Eventos encontrados para hoy en la ciudad
                        </div>
                    </div>
                    
                    <div className="p-grid p-fluid">
                        {items.map(item => (
                            <div className="p-col-12 p-lg-4" key={item.id}>
                                <span>{item.id}-{item.name} </span>
                            </div>
                        ))}
                    </div>

                    <div className="p-col-12">
                        <input type="button" value="Next" onClick={this.handleEventMain} />
                    </div>
                </div>
            );
        }

    }
}
