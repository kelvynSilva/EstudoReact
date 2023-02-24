import './Contador.css';
import React, { Component } from "react";

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

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        });
    };

    render = () => {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <p>{this.state.number}</p>
                <div>
                    <label>Passo Inicial: </label>
                    <input type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador