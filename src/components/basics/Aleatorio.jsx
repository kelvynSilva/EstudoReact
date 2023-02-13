import React from "react";

export default (props) => {
    const { min, max } = props;
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div>
            <h2>Valor aleatório</h2>

            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo</strong> {max}
            </p>

            <p>
                <strong>Valor Aleatório</strong> {result}
            </p>
        </div>
    )
}