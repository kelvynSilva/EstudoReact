import React from "react";

import Primerio from './components/basics/Primeiro';
import ComParamento from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';

export default () =>
    <div id="app">
        <h1>Fundamento Reat (Arrow _)</h1>
        <Primerio />
        <ComParamento
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Fragmento />
    </div>



