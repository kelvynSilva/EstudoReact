import './App.css'
import React from "react";

import TabelaProdutos from './components/repaticao/TabelaProdutos';
import ListaAlunos from './components/repaticao/ListaAlunos';
import Familia from './components/basics/Familia';
import FamiliaMenbro from './components/basics/FamiliaMenbro';
import Card from "./components/layout/Card";
import Primerio from './components/basics/Primeiro';
import ComParamento from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';

export default () =>
    <div className="App" >
        <h1>Fundamento Reatc</h1>

        <div className="Cards">
            <Card titulo="#7 - Desafio" color="#E53935">
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Repetiçao" color="#FF9800">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#FFBCDA">
                <Familia sobrenome="costa">
                    <FamiliaMenbro nome="kelvn" />
                    <FamiliaMenbro nome="Monique" />
                    <FamiliaMenbro nome="Maria Julia" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#EBBF81">
                <Aleatorio min={0} max={10} />
            </Card>

            <Card
                titulo="Fragmento" color="#B4FB97"
            >
                <Fragmento />
            </Card>

            <Card
                titulo="Primerio" color="#FFF878"
            >
                <Primerio />
            </Card>
            <Card
                titulo="Com Parametro" color="#6EE0D2"
            >
                <ComParamento
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>
        </div>

    </div >



