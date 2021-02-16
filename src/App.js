import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListaMusicasComponent from './components/ListaMusicasComponent';
import ListaMusicasService from './services/ListaMusicasService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/" component={ListaMusicasComponent} />
                        <Route path="/musicas" component={ListaMusicasComponent} />
                        <ListaMusicasComponent />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );

}

export default App;