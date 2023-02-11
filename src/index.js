
import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';


import App from './app';
import Primerio from './components/basics/Primeiro';
import Aleatorio from './components/basics/Aleatorio';

ReactDOM.render(
    <Aleatorio
        valor1={1}
        valor2={10}
    />
    , document.getElementById('root')
)


