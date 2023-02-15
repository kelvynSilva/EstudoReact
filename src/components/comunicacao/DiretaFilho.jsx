import React from "react";

export default props => {
    return (
        <div>
            <span>{props.nome} <strong>{props.idade}</strong> {props.nerd == true ? "true" : "false"}</span>
        </div>
    )
}