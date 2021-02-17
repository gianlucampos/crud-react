import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MusicaFilterComponent from './components/MusicaFilterComponent';
import MusicaService from './services/MusicaService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicaCadComponent from './components/MusicaCadComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route exact path={["/", "/musicas"]} component={MusicaFilterComponent} />
                        <Route path="/musicas/create" component={MusicaCadComponent} />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );

}

export default App;