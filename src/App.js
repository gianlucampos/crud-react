import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListaMusicasComponent from './components/ListaMusicasComponent';
import ListaMusicasService from './services/ListaMusicasService';

function App() {
    return (
        <div>
            <HeaderComponent />
            <div>
                <ListaMusicasComponent />
                <button onClick={ListaMusicasService.testeAjax}>
                    Testa Ajax
                </button>
            </div>
            <FooterComponent />
        </div>
    );

}

export default App;