import './Mega.css'
import React, { useState } from "react";


export default props => {
    function geradorNumeros(qtd) {
        const numerosMega = [];

        while (numerosMega.length < qtd) {
            const numeroSorteado = Math.floor(Math.random() * (61 - 1) + 1);

            if (numerosMega.indexOf(numeroSorteado) === -1) numerosMega.push(numeroSorteado)

        };

        numerosMega.forEach((numeros, indice) => {
            if (numeros.toString().length === 1) numerosMega[indice] = `0${numeros}`
        });

        return numerosMega.sort((n1, n2) => n1 - n2);
    }


    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3 >{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Qdte de Números</label>
                <input type="number" value={qtde}
                    min="6"
                    max="15"
                    onChange={e => {
                        setQtde(+e.target.value);
                        setNumeros(geradorNumeros(+e.target.value))
                    }} />
            </div>
            <button onClick={_ => setNumeros(geradorNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}