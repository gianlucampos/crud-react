import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MusicaCadComponent from './components/MusicaCadComponent';
import MusicaFilterComponent from './components/MusicaFilterComponent';

function App() {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route exact path={["/", "/musicas"]} component={MusicaFilterComponent} />
                        <Route path="/musicas/create" component={MusicaCadComponent} />
                        <Route path="/musicas/edit/:id" component={MusicaCadComponent} />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );

}

export default App;