import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            redirect: false,
            videoCompleted: false,
            videoUniqueID: 1453,
            videoName: 'Clase 1 - Introducción al curso.',
        }
    }

    handleLogin = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    handleOnVideoEnd = () => {
        console.log('event> Video ended');
        this.setState({
            videoCompleted: true
        });
    };
    handleOnVideoPause = () => {
        console.log('event> Video paused');
    };
    handleOnVideoPlay = () => {
        console.log('event> Video played');
    };
    handleOnVideoPlaying = () => {
        console.log('event> Video played after pause');
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to='/main' />
        }

        return (
            <div className="p-grid p-fluid">

                <div className="p-col-12">
                    <div className="card">
                        <h1>Home</h1>
                        <p>The home page.</p>
                    </div>
                </div>

                <div className="p-col-12">
                    
                    <div className="card card-w-title">
                        Video Demo: <br />

                        <div className="card">
                        {
                            this.state.videoCompleted &&
                            <h2>
                                Class completed: {this.state.videoName}. Kudos!.
                                Please, continue with the next lesson.
                            </h2>
                        }
                        </div>

                        <video controls
                            onEnded={this.handleOnVideoEnd}
                            onPause={this.handleOnVideoPause}
                            onPlay={this.handleOnVideoPlay}
                            onPlaying={this.handleOnVideoPlaying}
                            width="540">
                            <source src={'https://download.samplelib.com/mp4/sample-5s.mp4'}
                                    type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>

                        <div>hello!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Home);
