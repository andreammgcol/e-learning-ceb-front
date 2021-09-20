import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return (
            <div className="layout-footer">
                <span className="footer-text" style={{ 'marginLeft': '5px' }}>Reactapp |</span>
                <span className="footer-text" style={{ 'marginLeft': '5px' }}>All rights reserved</span>
            </div>
        );
    }
}
