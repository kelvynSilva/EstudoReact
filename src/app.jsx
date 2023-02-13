import React from "react";

import Card from "./components/layout/Card";
import Primerio from './components/basics/Primeiro';
import ComParamento from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';

export default () =>
    <div id="app">
        <h1>Fundamento Reat (Arrow _)</h1>

        <Card
            titulo="Numero Aleatório"
        >
            <Aleatorio min={0} max={10} />
        </Card>

        <Card
            titulo="Fragmento"
        >
            <Fragmento />
        </Card>

        <Card
            titulo="Primerio"
        >
            <Primerio />
        </Card>
        <Card
            titulo="Com Parametro"
        >
            <ComParamento
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3}
            />
        </Card>
    </div>



