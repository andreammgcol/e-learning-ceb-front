import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import { Main } from './Main';

export class AulaVirtual extends Component {

    render() {
        return (
            <>
                <div className="wrapper d-flex align-items-stretch">
                    <AppMenu />
                    <Main />
                </div>

                <div className="action-progress-block-mobile mb-4">
                    <h5>Mi progreso</h5>
                    <div className="d-flex align-items-center">
                        <div className="progress w-100">
                            <div className="progress-bar" role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="ml-4">25%</div>
                    </div>
                </div>
            </>            
        );
    }
}
