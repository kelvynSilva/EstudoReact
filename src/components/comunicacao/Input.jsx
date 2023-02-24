import React, { useState } from "react";

export default props => {
    const [valor, setValor] = useState('inicial');
    function exibirElemento(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <h2>{valor}</h2>
            <input type="text" value={valor} onChange={exibirElemento} />
        </div>
    )
}