import React from "react";

export default props => {
    return (
        <div>
            <label>Passo Inicial: </label>
            <input type="number" value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}