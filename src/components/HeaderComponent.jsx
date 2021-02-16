import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><h1 className="navbar-brand">Crud em React JS</h1></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;


