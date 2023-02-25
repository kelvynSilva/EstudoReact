import './Contador.css';
import React, { Component } from "react";

import Display from './Display';
import Menu from './Menu';
import Buttons from './Buttons';

class Contador extends React.Component {
    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo
        });
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo
        });
    };

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    };

    render = () => {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.number} />
                <Menu passo={this.state.passo} setPasso={this.setPasso} />
                <Buttons onInc={this.inc} onDec={this.dec} />
            </div>
        )
    }
}

export default Contador