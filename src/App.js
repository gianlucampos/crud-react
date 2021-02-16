import React from 'react';
import './App.css';
import ListaMusicasComponent from './components/ListaMusicasComponent';
import ListaMusicasService from './services/ListaMusicasService';

function App() {
    return (
        <div>
            <ListaMusicasComponent />
            <button onClick={ListaMusicasService.testeAjax}>
                Testa Ajax
            </button>
        </div>
    );

}

export default App;